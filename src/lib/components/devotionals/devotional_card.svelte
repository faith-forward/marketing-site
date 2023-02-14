<script lang="ts">
	import formatDate from '$lib/util/formatDate';

	export let title: string;
	export let description: string;
	export let releaseDate: string;
</script>

<div
	class="w-[340px] tablet:w-[400px] rounded-lg bg-white h-[280px] my-4 p-8 font-sans flex flex-col justify-between card"
>
	<div>
		<h2 class="font-sans-bold text-boldGrey text-lg">{title}</h2>
		<p class="text-grey">{description}</p>
	</div>
	<div class="release-date text-grey italic text-sm">{formatDate(releaseDate)}</div>
</div>

<style>
	.card {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	}
</style>
