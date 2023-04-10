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
    const onScroll = () => {
        if (!headerElement || animating) return

        animating = true
        requestAnimationFrame(() => {
            headerElement.style = `transform: translateY(${window.scrollY / 1.6}px)`
            animating = false
        })
    }



    onMount(() => {
        document.addEventListener("scroll", onScroll)

        onScroll()
        
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    })

    const typewriter = (node: HTMLElement, options?: { duration?: number, delay?: number, keepCursor?: boolean }) => {
        let text = (node.innerText ?? "").split("")
        let duration = options?.duration ?? 100
        let delay = options?.delay ?? 200
        let keepCursor = options?.keepCursor ?? false

        node.innerText = ""

        new Promise(res => setTimeout(res, delay)).then(() => {
            node.classList.add("typing")
    
            let interval = setInterval(() => {
                node.innerText += text.shift()
                if (!text.length) {
                    clearInterval(interval)
                    if (!keepCursor) node.classList.remove("typing")
                }
            }, duration)
        })


        
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

    $: scrolled = scrollY > innerHeight / 2 - 40
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
</style>

<svelte:window bind:scrollY bind:innerHeight />
    
<div class="fixed top-4 right-8">
    <DarkModeToggle size="48px" />
</div>
<div class="header-container primary">
    {#if !scrolled}
        <div class="w-full h-full flex flex-col items-center justify-center gap-20 relative" bind:this={headerElement}>
            <div class="flex flex-col items-start px-10">
                <div class="primary l-15 text-6xl sm:text-8xl scandia-web font-semibold text-primary"  in:receive={{key: "main"}} out:send={{key: "main"}} class:hidden={!browser} use:typewriter>Ethan Behrends</div>
                <div class="primary l-30 text-xl sm:text-2xl source-code-pro text-primary" in:receive={{key: "sec"}} out:send={{key: "sec"}} class:hidden={!browser} use:typewriter={{delay: 3000, keepCursor: true}}>Software Engineer</div>
            </div>
        </div>
    {/if}
</div>

{#if scrolled}
    <div class="fixed top-4 left-4 flex gap-4 items-baseline">
        <div class="primary l-15 text-xl sm:text-4xl scandia-web font-semibold text-primary" in:receive={{key: "main"}} out:send={{key: "main"}} >Ethan Behrends</div>
        <div class="primary l-30 text-xl sm:text-xl source-code-pro text-primary" in:receive={{key: "sec"}} out:send={{key: "sec"}}>Software Engineer</div>
    </div>
{/if}