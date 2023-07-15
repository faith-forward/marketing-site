<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { lazyLoad } from '$lib/hooks/lazyLoad';
	import Nav from '$lib/sections/homepage_nav.svelte';
	import { fade } from 'svelte/transition';

	let open: boolean = false;

	const handleClose = () => {
		open = false;
	};
</script>

<!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
{#if open}
	<div class="overlay" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
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
<div class="flex flex-col w-full bg-churchBackground min-h-[90vh] overflow-hidden relative">
	<Container>
		<Nav churchVersion />
		<img
			use:lazyLoad={'/images/church homepage.webp'}
			alt="A demo of the Faith Forward Church App integrating with the mobile app."
			id="church"
			class="hidden laptop:flex desktop:h-[640px] laptop:h-[400px] big-laptop:h-[600px] desktop:mr-[32px]"
		/>
		<!-- class="desktop:h-[960px] laptop:h-[700px] desktop:mr-[64px] big-laptop:h-[800px] hidden laptop:flex" -->

		<div
			class="flex w-full px-12 desktop:px-28 desktop:mt-16 laptop:mt-8 mt-16 flex-col flex-1 justify-between"
		>
			<div class="flex flex-col mt-8 tablet:mt-24 laptop:mt-0">
				<div class="flex">
					<h1
						class="font-sans-condensed desktop:text-8xl laptop:text-7xl tablet:text-6xl text-5xl text-blue z-10 tablet:px-4 laptop:w-3/5 tablet:w-4/5 text-center tablet:text-start drop-shadow-xl leading-tight"
					>
						TAP INTO
						<span class="text-white">DEEPER ENGAGEMENT</span>
					</h1>
				</div>
				<p
					class="laptop:w-[45%] big-laptop:mt-4 big-laptop:text-lg text-base text-blue_white font-sans-semi z-10 py-4 rounded-lg px-4 text-center tablet:text-start"
				>
					Supercharge your church's influence by leveraging cutting-edge AI. Gain insights on your congregation and create captivating content all under one digital roof. It's not just technology; it's faith, amplified.
				</p>
				<div class="tablet:px-4 mt-4 flex justify-center tablet:justify-start">
					<button
						class="px-6 py-3 bg-blue rounded-full text-white shadow-md font-sans-semi text-lg"
						on:click={() => (open = true)}
					>
						Book a Demo
					</button>
				</div>
			</div>
			<img
				use:lazyLoad={'/images/church homepage mobile.webp'}
				alt="A demo of the Faith Forward Church App integrating with the mobile app."
				class="laptop:hidden w-[90vw] tablet:w-[60vw] self-center"
			/>
		</div></Container
	>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" class="mt-[-4px]"
	><path
		fill="#24313b"
		d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
	/></svg
>

<style>
	.overlay {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		z-index: 20;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal {
		max-width: 800px;
		background: #fbfcfd;
		/* overflow: scroll; */
		/* border: 4px solid black; */
		z-index: 120;
	}

	.modal button {
		border: 2px solid rgba(255, 255, 255, 0.5);
		width: 40px;
		height: 40px;
		border-radius: 100%;
	}

	#church {
		/* height: 100vh; */
		position: absolute;
		right: 64px;
		top: 60%;
		transform: translate(0, -50%);
		z-index: 0;
	}

	h1 {
		line-height: 1.2;
	}
</style>
