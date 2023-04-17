<script lang="ts">
    import { onMount } from "svelte"
    import DarkModeToggle from "$lib/DarkModeToggle.svelte";
    import Icon from "@iconify/svelte"
    import { slide, fly, fade, crossfade } from "svelte/transition"
    import { enhance } from "$app/forms";
    import { browser } from "$app/environment";

    let scrollY = 0
    let innerHeight: number
    let headerElement: HTMLDivElement

    const sleep = (t = 200) => new Promise(res => setTimeout(res, t))
    let showInfo = sleep(2000)

    let animating = false
    // const onScroll = () => {
    //     if (!headerElement || animating) return

    //     animating = true
    //     requestAnimationFrame(() => {
    //         if (headerElement) headerElement.style = `transform: translateY(${window.scrollY / 1.8}px)`
    //         animating = false
    //     })
    // }



    // onMount(() => {
    //     document.addEventListener("scroll", onScroll)

    //     onScroll()
        
    //     return () => {
    //         document.removeEventListener("scroll", onScroll)
    //     }
    // })

    const typewriter = (node: HTMLElement, options?: { duration?: number, delay?: number, keepCursor?: boolean }) => {
        let text = (node.innerText ?? "").split("")
        let duration = options?.duration ?? 100
        let delay = options?.delay ?? 200
        let keepCursor = options?.keepCursor ?? false
        let height = node.offsetHeight

        node.innerText = ""
        node.style.minHeight = `${height}px`
        node.style.minWidth = "1px";


        (async () => {
            await sleep(delay)
    
            node.classList.add("typing")
    
            node.style.minHeight = "unset"
            node.style.minWidth = "unset"
    
            let interval = setInterval(() => {
                node.innerText += text.shift()
                if (!text.length) {
                    clearInterval(interval)
                    if (!keepCursor) node.classList.remove("typing")
                }
            }, duration)
        })()
        
        return {
            destroy: () => {
            }
        }
    }

    const [ send, receive ] = crossfade({
        duration: 300,

        fallback(node) {
            return {
                duration: 300,
                css: (t) => `
                    opacity: ${t};
                `
            }
        }
    })

    $: scrolled = scrollY > innerHeight * .9 - 20
</script>

<style>
    :global(.typing::after) {
        content: "|";
        font-weight: 300;
        animation: blink 1s ease infinite;
    }

    @keyframes blink{
        0%, 100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }

    .header-container {
        width: 100%;
        height: 100vh;
        position: relative; 
    }

    .fixed-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
        --shadow-color: hsla(0, 0%, 0%, .3);
        box-shadow: 0px 2px 6px -2px var(--shadow-color);
    }

    :global(.dark) .fixed-header {
        --shadow-color: hsla(0, 0%, 40%, .9);
    }
</style>

<svelte:window bind:scrollY bind:innerHeight />
    
<div class="fixed top-2.825 right-4 sm:right-8 z-100">
    <div class="w-10 h-10 sm:w-12 sm:h-12">
        <DarkModeToggle size="100%" />
    </div>
</div>
<div class="header-container" style={`--header-offset: ${scrollY * .5}px`}>
    {#if !scrolled}
        <div class="w-full h-full flex flex-col items-center justify-center gap-20 relative" style="transform: translateY(var(--header-offset))" bind:this={headerElement}>
            <div class="flex flex-col items-start px-10">
                <div style="--primary-l: 0.15" class="primary text-6xl sm:text-8xl scandia-web font-semibold text-primary"  in:receive={{key: "main"}} out:send={{key: "main"}} class:hidden={!browser} use:typewriter>Ethan Behrends</div>
                <div style="--primary-l: 0.30" class="primary text-xl sm:text-2xl source-code-pro text-primary" in:receive={{key: "sec"}} out:send={{key: "sec"}} class:hidden={!browser} use:typewriter={{delay: 3000, keepCursor: true}}>Software Engineer</div>
            </div>
        </div>
    {/if}
</div>

{#if scrolled}
    <div style="--primary-l: 0.95" class="fixed-header p-4 flex gap-4 items-baseline primary bg-primary" transition:fade={{duration: 100}}>
        <div style="--primary-l: 0.15" class="primary text-xl sm:text-4xl scandia-web font-semibold text-primary" in:receive={{key: "main"}} out:send={{key: "main"}} >Ethan Behrends</div>
        <div style="--primary-l: 0.30" class="primary text-lg sm:text-xl source-code-pro text-primary" in:receive={{key: "sec"}} out:send={{key: "sec"}}>Software Engineer</div>
    </div>
{/if}