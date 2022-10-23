<script>
import ToastController from "./ToastController.svelte";

export let controls = {}

let toast

$: controls = {
    toast
}

</script>

<div class="pointer-events-none w-full h-full fixed z-99999 p-4">
    <div class="relative w-full h-full">
        <div class="absolute bottom-0 right-0 top-0">
            <ToastController bind:toast />
        </div>
    </div>
</div>