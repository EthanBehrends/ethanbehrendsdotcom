<script lang="ts">
    import { onMount } from "svelte"
    import DarkModeToggle from "$lib/DarkModeToggle.svelte";
    import Icon from "@iconify/svelte"
    import { slide, fly, fade } from "svelte/transition"
    import { enhance } from "$app/forms";
    import { browser } from "$app/environment";

    let scrollTop = 0

    const sleep = (t = 200) => new Promise(res => setTimeout(res, t))
    let showInfo = sleep(2000)
    const scroll = (node: HTMLElement) => {
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

    const typewriter = (node: HTMLElement, options?: { duration?: number, delay?: number, keepCursor?: boolean }) => {
        let text = (node.innerText ?? "").split("")
        let duration = options?.duration ?? 100
        let delay = options?.delay ?? 200
        let keepCursor = options?.keepCursor ?? false

        node.innerText = ""

        new Promise(res => setTimeout(res, delay)).then(() => {
            node.classList.add("typing")
    
            let interval = setInterval(() => {
                node.innerText += text.shift()
                if (!text.length) {
                    clearInterval(interval)
                    if (!keepCursor) node.classList.remove("typing")
                }
            }, duration)
        })


        
        return {
            destroy: () => {
            }
        }
    }

    const icons = [{
        icon: "lucide:github",
        href: "https://github.com/EthanBehrends",
        alt: "Check out my GitHub!"
    }, {
        icon: "lucide:linkedin",
        href: "https://linkedin.com/in/ethan-behrends",
        alt: "Connect with me on LinkedIn!"
    }]
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

    .header-container {
        width: 100%;
        height: 100%;
        position: relative; 
        overflow: hidden;
        background: hsla(var(--primary-h) var(--primary-s) 95% / 100%) radial-gradient(hsla(var(--primary-h) var(--primary-s) var(--primary-l) / 40%) 12%, transparent 50%);
        background-repeat: no-repeat;
        background-size: 250% 60%;
        background-position-y: 175%;
        background-position-x: 50%;
        background-attachment: fixed;
    }

    :global(.dark .header-container) {
        background: hsla(var(--primary-h) var(--primary-s) 5% / 100%) radial-gradient(hsla(var(--primary-h) var(--primary-s) var(--primary-l) / 40%) 12%, transparent 50%);
        background-repeat: no-repeat;
        background-size: 250% 60%;
        background-position-y: 175%;
        background-position-x: 50%;
    }

    .button {
        background: linear-gradient(160deg, hsla(var(--primary-h) var(--primary-s) var(--primary-l) / 70%), var(--color-primary));
        box-shadow: 2px 3px 12px -4px hsl(var(--primary-h) var(--primary-s) 20%);
        padding: 1rem;
        border-radius: 100px;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
        transform: translateY(0px);
        transition: .2s;
        user-select: none;
    }
    .button:hover {
        box-shadow: 8px 9px 22px -4px hsla(var(--primary-h) var(--primary-s) 20% / 70%);
    }
    .button:active {
        box-shadow: 8px 6px 22px -4px hsla(var(--primary-h) var(--primary-s) 20% / 70%);
        transform: translateY(3px);
    }

    .icon-cont {
        padding: .5rem;
        transition: .2s;
    }
    .icon-cont:hover, .icon-cont:focus-visible {
        padding-bottom: 1rem;
    }
    .icon-cont:hover {

        opacity: 50%;
    }
</style>
    
<div class="header-container primary">
    <div class="absolute top-4 right-8">
        <DarkModeToggle size="48px" />
    </div>
    <div class="w-full h-full flex flex-col items-center justify-center gap-20 relative">
        <div class="flex flex-col items-start px-10">
            <div class="primary l-15 text-6xl sm:text-8xl scandia-web font-semibold text-primary" class:hidden={!browser} use:typewriter>Ethan Behrends</div>
            <div class="primary l-30 text-xl sm:text-2xl source-code-pro text-primary" class:hidden={!browser} use:typewriter={{delay: 3000, keepCursor: true}}>Software Engineer</div>
        </div>
        <!-- {#await sleep(0) then}
            <div in:fly={{y: 200}}>
                <div class="button">
                    <div class="text-white">
                        Get In Touch
                    </div>
                </div>

            </div>
        {/await} -->
        <div class="absolute bottom-0 right-20 flex flex-col items-center text-primary primary l-15">
            {#each icons as {icon, href, alt}, i}
            {#if i != 0}
            <div class="w-0.5 h-5 bg-current"></div>
            {/if}
            <a {href} target="_blank" class="icon-cont">
                <Icon {icon} width="32px" height="32px"/>
            </a>
            {/each}
            <div class="w-0.5 h-28 bg-current"></div>
        </div>
    </div>
</div>