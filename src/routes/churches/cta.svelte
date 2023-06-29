<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import { fade } from 'svelte/transition';

	let open: boolean = false;

	const handleClose = () => {
		open = false;
	};
</script>

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

<section class="flex flex-col px-4 tablet:px-16 desktop:px-32 items-center flex-1 mt-32">
	<div class="desktop:px-64 big-laptop:px-32 laptop:px-16 tablet:px-8 flex w-full">
		<div class="w-full bg-white rounded-xl shadow-xl px-8 py-24" use:fadeIn>
			<h3 class="font-sans-bold text-2xl mb-1 text-boldGrey">
				Get Started with Faith Forward Today
			</h3>
			<div class="mt-8 flex items-center">
				<button
					class="bg-orange text-white font-sans-bold px-4 py-2 mr-4 rounded-full"
					on:click={() => (open = true)}>Book a Demo</button
				>
				<p class="italic">or email us at</p>
				<a href="mailto:hello@faithforward.app" class="text-blue ml-1.5 italic"
					>hello@faithforward.app</a
				>
			</div>
		</div>
	</div>
</section>

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
