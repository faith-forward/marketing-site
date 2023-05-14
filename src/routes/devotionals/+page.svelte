<script lang="ts">
	import DevotionalNavigator from '$lib/components/devotionals/devotional_navigator.svelte';
	import MailingList from '$lib/components/mailing_list.svelte';
	import Nav from '$lib/sections/nav.svelte';
</script>

<svelte:head>
	<title>Daily Devotionals | Personalized Christian Inspiration with Faith Forward</title>
	<meta
		name="description"
		content="Get daily inspiration and personalized Christian devotionals from Faith Forward. Browse our selection of devotionals, tailored to your needs and interests, on a monthly basis. Strengthen your faith and deepen your spiritual journey with our app. Download now and start your journey towards a more fulfilling life."
	/>
	<meta name="og:image" content="/images/ff large.png" />
	<meta name="og:image:width" content="600" />
	<meta name="og:image:height" content="600" />
</svelte:head>

<main class="flex flex-col bg-paper">
	<div class="px-4 tablet:px-16 desktop:px-32">
		<Nav active="devotionals" />
	</div>
	<section class="flex laptop:space-x-8 mt-8 flex-col items-center px-4 tablet:px-16 desktop:px-32">
		<h1 class="mb-4 text-4xl text-boldGrey font-sans-bold">Daily Devotionals</h1>
		<p class="mb-24 text-lg text-grey font-sans-semi big-laptop:w-3/5 laptop:w-4/5 text-center">
			Your go-to source for daily inspiration, reflection, and guidance – our collection of
			devotionals is designed to help you connect with your faith, no matter where you are on your
			spiritual journey.
		</p>
		<DevotionalNavigator />
	</section>
	<!-- <MailingList /> -->
</main>

<style>
	main {
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
