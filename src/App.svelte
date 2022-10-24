<script>
import Header from "./Header.svelte";
import Resume from "./components/resume/Resume.svelte"
import AppControls from "./components/AppControls.svelte"
import ScrollAnimation from "./components/ScrollAnimation.svelte"
import { fly } from "svelte/transition"
import { cubicOut } from "svelte/easing"
import { onMount } from "svelte";

import './fonts.css'

let primary = {
  h: "199deg",
  s: "86%",
  l: "36%",
}

$: document.body.style = `
  --primary-h: ${primary.h};
  --primary-s: ${primary.s};
  --primary-l: ${primary.l};
  --primary-a: 100%;
`

let controls

let headerElement

let animating = false
const onScroll = () => {
  if (!headerElement || animating) return

  animating = true
  requestAnimationFrame(() => {
    headerElement.style = `transform: translateY(${window.scrollY / 1.6}px)`
    animating = false
  })
}

const copyTextToClipboard = text => {
  navigator.clipboard.writeText(text)
  controls?.toast("Copied to clipboard!")
}

onMount(() => {
  document.addEventListener("scroll", onScroll)

  onScroll()
  
  return () => {
    document.removeEventListener("scroll", onScroll)
  }
})

</script>

<style>
  :global(.scandia-web) {
    font-family: 'scandia-web', serif;
  }
  :global(.scandia-line-web) {
    font-family: 'scandia-line-web', serif;
  }
  :global(.source-code-pro) {
    font-family: 'source-code-pro', serif;
  }
  :global(.bree-serif) {
    font-family: 'Bree Serif', serif;
  }
  :global(.pt-sans) {
    font-family: 'PT Sans', serif;
  }

  :global(.primary) {
    transition: .4s;
    --color-primary: hsla(var(--primary-h) var(--primary-s) var(--primary-l) / var(--primary-a))
  }
  :global(.dark .primary) {
    --color-primary: hsla(var(--primary-h) var(--primary-s) calc(100% - var(--primary-l)) / var(--primary-a))
  }

  p {
    @apply pt-sans text-primary;
    text-indent: 2rem;
    line-height: 1.75rem;
    font-size: 1.075rem;
    max-width: 500px;
  }
  html {
    background: #192120;
  }

  :global(body::-webkit-scrollbar) {
    display: none;
  }

  :global(body) {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  a {
    @apply pt-sans text-primary l-25 block cursor-pointer;
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
    right: -.25em;
    z-index: -1;
    transition: .1s;
  }
  a:hover::before {
    width: calc(100% + .5em);
    background: var(--color-primary);
  }
  .card {
    background: white;
    border-radius: .5em;
    box-shadow: 0px 5px 15px -5px gray;
  }

  :global(.content-shadow) {
    box-shadow: 0px -5px 15px -5px hsla(var(--primary-h) var(--primary-s) 15% / 30%)
  }

  :global(.dark .content-shadow) {
    box-shadow: 0px -5px 15px -5px hsla(var(--primary-h) var(--primary-s) 85% / 15%)
  }

  .header-container {
    z-index: 0;
    width: 100%;
    height: calc(100vh + 2rem);
    transform: translateY(0px);
    transition: none;
  }
</style>

<AppControls bind:controls />

<div class="header-container" bind:this={headerElement}>
  <Header />
</div>

<div class="w-full min-h-screen h-auto flex flex-wrap gap-4 p-8 rounded-t-3xl -mt-8 primary l-92 bg-primary relative content-shadow z-1 justify-center md:items-center">
  <div class="flex-grow md:h-1/2 flex flex-col md:flex-row max-w-250 justify-center gap-8">
    <div class="flex-grow min-h-100 max-w-full flex flex-col gap-4 text-center md:text-left">
      <ScrollAnimation>
        <div class="text-5xl font-medium primary text-primary l-15" transition:fly={{duration: 800, easing: cubicOut, x: -200}}>Get to know me</div>
      </ScrollAnimation>
  
      <ScrollAnimation>
        <p class="primary l-15" transition:fly={{duration: 800, easing: cubicOut, x: -200}}>
          Hey, thanks for stopping by!
        </p>
      </ScrollAnimation>
  
      <ScrollAnimation>
        <p class="primary l-15" transition:fly={{duration: 800, easing: cubicOut, x: -200}}>
          I am a software engineer specializing in full-stack development. I've spent nearly a decade building a deep understanding of software creation, and enjoy keeping up with the latest, cutting-edge technologies that are shaping the future of our digital world.
        </p>
      </ScrollAnimation>
  
      <ScrollAnimation>
        <p class="primary l-15" transition:fly={{duration: 800, easing: cubicOut, x: -200}}>
          I'm always seeking opportunities to grow and expand my horizons. If you think I might be a good fit for your team, please don't hesitate to reach out!
        </p>
      </ScrollAnimation>
      <ScrollAnimation>
        <p class="primary l-15 text-right pr-32" transition:fly={{duration: 800, easing: cubicOut, x: -200}}>
          - Ethan
        </p>
      </ScrollAnimation>
    </div>
    <div class="flex-grow min-h-100 max-w-full flex flex-col items-end gap-4 pr-8">
      <ScrollAnimation>
        <a href="assets/Ethan_Behrends_Resume.pdf" target="_blank" class="primary" transition:fly={{duration: 800, easing: cubicOut, x: 200}}>resume</a>
      </ScrollAnimation>
      <ScrollAnimation>
        <a href="https://github.com/EthanBehrends" target="_blank" class="primary" transition:fly={{duration: 800, easing: cubicOut, x: 200}}>github</a>
      </ScrollAnimation>
      <ScrollAnimation>
        <a href="https://linkedin.com/in/ethan-behrends" target="_blank" class="primary" transition:fly={{duration: 800, easing: cubicOut, x: 200}}>linkedin</a>
      </ScrollAnimation>
      <ScrollAnimation>
        <a on:click={() => copyTextToClipboard("hire.ethanb@gmail.com")} target="_blank" class="primary" transition:fly={{duration: 800, easing: cubicOut, x: 200}}>hire.ethanb@gmail.com</a>
      </ScrollAnimation>


  
    </div>
  </div>

  </div>

<!-- <div class="w-full min-h-[100vh] flex flex-col items-center justify-center p-16 bg-dark text-white">
  <div class="flex max-w-250 gap-8 justify-between flex-col lg:flex-row">
    <div class="flex flex-col gap-8">
      <div class="text-4xl bree-serif mb-4">
        Hey there, it's nice to meet you
      </div>
      <p>
        Developing things for the web is my bread and butter. I have spent nearly a decade developing a sharp skillset, and always enjoy keeping up with the latest, cutting-edge, technologies that are shaping the future of our digital world.
      </p>
      <p>
        Currently, I am seeking a remote position. If you’re hiring,  please reach out! I’d love to learn more about your company and how I might be a great match.
      </p>
    </div>
    <div class="flex flex-col lg:items-end gap-8 text-2xl lg:text-4xl items-start mt-20">
    </div>
  </div>
</div>

<div class="w-full min-h-[100vh] bg-white grid place-items-center">
  <div class="w-200 card">
    <div class="flex <md:flex-col">
      <div class="flex-grow-[2] p-4">
        <div class="text-lg font-semibold">Messaging Platform</div>
        <div class="text-xs w-full text-gray-600">
          Full-stack messaging platform mirroring the core functionality of apps like Discord or Slack
        </div>
      </div>
      <div class="flex-grow">
        <img class="h-full w-full object-contain" src="https://via.placeholder.com/550" />
      </div>
    </div>
  </div>
</div>
<div class="w-full min-h-[100vh] flex flex-col items-center justify-center p-16 bg-gray text-white">
  <div class="shadow">
    <Resume />

  </div>

</div> -->
