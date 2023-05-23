<script lang="ts">
	import type { Devotional } from '$lib/types/devotional';
	import DevotionalCard from './devotional_card.svelte';

	export let relatedPosts: Devotional[];
</script>

<section class="mt-24 mb-8 px-16 desktop:px-32 w-full flex-1 flex flex-col">
	<h2 class="text-center font-sans-condensed text-4xl text-boldGrey flex-1">Related Devotionals</h2>
	<div class="flex my-8 justify-center">
		<div class="flex flex-wrap justify-center">
			{#each relatedPosts as post}
				<a href={`/devotionals/${post.slug}`} aria-label={`Read "${post.title}"`} class="mx-8 my-4">
					<DevotionalCard
						title={post.title}
						description={post.description}
						releaseDate={post.releaseDate}
						imageUrl={post.imageUrl}
					/>
				</a>
			{/each}
		</div>
	</div>
</section>
