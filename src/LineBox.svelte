
<script>

</script>

<style global>
    .flashing {
        animation: flash .5s cubic-bezier(0, 0.62, 0.39, 0.9) forwards;
    }

    @keyframes flash {
        0%, 100% {
            background-color: rgba(255,255,255,0)
        }
        50% {
            background-color: rgba(255,255,255,1)
        }
    }
</style>
    
<div class="w-full h-full">
    <div class="w-10 h-80 bg-teal-500 transform rotate-45"></div>
</div>