<script>
	import TablerMapPin from '~icons/tabler/map-pin';
	import TablerBriefcase from '~icons/tabler/briefcase';
	import TablerBrandLinkedin from '~icons/tabler/brand-linkedin';
	import TablerBrandGithub from '~icons/tabler/brand-github';

	const subtitle = [
		{
			icon: TablerMapPin,
			text: 'SF',
			href: 'https://maps.apple.com/?address=San%20Francisco,%20CA,%20United%20States&auid=8077516530309122779&ll=37.779379,-122.418433&lsp=7618&q=San%20Francisco'
		},
		{
			icon: TablerBriefcase,
			text: 'Lindy.ai',
			href: 'https://lindy.ai'
		},
		{
			icon: TablerBrandLinkedin,
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/ethan-behrends/'
		},
		{
			icon: TablerBrandGithub,
			text: 'GitHub',
			href: 'https://github.com/ethanbehrends'
		}
	];
</script>

<div class="dark flex h-full w-full flex-col items-center justify-center">
	<div class="flex flex-col gap-2">
		<h1 class="text-6xl font-bold">Ethan Behrends</h1>
		<div class="flex items-center gap-4">
			{#each subtitle as { icon, text, href }}
				<a {href} target="_blank" rel="noopener noreferrer">
					<svelte:component this={icon} class="h-6 w-6" />
					{text}
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	a {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-weight: 500;
		border: 1px solid transparent;
		padding-bottom: 0.25rem;
		opacity: 0.5;

		&:hover,
		&:focus {
			/* text-decoration: underline; */
			border-bottom-color: currentColor;
			opacity: 0.75;
		}

		&:focus {
			outline: none;
		}
	}
</style>
