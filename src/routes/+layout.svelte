<script lang="ts">
    import "../global.css";
    import { browser } from "$app/environment";
    import Icon from "@iconify/svelte"


    let primary = {
        h: "199deg",
        s: "86%",
        l: "36%",
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

<div class="app-container scandia-web" style={`--primary-h: ${primary.h}; --primary-s: ${primary.s}; --primary-l: ${primary.l}; --primary-a: 100%;`}>
  <slot />

  <div class="fixed bottom-0 right-20 flex flex-col items-center text-primary primary z-100" style="--primary-l: 15%">
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

<style windi:preflights:global windi:safelist:global windi:global global>

  
    .primary {
      transition: .4s;
      --color-primary: hsla(var(--primary-h) var(--primary-s) var(--primary-l) / var(--primary-a))
    }
    .dark .primary {
      --color-primary: hsla(var(--primary-h) var(--primary-s) calc(100% - var(--primary-l)) / var(--primary-a))
    }

    @property --color-primary {
        syntax: "<color>";
        inherits: false;
        initial-value: hsla(var(--primary-h) var(--primary-s) var(--primary-l) / var(--primary-a));
    }

    .app-container {
        width: 100%;
        overflow: hidden;
        position: relative; 
        background: hsla(var(--primary-h) var(--primary-s) 95% / 100%) radial-gradient(hsla(var(--primary-h) var(--primary-s) var(--primary-l) / 40%) 12%, transparent 50%);
        background-repeat: no-repeat;
        background-size: 250% 60%;
        background-position-y: 175%;
        background-position-x: 50%;
        background-attachment: fixed;
    }

    :global(.dark .app-container) {
        background: hsla(var(--primary-h) var(--primary-s) 5% / 100%) radial-gradient(hsla(var(--primary-h) var(--primary-s) var(--primary-l) / 40%) 12%, transparent 50%);
        background-repeat: no-repeat;
        background-size: 250% 60%;
        background-position-y: 175%;
        background-position-x: 50%;
    }

    :global(.bg-primary) {
      background: var(--color-primary);
    }

    :global(.text-primary) {
      color: var(--color-primary);
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