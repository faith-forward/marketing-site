<script lang="ts">
	import type { Post } from '$lib/types/blog';
	import getReadingTime from '$lib/util/getReadingTime';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import AuthorListing from '../author_listing.svelte';
	import Tag from './tag.svelte';

	export let post: Post;

	$: console.log(post.author);
</script>

<div class="flex justify-between mb-16 relative">
	<a
		href="/blog"
		class="text-grey text-sm font-sans absolute top-0 left-4 tablet:left-16 desktop:left-32 flex items-center hover:text-blue"
	>
		<Fa icon={faArrowLeft} class="mr-2" />
		Back
	</a>
	<div
		class="flex-1 py-12 flex flex-col justify-center tablet:px-16 laptop:pl-16 desktop:pl-32 items-center text-center laptop:text-left laptop:items-start"
	>
		<div class="flex flex-wrap space-x-4 mb-4">
			{#each post.tags.data as tag}
				<Tag tag={tag.attributes.tag} color="boldGrey" />
			{/each}
		</div>
		<h1 class=" text-6xl font-sans-condensed text-boldGrey leading-tight">
			{post.title.toUpperCase()}
		</h1>
		<p class="font-sans text-grey mt-8 w-4/5 laptop:w-3/5">{post.description}</p>
		{#if post.author}
			<AuthorListing author={post.author} />
		{/if}
		<p class="font-sans text-sm text-grey mt-8 w-4/5 laptop:w-3/5">
			<span class="italic mr-4">{post.releaseDate}</span>
			{getReadingTime(post.content)}
		</p>
		<img
			src={post.cover.data.attributes.formats.medium.url}
			alt={post.cover.data.attributes.alternativeText}
			class="flex laptop:hidden mt-8"
		/>
	</div>
	<div
		class="flex-1 py-12 justify-center hidden laptop:flex"
		style={`background-color: ${post.color}`}
	>
		<img
			src={post.cover.data.attributes.formats.large.url}
			alt={post.cover.data.attributes.alternativeText}
		/>
	</div>
</div>

<style>
	img {
		height: 70vh;
	}
</style>
