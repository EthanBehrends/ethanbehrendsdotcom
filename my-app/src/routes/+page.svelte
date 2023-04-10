<script lang="ts">
    import Header from "./Header.svelte";
    import { onMount } from "svelte";
    import { cubicInOut } from "svelte/easing"
    import Resume from "./Resume.svelte";

    let headerElement: HTMLDivElement

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
</script>

<div class="header-container" bind:this={headerElement}>
    <Header />
</div>

<div class="w-full min-h-screen relative flex flex-col items-center justify-center z-1">
    <div class="flex justify-between w-full max-w-300">
        <div class="flex flex-col">
            <div class="font-medium">
                Hello there!
            </div>
        </div>
        <div class="flex flex-col">
            <Resume />
        </div>
    </div>
</div>

<style>
  .header-container {
    z-index: 0;
    width: 100%;
    height: calc(100vh + 2rem);
    transform: translateY(0px);
    transition: none;
  }
</style>