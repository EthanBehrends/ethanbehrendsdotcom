<script lang="ts">
    import Icon from "@iconify/svelte"
    import { backOut, linear } from "svelte/easing"
    export let icon = "ant-design:question-circle-twotone"

    function rotate(node: HTMLElement, { delay = 0, duration = 200, easing = backOut } = {}) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    return {
        delay,
        duration,
        easing,
        css: (t: number) => `
			transform: ${transform} rotate(${t * 360}deg);
            opacity: ${t}`
    };
}
</script>

<div class="relative w-full" style="aspect-ratio: 1/1" {...$$restProps}>
    {#key icon}
    <div class="absolute inset-0" in:rotate={{duration: 300}} out:rotate|local={{duration: 300}}>
        <Icon {icon} width="100%" height="100%" />
    </div>
    {/key}
</div>

<style>

</style>