<script>
export let onClick = () => {}

</script>

<style>
    .shadow-inner {
        box-shadow: inset -2px -1px 3px 3px #00330033;
        transition: .2s;
    }
    .shadow-inner:hover {
        box-shadow: inset 0px 0px 0px 0px #00330033;
    }
</style>
    
<div on:click={onClick} class="p-2 cursor-pointer stroke bg-primary hover:opacity-80 text-white text-center">
    <slot />
</div>
<!-- 
<div class="bg-green-500 p-2 rounded-sm cursor-pointer text-center text-green-50 shadow-inner">
    <slot />
</div>

<div class="relative group">
    <svg class="absolute w-full h-full cursor-pointer">
        <rect class="fill-green-500 w-full h-full group-hover:fill-green-400" rx="8px">
        </rect>
        <circle fill="white" cx="20" cy="20" r="20"/>
    </svg>
    <div class="relative p-2 text-white text-center pointer-events-none">
        hello
    </div>
</div> -->