<script lang="ts">
	import type Sermon from '$lib/types/sermon';
	import SermonCard from './sermon_card.svelte';
	import SermonPlayer from './sermon_player.svelte';

	export let sermons: Sermon[];
	export let currentSermon: Sermon;
	// sermons[0].isPlaying = true;

	const playSermon = (id: string) => {
		const index = sermons.findIndex((sermon) => sermon.id === id);
		if (index === -1) return;
		currentSermon.isPlaying = false;
		sermons[index].isPlaying = true;
		currentSermon = sermons[index];
	};
</script>

<div class="flex pl-4 tablet:pl-16 desktop:pl-32">
	<div class="flex flex-col flex-1">
		<ul class="flex flex-col">
			<!-- display a card for each sermon -->
			{#each sermons as sermon}
				<SermonCard {sermon} {playSermon} />
			{/each}
		</ul>
	</div>
	{#if currentSermon}
		<!-- Sermon player -->
		<div
			class="flex w-[45vw] ml-8 sticky top-0 bottom-0 h-[100vh] bg-darkPaper mb-8 flex-col items-center justify-center p-8 text-center"
		>
			<h3 class="font-serif-bold text-3xl mb-4">{currentSermon.title}</h3>
			<p class="font-sans-semi text-grey">{currentSermon.description}</p>
			<SermonPlayer sermon={currentSermon} />
		</div>
	{/if}
</div>
