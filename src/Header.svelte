<script>
    import { onMount } from "svelte"
import Tetris from "./Tetris.svelte";
import LineBox from "./LineBox.svelte";
    import Icon from "@iconify/svelte"
    import { slide, fly, fade } from "svelte/transition"

    let scrollTop = 0

    const sleep = (t = 200) => new Promise(res => setTimeout(res, t))
    let showInfo = sleep(2000)
    const scroll = (node) => {
        const setScrollTop = () => {
            scrollTop = node.getBoundingClientRect().y
        }
        document.addEventListener("scroll", setScrollTop)

        return {
            destroy: () => {
                document.removeEventListener("scroll", setScrollTop)
            }
        }
    }

    const typewriter = async (node, options) => {
        let text = (node.innerText ?? "").split("")
        let duration = options?.duration ?? 100
        let delay = options?.delay ?? 200
        let keepCursor = options?.keepCursor ?? false

        node.innerText = ""

        await new Promise(res => setTimeout(res, delay))

        node.classList.add("typing")

        let interval = setInterval(() => {
            node.innerText += text.shift()
            if (!text.length) {
                clearInterval(interval)
                if (!keepCursor) node.classList.remove("typing")
            }
        }, duration)

        
        return {
            destroy: () => {
            }
        }
    }
</script>

<style>
    :global(.typing::after) {
        content: "|";
        font-weight: 300;
        animation: blink 1s ease infinite;
    }

    @keyframes blink{
        0%, 100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }
    .text-shadow {
        /* text-shadow: 1px 1px 4px rgba(255, 255, 255, .75); */
    }

    .blob {
        animation: rotate 50s infinite linear;
    }

    .leaf-background {
        background-image: url("/assets/leaf.jpg");
        background-size: cover;
    }

    .gradient {
        background: linear-gradient(0deg, #ffffff10 0%, transparent 50%)
    }

    .draw {
        stroke-dasharray: 40 80;
        animation: draw 10s infinite linear
    }
    .draw:nth-child(2) {
        animation-delay: -2s;
        animation-duration: 12s;
    }
    .draw:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 14s;
    }
    .draw:nth-child(4) {
        animation-delay: -6s;
        animation-duration: 8s;
    }

    @keyframes draw {
        from {
            stroke-dasharray: 0 80;
        }
        to {
            stroke-dasharray: 60 80;
        }
    }

    @keyframes rotate {
        0% {
            border-radius: 40%;
            transform: translate(-50%, 50%) scaleY(.6) rotate(0deg);
        }
        50% {
            border-radius: 20%;
        }
        100% {
            border-radius: 40%;
            transform: translate(-50%, 50%) scaleY(.6) rotate(360deg);
        }
    }
</style>
    
<div use:scroll class="w-full h-[100vh] relative overflow-hidden bg-black">
    <div class="w-full h-full flex flex-col items-center justify-center gap-20 bg-light-100 gradient relative">
        <div class="flex flex-col items-start px-10">
            <div class="text-8xl font-bold text-teal-100" use:typewriter>Ethan Behrends</div>
            <div class="text-2xl source-code-pro text-teal-600" use:typewriter={{delay: 3000, keepCursor: true}}>Software Engineer</div>
        </div>
        {#await sleep(6000) then}
            <div class="" in:slide>
                <div in:fade class="border-b border-r border-teal-300 button-clip group cursor-pointer">
                    <div class=" active:bg-teal-300 active:text-black border-0 ring-1 ring-offset-transparent ring-teal-300 ring-offset-1 text-teal-300 p-4 text-2xl transition duration-200 relative transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                        Get In Touch
                    </div>
                </div>

            </div>
        {/await}

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-[200vh] h-[200vh] absolute right-0 -bottom-50" style="transform: rotate(90deg)" viewBox="0 0 100 100">
            <circle style="stroke-width: .1px" class="stroke-teal-200 opacity-50 fill-transparent draw" cx="50" cy="54" r="51" />
            <circle style="stroke-width: .1px" class="stroke-teal-200 opacity-50 fill-transparent draw" cx="50" cy="54" r="50" />
            <circle style="stroke-width: .1px" class="stroke-teal-200 opacity-50 fill-transparent draw" cx="50" cy="54" r="49" />
            <circle style="stroke-width: .1px" class="stroke-teal-200 opacity-50 fill-transparent draw" cx="50" cy="54" r="48" />
        </svg>
        <div class="absolute bottom-0 left-20 flex flex-col items-center gap-2 text-teal-200">
            <Icon icon="lucide:github" width="28px" height="28px"/>
            <div class="w-[1px] h-5 bg-teal-200"></div>
            <Icon icon="lucide:linkedin" width="28px" height="28px"/>
            <div class="w-[1px] h-20 bg-teal-200"></div>
        </div>
    </div>

</div>