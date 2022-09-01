<script>
    import defaultResume from "./resume"

    export let resume = defaultResume


</script>

<div class="text-sm w-170 bg-white shadow rounded p-8 grid grid-cols-[10rem_1fr] grid-rows-[min-content]" >
    <div class="font-semibold text-darkGreen text-5xl border-b-darkGreen border-b-3 pb-4 col-span-2 flex items-center">
      <div class="flex-grow">
        {resume.name}
      </div>
      <div class="flex flex-col text-xs text-right text-gray-700">
        {#each Object.values(resume.contact) as contactLine}
        <div>{contactLine}</div>
        {/each}
      </div>
    </div>

    {#each resume.sections as {title, renderDirection, body}}
    <div class="font-semibold text-darkGreen py-4 border-r-1 border-gray">{title}</div>

    <div class="flex" class:flex-col={renderDirection !== "row"}>
        {#each body as {header, subheader, description, techStack, points}}
        <div class="p-4">
          <div class="font-semibold text-darkGreen text-xl">{header}</div>
          {#if subheader}
          <div class="text-gray-700 text-xs">
            {subheader}
          </div>
          {/if}
          {#if description}
          <div class="text-gray-700 text-xs">
            {description}
          </div>
          {/if}
          {#if techStack?.length}
          <div class="text-gray-700 text-xs">
            Tech stack: 
            {#each techStack as tech}
            {`${tech}, `} 
            {/each}
          </div>
          {/if}
          <ul class="text-gray-700 text-xs pt-2 pl-2" style="list-style-type: '-'">
            {#each points as point}
            <li class="pl-2">{point}</li>
            {/each}
          </ul>
        </div>
        {/each}
    </div>
    {/each}
</div>