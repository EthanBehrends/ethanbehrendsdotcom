<script>
    import { writable } from "svelte/store"
    import { slide, fly } from "svelte/transition"

    let _toasts = writable([])

    export const toast = (message) => {
        let id = String(Math.random())

        _toasts.update(toasts => [...toasts, {id, message}].slice(-4))

        setTimeout(() => {
            _toasts.update(toasts => toasts.filter(toast => toast.id != id))
        }
        , 2000)
    }
</script>

<div class="flex flex-col">
    {#each $_toasts as { id, message } (id)}
        <div transition:slide class="pb-2">
            <div transition:fly={{x: 200}} class="p-2 shadow-md text-lg rounded primary bg-primary l-90">{message}</div>
        </div>
    {/each}
</div>