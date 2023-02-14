<script>
	import FeaturesPage from '../lib/sections/features_page.svelte';
	import LandingPage from '../lib/sections/landing_page.svelte';
	import TestimonialsPage from '../lib/sections/testimonials_page.svelte';
</script>

<main class="flex flex-col bg-paper">
	<LandingPage />
	<FeaturesPage />
	<TestimonialsPage />
</main>

<style>
	main {
		width: 100vw;
		max-width: 100vw;
		overflow: hidden;
	}
</style>
