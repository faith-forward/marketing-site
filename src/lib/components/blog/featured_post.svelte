<script lang="ts">
	import { mediaUrl } from '$lib/config/media_config';

	export let cover: string;
	export let title: string;
	export let description: string;
	// export let releaseDate: string;
	export let slug: string;
</script>

<div class="flex-1 relative featured-container px-4 bg-white py-4 ">
	<div class="z-10 relative h-full px-2">
		<img src={`${mediaUrl}${cover}`} alt={title} class="w-4/5 m-auto my-8 tablet:hidden" />
		<h2
			class="text-6xl font-sans-condensed leading-tight text-boldGrey text-center tablet:text-left"
		>
			{title.toUpperCase()}
		</h2>
		<p class="text-lg text-grey font-sans mt-8 tablet:w-2/5 text-center tablet:text-left">
			{description}
		</p>
		<a href={`/blog/${slug}`} class="flex justify-center tablet:justify-start">
			<button class="mt-8 rounded-full py-2 px-8 bg-red text-white font-sans-bold self-center"
				>Read</button
			>
		</a>
	</div>
	<img
		src={`${mediaUrl}${cover}`}
		alt={title}
		class="absolute top-16 right-32 z-0 h-4/5 hidden tablet:block"
	/>
</div>

<style>
	/* Tablet + styles */
	@media (min-width: 768px) {
		.featured-container {
			min-height: 600px;
			width: 780px;
		}
	}
</style>
