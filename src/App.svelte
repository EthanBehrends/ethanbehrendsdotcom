<script>
import Header from "./Header.svelte";
import './fonts.css'

let colors = {
  black:      "#001210",
  dark:       "#192120",
  gray:       "#2A3836",
  darkGreen:  "#00645F",
  green:      "#009F94",
  white:      "#EBFAFF"
}
$: colorStyle = Object.entries(colors).map(([color, val]) => `--color-${color}: ${val}`).join("; ")

</script>

<style global>
  .scandia-web {
    font-family: 'scandia-web', serif;
  }
  .scandia-line-web {
    font-family: 'scandia-line-web', serif;
  }
  .source-code-pro {
    font-family: 'source-code-pro', serif;
  }
  .bree-serif {
    font-family: 'Bree Serif', serif;
  }
  .pt-sans {
    font-family: 'PT Sans', serif;
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
</style>

<div class="contents" style={colorStyle}>
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
  
  <div class="w-full min-h-[100vh] flex flex-col items-center justify-center p-16 bg-gray text-white">
    <div class="w-170 bg-white shadow rounded p-8 grid grid-cols-[10rem_1fr] grid-rows-[min-content]">
      <div class="font-semibold text-darkGreen text-5xl border-b-darkGreen border-b-3 pb-4 col-span-2 flex items-center">
        <div class="flex-grow">
          Ethan Behrends
        </div>
        <div class="flex flex-col text-xs text-right text-gray-200">
          <div>epbehrends@gmail.com</div>
          <div>913-216-4629</div>
        </div>
      </div>

      <div class="font-semibold text-darkGreen py-4 border-r-1 border-gray">Experience</div>
      
      <div class="p-4">
        <div class="font-semibold text-darkGreen text-xl">Software Developer</div>
        <div class="text-gray text-xs">
          <span class="font-semibold">HYFIN</span>
          (2021 - Present)
        </div>
        <div class="text-gray text-xs">
          Tech stack: Node, MongoDB, Redis, Svelte, Java, React, AWS
        </div>
        <ul class="text-gray text-xs pt-2 pl-2" style="list-style-type: '-'">
          <li class="pl-2">Accelerated early-stage development of payment platform up to successful launch.</li>
          <li class="pl-2">Constructed powerful UI infrastructure enabling developers to rapidly develop new features.</li>
          <li class="pl-2">Led development on three major projects that became marketing focal points.</li>
          <li class="pl-2">Spearheaded drastic refactors to better align codebase with SOLID design principles, increasing maintainability and readability of code.</li>
          <li class="pl-2">Engineered client support utility that allowed non-technical employees to easily navigate data and diagnose client issues.</li>
          <li class="pl-2">Developed software integrations with Intuit Quickbooks and two other industry partners.</li>
          <li class="pl-2">Engineered new, retooled existing infrastructure allowing web-client to navigate a data-intensive application in intuitive and performant manner.</li>
        </ul>
      </div>

      <div class="font-semibold text-darkGreen py-4 border-r-1 border-gray">Projects</div>
      
      <div class="p-4">
        <div class="font-semibold text-darkGreen text-xl">Messaging Platform</div>
        <div class="text-gray text-xs">
          Tech stack: Node, Express, MongoDB, React, SocketIO
        </div>
        <div class="text-gray text-xs">Full-stack messaging platform mirroring the core functionality of apps like Slack, Discord.</div>
        <ul class="text-gray text-xs pt-2 pl-2" style="list-style-type: '-'">
          <li class="pl-2">Responsive user interface built with React and the Material UI library.</li>
          <li class="pl-2">Secure account creation with password hashing and salting.</li>
          <li class="pl-2">Utilized WebSockets to achieve real-time messaging and notifications.</li>
        </ul>

        <div class="font-semibold text-darkGreen text-xl pt-4">Wordle Clone</div>
        <div class="text-gray text-xs">
          Tech stack: Svelte, Node, Express
        </div>
        <div class="text-gray text-xs">Enhanced version of the popular word game Wordle.</div>
        <ul class="text-gray text-xs pt-2 pl-2" style="list-style-type: '-'">
          <li class="pl-2">Implemented system to create and share user-created puzzles.</li>
          <li class="pl-2">Received over 3,000 site visitors.</li>
        </ul>
      </div>

      <div class="font-semibold text-darkGreen py-4 border-r-1 border-gray">Skills</div>
      
      <div class="p-4 grid grid-cols-2">
        <div>
          <div class="font-semibold text-darkGreen text-xl">Languages</div>
          <ul class="text-gray text-xs pt-2 pl-2" style="list-style-type: '-'">
            <li class="pl-2">Javascript/Node.js</li>
            <li class="pl-2">Java</li>
            <li class="pl-2">HTML, CSS</li>
            <li class="pl-2">C++</li>
            <li class="pl-2">Python</li>
          </ul>
        </div>
        <div>
          <div class="font-semibold text-darkGreen text-xl">Technologies/Frameworks</div>
          <ul class="text-gray text-xs pt-2 pl-2" style="list-style-type: '-'">
            <li class="pl-2">SvelteJS</li>
            <li class="pl-2">ReactJS</li>
            <li class="pl-2">MongoDB</li>
            <li class="pl-2">Redis</li>
            <li class="pl-2">PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>