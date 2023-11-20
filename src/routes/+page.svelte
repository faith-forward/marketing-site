<script>
	import { fadeIn } from '$lib/hooks/fadeIn';
	import ForChurches from './churches/intro.svelte';
	import ForIndividuals from '$lib/sections/for_individuals.svelte';
	import ForEnterprise from '$lib/sections/for_enterprise.svelte';
	import LandingPage from '$lib/sections/landing_page.svelte';
	import Plans from './pricing/plans.svelte';
	import TestimonialsPage from '$lib/sections/testimonials_page.svelte';
	// TODO: add svg swooshes and bg color swaps per section
</script>

<svelte:head>
	<title>Faith Forward | Tap Into Deeper Devotion With AI</title>
	<meta
		name="description"
		content="Personalized Christian content made just for you. Download our app today for custom devotionals, daily sermons, insightful verse analysis, and more."
	/>
	<meta name="facebook-domain-verification" content="yvqkose9v1ptpfvewj2ug97s9nzeya" />
	<meta name="og:image" content="/images/ff large.png" />
	<meta name="og:image:width" content="600" />
	<meta name="og:image:height" content="600" />
</svelte:head>

<main class="flex flex-col bg-paper">
	<LandingPage />

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
		<path
			fill="#39ABEB"
			d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
		/>
	</svg>

	<ForIndividuals />

	<ForChurches />

	<svg xmlns="http://www.w3.org/2000/svg" class="mb-[-2px] mt-[-64px]" viewBox="0 0 1440 320"
		><path
			fill="#24313b"
			fill-opacity="1"
			d="M0,160L120,176C240,192,480,224,720,224C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
		/></svg
	>

	<ForEnterprise />

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
			fill="#24313b"
			fill-opacity="1"
			d="M0,96L80,85.3C160,75,320,53,480,42.7C640,32,800,32,960,53.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
		/>
	</svg>

	<div class="max-w-[1800px] flex flex-col items-center px-4 pt-16 pb-32" id="pricing-plans">
		<h1
			class="text-4xl font-sans-condensed text-darkBlue text-center mt-16 leading-snug"
			use:fadeIn
		>
			Plans
		</h1>
		<p
			class="text-grey mt-4 leading-snug text-center text-lg font-sans-semi text-darkBlue"
			use:fadeIn
		>
			Faith Forward is for everyone. Find the plan that works best for you.
		</p>
		<div class="mt-16">
			<Plans />
		</div>
	</div>

	<TestimonialsPage />
</main>

<style>
	main {
		width: 100vw;
		max-width: 100vw;
		overflow: hidden;
	}
</style>
