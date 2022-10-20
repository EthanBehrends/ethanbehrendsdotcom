<script>
import Header from "./Header.svelte";
import Resume from "./components/resume/Resume.svelte"
import './fonts.css'

let colors = {
  black:      "#001210",
  dark:       "#192120",
  gray:       "#2A3836",
  darkGreen:  "#00645F",
  green:      "#009F94",
  white:      "#EBFAFF"
}

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
    @apply pt-sans;
    text-indent: 2rem;
    line-height: 1.75rem;
    max-width: 450px;
  }
  html {
    background: #192120;
  }

  a {
    font-family: 'Bree Serif', serif;
    position: relative;
    z-index: 1;
  }
  a::before {
    content: "";
    width: calc(100% + .5em);
    height: 10px;
    background: var(--color-darkGreen);
    position:absolute;
    bottom: -.1em;
    left: -.25em;
    z-index: -1;
    transition: .1s;
  }
  a:hover::before {
    height: 1.2em;
    background: var(--color-green);
  }
  .card {
    background: white;
    border-radius: .5em;
    box-shadow: 0px 5px 15px -5px gray;
  }
</style>

<Header />

<div class="w-full min-h-[100vh] flex flex-col items-center justify-center p-16 bg-dark text-white">
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
      <a href="google.com" target="_blank">Resume</a>
      <a href="google.com" target="_blank">GitHub</a>
      <a href="google.com" target="_blank">LinkedIn</a>
      <a href="google.com" target="_blank">hire.ethanb@gmail.com</a>
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

</div>