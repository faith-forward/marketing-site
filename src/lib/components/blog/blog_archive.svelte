<script lang="ts">
	import type { Post } from '$lib/types/blog';
	import type { CMSResponse } from '$lib/types/cmsResponse';
	import { onMount } from 'svelte';
	import BlogListing from './blog_listing.svelte';

	let posts: Post[] = [];
	let page = 1;
	let loading = true;

	const fetchDevotionals = async () => {
		loading = true;
		try {
			const res = await fetch(`/api/blogs?page=${page}`);
			const data: { posts: CMSResponse<Post> } = await res.json();
			posts = posts.concat(data.posts.data.map((item) => item.attributes));
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	};

	onMount(() => {
		fetchDevotionals();
	});
</script>

<section class="mt-12 mb-24">
	<h1 class="mb-24 text-4xl text-boldGrey font-sans-bold text-center">All Articles</h1>
	{#if posts.length > 0}
		<ul class="flex flex-wrap justify-between">
			{#each posts as post}
				<li class="big-laptop:w-[48%] w-full mb-8">
					<BlogListing {post} />
				</li>
			{/each}
		</ul>
		<div class="flex justify-end">
			<button
				class="bg-orange rounded-full text-white font-sans-semi px-4 py-2"
				on:click={() => {
					page++;
					fetchDevotionals();
				}}
			>
				{loading ? 'Loading...' : 'Read Older Posts'}
			</button>
		</div>
	{:else}
		<p>{loading ? 'Loading...' : 'No posts found.'}</p>
	{/if}
</section>
