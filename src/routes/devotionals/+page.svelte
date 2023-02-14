<script lang="ts">
	import DevotionalNavigator from '$lib/components/devotionals/devotional_navigator.svelte';
	import Nav from '$lib/sections/nav.svelte';
</script>

<main class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32 pb-16">
	<Nav active="devotionals" />
	<section class="flex laptop:space-x-8 mt-8 flex-col items-center">
		<h1 class="mb-24 text-4xl text-boldGrey font-sans-bold">Devotionals</h1>
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
