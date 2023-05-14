<script lang="ts">
	import type { Post } from '$lib/types/blog';

	export let post: Post;
</script>

<div class="flex-1 relative featured-container px-4 bg-white py-4 ">
	<div class="z-10 relative h-full px-2">
		<img
			src={post.cover.data.attributes.formats.large.url}
			alt={post.cover.data.attributes.alternativeText}
			class="w-4/5 m-auto my-8 tablet:hidden"
		/>
		<h2
			class="text-6xl font-sans-condensed leading-tight text-boldGrey text-center tablet:text-left"
		>
			{post.title.toUpperCase()}
		</h2>
		<p class="text-lg text-grey font-sans mt-8 tablet:w-2/5 text-center tablet:text-left">
			{post.description}
		</p>
		<a href={`/blog/${post.slug}`} class="flex justify-center tablet:justify-start">
			<button class="mt-8 rounded-full py-2 px-8 bg-orange text-white font-sans-bold self-center"
				>Read</button
			>
		</a>
	</div>
	<img
		src={post.cover.data.attributes.formats.large.url}
		alt={post.cover.data.attributes.alternativeText}
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
