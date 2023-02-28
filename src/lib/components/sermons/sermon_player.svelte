<!-- SermonPlayer.svelte -->
<script lang="ts">
	import { bucketUrl } from '$lib/config/api_config';
	import type Sermon from '$lib/types/sermon';
	import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { onDestroy, onMount } from 'svelte';

	export let sermon: Sermon;

	let audio: HTMLAudioElement;
	let isPlaying = false;
	let duration = 0;
	let currentTime = 0;

	const togglePlay = () => {
		isPlaying ? audio.pause() : audio.play();
	};

	const handlePlay = () => {
		isPlaying = true;
	};

	const handlePause = () => {
		isPlaying = false;
	};

	const handleTimeUpdate = () => {
		currentTime = audio.currentTime;
	};

	const handleLoadedMetadata = () => {
		duration = audio.duration;
	};

	const handleProgressClick = (event: MouseEvent) => {
		const progressBar = event.target as HTMLElement;
		const clickedPosition = event.offsetX;
		const newTime = (clickedPosition / progressBar.offsetWidth) * duration;
		audio.currentTime = newTime;
	};

	onMount(() => {
		audio.volume = 1;
	});

	$: if (sermon) {
		handlePause();
	}
</script>

<div class="flex items-center space-x-4 w-full my-8">
	<button on:click={togglePlay} class="text-blue play-button text-xl">
		{#if isPlaying}
			<Fa icon={faPause} />
		{:else}
			<Fa icon={faPlay} />
		{/if}
	</button>
	<button
		class="bg-[#ccc] w-full h-4 relative rounded-full overflow-clip"
		on:click={handleProgressClick}
	>
		<div class="progress bg-blue" style={`width: ${(currentTime / duration) * 100}%`} />
	</button>

	<!-- <input type="range" min="0" max="1" step="0.1" bind:value={volume} /> -->
</div>

<audio
	src={`${bucketUrl}/${sermon.filename}?alt=media`}
	bind:this={audio}
	on:play={handlePlay}
	on:pause={handlePause}
	on:timeupdate={handleTimeUpdate}
	on:loadedmetadata={handleLoadedMetadata}
/>

<style>
	/* Audio player styles */
	.progress {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}
	/* input[type='range'] {
		-webkit-appearance: none;
		width: 100%;
		height: 1rem;
		background-color: #eee;
		outline: none;
		margin: 0;
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 1rem;
		height: 1rem;
		background-color: #007aff;
		border-radius: 50%;
		cursor: pointer;
	} */
</style>
