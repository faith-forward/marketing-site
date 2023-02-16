<script>
	import FeaturesPage from '../lib/sections/features_page.svelte';
	import LandingPage from '../lib/sections/landing_page.svelte';
	import TestimonialsPage from '../lib/sections/testimonials_page.svelte';
</script>

<svelte:head>
	<title>Faith Forward | Personalized Christian Devotionals for Daily Inspiration</title>
	<meta
		name="description"
		content="Receive personalized Christian devotionals based on whatever is on your mind with Faith Forward. Our app offers a unique and tailored approach to devotionals that is designed to inspire and uplift you. Download now and start your journey to a deeper faith."
	/>
</svelte:head>

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
