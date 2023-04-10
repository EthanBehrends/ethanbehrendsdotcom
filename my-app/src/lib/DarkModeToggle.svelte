<script context="module">
    import { writable } from "svelte/store"

    let darkMode = writable(false)
</script>

<script>
    import TransitionIcon from "./icons/TransitionIcon.svelte"

    export let size = "18px"

    const setDarkMode = (to = !$darkMode) => {
        darkMode.set(to)

        document.body.classList[to ? "add" : "remove"]("dark")
    }
</script>

<button class="primary l-15 text-primary z-100 rounded-full relative cursor-pointer" style="width: {size}; height: {size}" on:click={() => setDarkMode()}>
    <div class="inner-cont primary l-85 p-2 rounded-full">
        <TransitionIcon icon={$darkMode ? "material-symbols:dark-mode" : "material-symbols:light-mode"} class="w-full" style="aspect-ratio: 1 / 1" />
    </div>
</button>

<style>
    button {
        all: unset;
    }

    button:focus-visible {
        outline: 1px solid var(--color-primary);
        outline-offset: .25rem;
    }

    button:focus-visible .inner-cont, button:hover .inner-cont {
        background: var(--color-primary);
    }


</style>