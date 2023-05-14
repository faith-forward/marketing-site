<script lang="ts">
	import BlogArchive from '$lib/components/blog/blog_archive.svelte';
	import BlogListing from '$lib/components/blog/blog_listing.svelte';
	import FeaturedPost from '$lib/components/blog/featured_post.svelte';

	import Nav from '$lib/sections/nav.svelte';
	import type { Post } from '$lib/types/blog';
	import type { CMSResponse } from '$lib/types/cmsResponse';
	import type { PageData } from './$types';

	export let data: PageData;
	let pinnedPosts: CMSResponse<Post>;
	let featuredPost: Post | undefined;

	$: if (data && data.posts)
		featuredPost = data.posts.data.find((post: any) => post.attributes.featured).attributes;

	$: if (data && data.posts)
		pinnedPosts = {
			data: data.posts.data.filter(
				(post: any) => post.attributes.pinned && !post.attributes.featured
			),
			meta: data.posts.meta
		};
</script>

<svelte:head>
	<title>Blog | Christian Inspiration and More with Faith Forward</title>
	<meta
		name="description"
		content="The Faith Forward Blog offers a collection of inspirational articles about the Christian faith designed to uplift and inspire you. Read our featured articles and discover new ways to deepen your faith. Explore our blog now and start your journey to a more fulfilling spiritual life."
	/>
	<meta name="og:image" content="/images/ff large.png" />
	<meta name="og:image:width" content="600" />
	<meta name="og:image:height" content="600" />
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
			{#if pinnedPosts.data.length > 0}
				<ul class="flex flex-col flex-1 space-y-8 mb-8 laptop:mb-0">
					{#each pinnedPosts.data as post}
						<li>
							<BlogListing post={post.attributes} />
						</li>
					{/each}
				</ul>
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
