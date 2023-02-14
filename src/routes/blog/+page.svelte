<script lang="ts">
	import BlogListing from '$lib/components/blog/blog_listing.svelte';
	import FeaturedPost from '$lib/components/blog/featured_post.svelte';

	import Nav from '$lib/sections/nav.svelte';
	import type { Post } from '$lib/types/blog';
	import type { CMSResponse } from '$lib/types/cmsResponse';
	import type { PageData } from './$types';

	export let data: PageData;
	let posts: CMSResponse<Post>;
	let featuredPost: Post | undefined;

	$: {
		posts = { ...data.posts };
		const featuredPostFound = posts.data.findIndex((post) => post.attributes.featured);
		if (featuredPostFound && posts.data[featuredPostFound]) {
			featuredPost = posts.data[featuredPostFound].attributes;
			posts.data.splice(featuredPostFound, 1);
		}
	}
</script>

<main class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32">
	<Nav active="blog" />
	<section class="flex laptop:space-x-8 mt-8 flex-col items-center pb-16">
		<h1 class="mb-24 text-4xl text-boldGrey font-sans-bold">Featured Articles</h1>
		<div class="flex flex-col laptop:flex-row">
			<div class="flex laptop:mr-16 mb-8 laptop:mb-0">
				{#if featuredPost}
					<FeaturedPost
						cover={featuredPost.cover.data.attributes.formats.large.url}
						title={featuredPost.title}
						description={featuredPost.description}
						slug={featuredPost.slug}
					/>
				{/if}
			</div>
			{#if posts.data.length > 0}
				<ul class="flex flex-col flex-1 space-y-8 mb-8 laptop:mb-0">
					{#each posts.data as post}
						<BlogListing
							cover={post.attributes.cover.data.attributes.formats.small.url}
							title={post.attributes.title}
							description={post.attributes.description}
							releaseDate={post.attributes.releaseDate}
							slug={post.attributes.slug}
						/>
					{/each}
				</ul>
			{:else}
				<p>No posts found.</p>
			{/if}
		</div>
	</section>
</main>

<style>
	main {
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
