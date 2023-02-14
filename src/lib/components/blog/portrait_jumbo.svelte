<script lang="ts">
	import { mediaUrl } from '$lib/config/media_config';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Tag from './tag.svelte';

	export let title: string;
	export let description: string;
	export let tags: string[];
	export let image: string;
	export let imageAlt: string;
	export let releaseDate: string;
	export let readingTime: string;
	export let color: string;
</script>

<div class="flex justify-between mb-16 relative">
	<a
		href="/blog"
		class="text-grey text-sm font-sans text-lg absolute top-0 left-4 tablet:left-16 desktop:left-32 flex items-center hover:text-blue"
	>
		<Fa icon={faArrowLeft} class="mr-2" />
		Back
	</a>
	<div
		class="flex-1 py-12 flex flex-col justify-center tablet:px-16 laptop:pl-16 desktop:pl-32 items-center text-center laptop:text-left laptop:items-start"
	>
		<div class="flex flex-wrap space-x-4 mb-4">
			{#each tags as tag}
				<Tag {tag} color="boldGrey" />
			{/each}
		</div>
		<h1 class=" text-6xl font-sans-condensed text-boldGrey leading-tight">{title.toUpperCase()}</h1>
		<p class="font-sans text-grey mt-8 w-3/5">{description}</p>
		<p class="font-sans text-sm text-grey mt-8 w-3/5">
			<span class="italic mr-4">{releaseDate}</span>
			{readingTime}
		</p>
		<img src={`${mediaUrl}${image}`} alt={imageAlt} class="flex laptop:hidden mt-8" />
	</div>
	<div class="flex-1 py-12 justify-center hidden laptop:flex" style={`background-color: ${color}`}>
		<img src={`${mediaUrl}${image}`} alt={imageAlt} />
	</div>
</div>

<style>
	img {
		height: 70vh;
	}
</style>
