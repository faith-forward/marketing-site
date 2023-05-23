<script lang="ts">
	import formatDate from '$lib/util/formatDate';
	import { lazyLoad } from '$lib/util/lazyLoad';

	export let imageUrl: string;
	export let title: string;
	export let description: string;
	export let releaseDate: string;
</script>

<div
	class="w-[340px] tablet:w-[400px] rounded-lg bg-white h-[450px] my-4 font-sans flex flex-col card"
>
	<div class="overflow-clip h-[200px]">
		<img use:lazyLoad={imageUrl} alt={title} class="w-full rounded-tl-lg rounded-tr-lg" />
	</div>
	<div class="flex flex-col flex-1 p-4 justify-between">
		<div>
			<h2 class="font-sans-bold text-boldGrey text-lg">{title}</h2>
			<p class="text-grey">{description}</p>
		</div>
		<div class="release-date text-grey italic text-sm">
			{formatDate(releaseDate)}
		</div>
	</div>
</div>

<style>
	.card {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	}
</style>
