<script>
	import ForChurches from '$lib/sections/for_churches.svelte';
	import ForIndividuals from '$lib/sections/for_individuals.svelte';
	import ForEnterprise from '$lib/sections/for_enterprise.svelte';
	import LandingPage from '$lib/sections/landing_page.svelte';
	import Plans from './pricing/plans.svelte';
	import TestimonialsPage from '$lib/sections/testimonials_page.svelte';
	// TODO: add enterprise section
	// TODO: rework copy to be more enterprise friendly / focused
	// TODO: fold pricing into this page
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
	<ForIndividuals />
	<ForChurches />
	<ForEnterprise />
	<div class="flex flex-col items-center justify-center mt-32">
		<h1 class="text-4xl font-sans-condensed text-darkBlue text-center mt-16 mb-8">Plans</h1>
		<div class="w-1/2 h-1 bg-darkBlue mb-8" />
		<div>
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
