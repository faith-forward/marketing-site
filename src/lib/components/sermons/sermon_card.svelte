<script lang="ts">
	import type Sermon from '$lib/types/sermon';
	import formatDate from '$lib/util/formatDate';
	import { faPlay, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let sermon: Sermon;
	export let playSermon: (id: string) => void;
</script>

<li
	class={`flex flex-col rounded-lg card  p-8 mb-8 min-h-[140px] overflow-scroll bg-white ${
		sermon.isPlaying ? 'border-b-4 border-blue' : ''
	}`}
>
	<h3 class="font-sans-bold text-lg">{sermon.title}</h3>
	<p class="font-sans text-sm mt-1 text-grey">{sermon.description}</p>
	<div class="flex justify-between items-center mt-4">
		<p class="justify-self-end text-grey italic font-sans text-sm ">
			{formatDate(sermon.createdAt)}
		</p>
		<button
			class="text-blue font-sans-bold text-lg rounded-lg"
			on:click={() => playSermon(sermon.id)}
		>
			{#if sermon.isPlaying}
				<Fa icon={faVolumeDown} />
			{:else}
				<Fa icon={faPlay} />
			{/if}
		</button>
	</div>
</li>

<style>
	.card {
		box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
	}
</style>
