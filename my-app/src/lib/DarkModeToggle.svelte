<script context="module">
    import { browser } from "$app/environment";
    import { writable } from "svelte/store"

    let darkMode = writable(false)

    darkMode.subscribe(value => {
        if (browser) document.body.classList[value ? "add" : "remove"]("dark")
    })

    if (browser) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            darkMode.set(e.matches)
        })
    }
</script>

<script>
    import TransitionIcon from "./icons/TransitionIcon.svelte"

    export let size = "18px"

    const setDarkMode = (to = !$darkMode) => {
        darkMode.set(to)
    }
</script>

<button class="primary l-15 text-primary z-100 rounded-full relative cursor-pointer" style="width: {size}; height: {size}" on:click={() => setDarkMode()}>
    <div class="inner-cont primary l-85 p-2 rounded-full">
        <TransitionIcon icon={$darkMode ? "material-symbols:dark-mode" : "material-symbols:light-mode"} class="w-full" style="aspect-ratio: 1 / 1" />
    </div>
</button>

<style>
</style>