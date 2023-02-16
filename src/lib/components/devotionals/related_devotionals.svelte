<script lang="ts">
	import type { Devotional } from '$lib/types/devotional';
	import DevotionalCard from './devotional_card.svelte';

	export let relatedPosts: Devotional[];
</script>

<section class="my-24 px-16 desktop:px-32 w-full flex-1">
	<h2 class="text-center font-sans-condensed text-4xl text-boldGrey flex-1">Related Devotionals</h2>
	<div class="flex justify-between flex-wrap w-full my-24">
		{#each relatedPosts as post}
			<a href={`/devotionals/${post.slug}`} aria-label={`Read "${post.title}"`}>
				<DevotionalCard
					title={post.title}
					description={post.description}
					releaseDate={post.releaseDate}
				/>
			</a>
		{/each}
	</div>
</section>
