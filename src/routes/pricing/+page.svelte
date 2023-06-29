<script lang="ts">
	import Nav from '$lib/sections/nav.svelte';
	import { fade } from 'svelte/transition';
	import Plans from './plans.svelte';
	let open: boolean = false;

	const handleClose = () => {
		open = false;
	};
</script>

<svelte:head>
	<title>Pricing | Faith Forward</title>
	<meta
		name="description"
		content="Expand your ministry's impact with the Faith Forward Church App's AI-powered analytics, AI-driven sermon writing, and comprehensive content management."
	/>
	<meta name="og:image" content="/images/ff large.png" />
	<meta name="og:image:width" content="600" />
	<meta name="og:image:height" content="600" />
</svelte:head>

<!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
{#if open}
	<div class="overlay" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
		<button class="overlay" aria-label="Close modal" on:click={handleClose} />

		<div class="modal rounded-2xl p-16 w-[100vw] tablet:w-[80vw] laptop:w-[50vw] h-[90vh]">
			<div class="flex justify-between items-center mb-8">
				<h2 class="font-sans-semi text-2xl">Schedule a Demo</h2>
				<button class="text-2xl" on:click={handleClose} aria-label="Close modal">&times;</button>
			</div>
			<!-- calendly embed -->
			<div style="min-width:320px;height:70vh" data-auto-load="false">
				<iframe
					src="https://calendly.com/faith-forward/faith-forward-church-demo?month=2023-06"
					width="100%"
					height="100%"
					scrolling="no"
					frameborder="0"
					title="Caldendly Scheduler"
					class="calendly-inline-widget"
					style="border-radius: 16px;"
				/>
			</div>
		</div>
	</div>
{/if}

<main class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32">
	<Nav active="pricing" />
	<section
		class="flex desktop:space-x-8 mt-8 flex-col items-center pb-16 desktop:px-64 big-laptop:px-32 laptop:px-16 tablet:px-8"
	>
		<h1 class="mb-16 text-4xl text-boldGrey font-sans-bold">Pricing</h1>
		<!-- <p class="mb-24 text-lg text-grey font-sans-semi text-center">
			Find the perfect plan that suits your needs - whether you're an individual seeking spiritual
			enrichment or a church aiming to foster deeper community engagement.
		</p> -->
		<Plans />
		<div class="mt-8 flex items-center w-full justify-center tablet:justify-end">
			<button
				class="bg-orange text-white font-sans-bold px-4 py-2 mr-4 rounded-full"
				on:click={() => (open = true)}>Book a Demo</button
			>
			<p class="italic">or email us at</p>
			<a href="mailto:hello@faithforward.app" class="text-blue ml-1.5 italic"
				>hello@faithforward.app</a
			>
		</div>
	</section>
</main>

<style>
	.overlay {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal {
		max-width: 800px;
		background: #fbfcfd;
		/* overflow: scroll; */
		/* border: 4px solid black; */
		z-index: 3;
	}

	.modal button {
		border: 2px solid rgba(255, 255, 255, 0.5);
		width: 40px;
		height: 40px;
		border-radius: 100%;
	}
</style>
