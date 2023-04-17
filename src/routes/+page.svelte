<script lang="ts">
    import Header from "./Header.svelte";
    import { onMount } from "svelte";
    import { cubicInOut } from "svelte/easing"
    import Resume from "./Resume.svelte";
    import Icon from "@iconify/svelte";
	import CopyIcon from "$lib/CopyIcon.svelte";

    const content = [
        "I'm a developer and tech-enthusiast with over a decade of hobbyist experience and 2+ years of professional experience under my belt.",
        "I enjoy keeping up with the cutting edge of web technologies, using tools like SvelteKit and Next.js to build powerful and performant web applications. No matter what I'm building, I'm always looking for opportunities to learn something new and challenging.",
        "If your team is building something cool and you're looking for a talented and passionate developer, let's talk!"
    ]


    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    function inView(el: HTMLElement) {
        function onScroll() {
            if (isInViewport(el)) {
                el.classList.add("in-view")
                el.classList.remove("out-view")
            } else {
                el.classList.remove("in-view")
                el.classList.add("out-view")
            }
        }

        onScroll()

        window.addEventListener("scroll", onScroll)

        return {
            destroy() {
                window.removeEventListener("scroll", onScroll)
            }
        }
    }

    function isInViewport(el: HTMLElement) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= -1000 &&
            rect.bottom - rect.height * .25 <= window.innerHeight
        );
    }
</script>

<Header />

<div class="w-full scandia-web relative flex flex-col items-center z-1 px-12 pb-60 lg:pb-36 pt-12">
    <div class="flex flex-col lg:flex-row w-full max-w-300 gap-x-12 gap-y-24">
        <div class="flex-grow flex flex-col items-center">
            <div class="max-w-140 w-full text-primary primary l-5 flex flex-col gap-2 fade-in" use:inView>
                <div class="text-4xl font-semibold">
                    Hey there!
                </div>
                {#each content as line}
                    <div class="text-lg ">
                        {line}
                    </div>
                {/each}
                <div class="flex flex-col items-start mt-8 gap-4 from-left" use:inView>
                    <a href="https://github.com/EthanBehrends" target="_blank" class="primary">github</a>
    
                    <a href="https://linkedin.com/in/ethan-behrends" target="_blank" class="primary">linkedin</a>
            
                    <div class="flex gap-4 items-center">
                        <a target="_blank" href="mailto:hire\.ethanb@gmail.com" class="primary">hire.ethanb@gmail.com</a>
                        <CopyIcon content="hire.ethanb@gmail.com" />
                    </div>
                </div>
    
            </div>
        </div>
        <div class="flex-grow flex flex-col items-center relative">
            <div class="lg:w-120 w-100 py-8 max-w-full from-right" use:inView>
                <Resume />
            </div>
        </div>
    </div>
</div>

<style>

  a {
    @apply text-primary l-25 block cursor-pointer;
    position: relative;
    z-index: 1;
    font-size: 1.75rem;
  }
  a:hover {
    @apply opacity-60;
  }
  a::before {
    content: "";
    width: 0%;
    height: 5px;
    background: var(--color-primary);
    position:absolute;
    bottom: -.1em;
    left: -.25em;
    z-index: -1;
    transition: .1s;
  }
  a:hover::before {
    width: calc(100% + .5em);
    background: var(--color-primary);
  }

  .from-right {
    transition: .5s ease-out;
  }
  .from-right:is(.in-view) {
    transform: translateX(0%);
    opacity: 1;
  }

  .from-right:is(.out-view) {
    transform: translateX(100%);
    opacity: 0;
  }

  .from-left {
    transition: .5s ease-out;
  }

  .from-left:is(.in-view) {
    transform: translateX(0%);
    opacity: 1;
  }

  .from-left:is(.out-view) {
    transform: translateX(-100%);
    opacity: 0;
  }

  .fade-in {
    transition: .5s ease-out;
  }

  .fade-in:is(.in-view) {
    opacity: 1;
  }

  .fade-in:is(.out-view) {
    opacity: 0;
  }


</style>