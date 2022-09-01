<script>


let colorPrimary = "#1c57c4"
window.setPrimaryColor = (color) => colorPrimary = color

</script>
<style global>

</style>

<div class="contents" style="--color-primary: {colorPrimary}">
    <slot />
</div>