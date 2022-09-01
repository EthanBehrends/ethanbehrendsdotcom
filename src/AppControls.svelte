<script>
import PowerToast from "./components/PowerToast.svelte";

export let controls = {}

let toastPopup

$: controls = {
    toastPopup
}

</script>

<div class="pointer-events-none w-full h-full fixed z-99999 p-4">
    <div class="relative w-full h-full">
        <div class="absolute bottom-0 right-0 top-0">
            <PowerToast bind:popup={toastPopup}/>
        </div>
    </div>
</div>