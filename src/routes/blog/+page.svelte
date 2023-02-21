<script lang="ts">
	import BlogArchive from '$lib/components/blog/blog_archive.svelte';
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

<svelte:head>
	<title>Blog | Christian Inspiration and More with Faith Forward</title>
	<meta
		name="description"
		content="The Faith Forward Blog offers a collection of inspirational articles about the Christian faith designed to uplift and inspire you. Read our featured articles and discover new ways to deepen your faith. Explore our blog now and start your journey to a more fulfilling spiritual life."
	/>
</svelte:head>

<main class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32">
	<Nav active="blog" />
	<section class="flex desktop:space-x-8 mt-8 flex-col items-center pb-16">
		<h1 class="mb-24 text-4xl text-boldGrey font-sans-bold">Featured Articles</h1>
		<div class="flex flex-col big-laptop:flex-row">
			<div class="flex big-laptop:mr-16 mb-8 big-laptop:mb-0">
				{#if featuredPost}
					<FeaturedPost post={featuredPost} />
				{/if}
			</div>
			{#if posts.data.length > 0}
				<ul class="flex flex-col flex-1 space-y-8 mb-8 laptop:mb-0">
					{#each posts.data as post}
						<li>
							<BlogListing post={post.attributes} />
						</li>
					{/each}
				</ul>
			{:else}
				<p>No posts found.</p>
			{/if}
		</div>
	</section>
	<BlogArchive />
</main>

<style>
	main {
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
