<script>
    import { onMount } from "svelte"
import Tetris from "./Tetris.svelte";

    let scrollTop = 0

    const scroll = (node) => {
        const setScrollTop = () => {
            scrollTop = node.getBoundingClientRect().y
        }
        document.addEventListener("scroll", setScrollTop)

        return {
            destroy: () => {
                document.removeEventListener("scroll", setScrollTop)
            }
        }
    }
</script>

<style>
    .text-shadow {
        /* text-shadow: 1px 1px 4px rgba(255, 255, 255, .75); */
    }
</style>
    
<div use:scroll class="w-full h-[100vh] relative overflow-hidden bg-black">
    <div class="absolute inset-0" style="transform: translateY({-scrollTop / 2}px)">
        <Tetris />
    </div>
    <div class="absolute bottom-40 left-12">
        <div class="text-shadow text-7xl bree-serif text-white">Ethan Behrends</div>
        <div class="text-shadow text-3xl bree-serif text-green">Software Engineer</div>
    </div>
</div>