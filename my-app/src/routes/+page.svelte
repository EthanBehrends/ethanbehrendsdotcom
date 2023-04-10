<script lang="ts">
    import Header from "./Header.svelte";
    import { onMount } from "svelte";
    import { cubicInOut } from "svelte/easing"
    import Resume from "./Resume.svelte";

</script>

<Header />

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