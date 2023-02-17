<script lang="ts">
	import type { Post } from '$lib/types/blog';
	import getForegroundColor from '$lib/util/getForegroundColor';
	import getReadingTime from '$lib/util/getReadingTime';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Tag from './tag.svelte';

	export let post: Post;
	let textColor: string;

	$: textColor = getForegroundColor(post.color);
</script>

<div class="flex flex-col items-center relative">
	<a
		href="/blog"
		class="text-sm font-sans text-lg absolute top-8 left-4 tablet:left-16 desktop:left-32 flex items-center hover:opacity-[0.9]"
		style={`color: ${textColor}`}
	>
		<Fa icon={faArrowLeft} class="mr-2" />
		Back
	</a>
	<!-- Blog Title -->
	<div
		class="px-4 tablet:px-16 desktop:px-32 w-full flex flex-col items-center pb-32 tablet:pb-64"
		style={`background-color: ${post.color}`}
	>
		<div class="py-12 flex flex-col justify-center mt-8">
			<div class="flex flex-wrap mb-4 justify-center space-x-4">
				{#each post.tags.data as tag}
					<Tag tag={tag.attributes.tag} color={textColor} />
				{/each}
			</div>
			<h1 class={`text-6xl font-sans-condensed text-${textColor} text-center leading-tight`}>
				{post.title.toUpperCase()}
			</h1>
			<p class={`font-sans text-${textColor} mt-8 text-center`}>{post.description}</p>
			<p class={`font-sans text-sm text-${textColor} mt-8 text-right`}>
				<span class="italic mr-4">{post.releaseDate}</span>
				{getReadingTime(post.content)}
			</p>
		</div>
	</div>
	<!-- Blog Cover Image -->
	<img
		src={post.cover.data.attributes.formats.large.url}
		alt={post.cover.data.attributes.alternativeText}
		class="relative bottom-32 tablet:bottom-64"
	/>
</div>

<style>
	/* Tablet+ styles */
	@media (min-width: 768px) {
		img {
			height: 65vh;
		}
	}
</style>
