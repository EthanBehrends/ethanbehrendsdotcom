<script lang="ts">
    import { PowerAnimation, generateId } from "../utils/globals"
    import { slide, fly } from "svelte/transition"
    import { cubicOut } from "svelte/easing"
    import Icon from "./Icon.svelte"

    let popups: object = {}
    let popupRootElement: HTMLElement

    export const popup = (popupData) => {
        const popupId: string = generateId()
        popupData.__popupId = popupId

        popups = {
            [popupId]: popupData,
            ...popups,
        }

        PowerAnimation((dT: number) => {
            let element: HTMLElement = popupRootElement.querySelector(`#popup_${popupId}`)
            let timerElement: HTMLElement = element.querySelector("[timer]")

            timerElement.style.width = `${dT * 100}%`
        }, {
            duration: popupData.time,
            timingFunction: cubicOut,
            onEnd: () => {
                delete popups[popupId]
                popups = {...popups}
            }
        })
    }
</script>

<style>
    .mask-fade-y {
        -webkit-mask-image: linear-gradient(transparent 0%, black 60%)
    }
</style>

<div class="relative h-full overflow-y-hidden mask-fade-y pointer-events-auto">
    <div bind:this={popupRootElement} class="h-full overflow-y-scroll flex flex-col-reverse gap-4">
        {#each Object.entries(popups) as [key, popup], i (key ?? i)}
            <div transition:slide class="flex-shrink-0">
                <div id={`popup_${key}`} transition:fly={{x: 200}} class="w-100 min-h-50 bg-white flex flex-col shadow-lg rounded overflow-hidden">
                    <div class="flex-grow p-4 flex flex-col gap-2">
                        <div class="flex items-center">
                            <div class="font-semibold flex-grow">{popup.title}</div>
                            <Icon name="material-symbols:close" />
                        </div>
                        <div class="text-sm">{popup.description}</div>
                    </div>
                    <div class="h-2 bg-gray-200">
                        <div timer class="h-2 bg-primary">
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
