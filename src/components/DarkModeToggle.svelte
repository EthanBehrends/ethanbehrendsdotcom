<script context="module">
    import { writable } from "svelte/store"

    let darkMode = writable(false)
</script>

<script>
    import TransitionIcon from "./TransitionIcon.svelte"

    const setDarkMode = (to = !$darkMode) => {
        darkMode.set(to)

        document.body.classList[to ? "add" : "remove"]("dark")
    }
</script>

<div class="primary l-15 text-primary z-100 relative cursor-pointer {$$props.class}" on:click={() => setDarkMode()}>
    <div class="primary hover:bg-primary l-85 p-2 rounded-full">
        <TransitionIcon icon={$darkMode ? "material-symbols:dark-mode" : "material-symbols:light-mode"} class="w-full" style="aspect-ratio: 1 / 1" />
    </div>
</div>