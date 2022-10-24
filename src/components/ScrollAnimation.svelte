<script>
import { onMount } from "svelte"

let container

$: if (container) checkInView()

let inView = false
const checkInView = () => {
    let { y } = container.getBoundingClientRect()
    inView = window.innerHeight * .75 > y || window.scrollY == (window.innerHeight )
}

onMount(() => {
    document.addEventListener("scroll", checkInView)
    
    return () => {
        document.removeEventListener("scroll", checkInView)
    }
})
</script>

<div class="flex flex-col" bind:this={container}>
    {#if inView}
        <slot />
    {/if}
</div>