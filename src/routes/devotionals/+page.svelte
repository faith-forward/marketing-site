<script lang="ts">
	import DevotionalNavigator from '$lib/components/devotionals/devotional_navigator.svelte';
	import Nav from '$lib/sections/nav.svelte';
</script>

<svelte:head>
	<title>Daily Devotionals | Personalized Christian Inspiration with Faith Forward</title>
	<meta
		name="description"
		content="Get daily inspiration and personalized Christian devotionals from Faith Forward. Browse our selection of devotionals, tailored to your needs and interests, on a monthly basis. Strengthen your faith and deepen your spiritual journey with our app. Download now and start your journey towards a more fulfilling life."
	/>
</svelte:head>

<main class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32 pb-16">
	<Nav active="devotionals" />
	<section class="flex laptop:space-x-8 mt-8 flex-col items-center">
		<h1 class="mb-24 text-4xl text-boldGrey font-sans-bold">Daily Devotionals</h1>
		<DevotionalNavigator />
	</section>
</main>

<style>
	main {
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
