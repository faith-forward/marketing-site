<script>
	import Container from '$lib/components/Container.svelte';
	import Analytics from './features/analytics.svelte';
	import Cms from './features/cms.svelte';
	import Desk from './features/desk.svelte';
	import Intro from './intro.svelte';
	import Jumbo from './jumbo.svelte';
	import Cta from './cta.svelte';
</script>

<svelte:head>
	<title>For Churches | Elevate your Engagement with Faith Forward</title>
	<meta
		name="description"
		content="Expand your ministry's impact with the Faith Forward Church App's AI-powered analytics, AI-driven sermon writing, and comprehensive content management."
	/>
	<meta name="og:image" content="/images/ff large.png" />
	<meta name="og:image:width" content="600" />
	<meta name="og:image:height" content="600" />
</svelte:head>

<main class="flex flex-col bg-paper">
	<Jumbo />
	<Container>
		<Intro />
		<Desk />
		<Cms />
		<Analytics />
		<Cta />
	</Container>
</main>
