<script lang="ts">
    import Icon from "@iconify/svelte";
    import { fly } from "svelte/transition";
    
    export let text: string


    let copied = false

    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)

        copied = true
        setInterval(() => copied = false, 2000)
    }

</script>


<button class="p-1 rounded relative cursor-pointer hover:bg-cool-gray-200 bg-opacity-15 text-cool-gray-500 hover:text-cool-gray-700" on:click={() => copyTextToClipboard(text)}>
    <Icon icon="material-symbols:content-copy-outline" height="1.5rem" />
    {#if copied}
        <div transition:fly={{y: 50, duration: 200}} class="absolute -top-2 left-0 right-0 h-0 flex flex-col justify-end items-center">
            <div class="rounded bg-cool-gray-700 bg-opacity-50 text-white w-min px-1.5 py-1 font-medium">Copied!</div>
        </div>
    {/if}
</button>

<style>
    button {
        all: unset;
    }
</style>