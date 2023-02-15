<script lang="ts">
	import getForegroundColor from '$lib/util/getForegroundColor';
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
	let textColor: string;

	$: textColor = getForegroundColor(color);
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
		style={`background-color: ${color}`}
	>
		<div class="py-12 flex flex-col justify-center mt-8">
			<div class="flex flex-wrap mb-4 justify-center space-x-4">
				{#each tags as tag}
					<Tag {tag} color={textColor} />
				{/each}
			</div>
			<h1 class={`text-6xl font-sans-condensed text-${textColor} text-center leading-tight`}>
				{title.toUpperCase()}
			</h1>
			<p class={`font-sans text-${textColor} mt-8 text-center`}>{description}</p>
			<p class={`font-sans text-sm text-${textColor} mt-8 text-right`}>
				<span class="italic mr-4">{releaseDate}</span>
				{readingTime}
			</p>
		</div>
	</div>
	<!-- Blog Cover Image -->
	<img src={image} alt={imageAlt} class="relative bottom-32 tablet:bottom-64" />
</div>

<style>
	/* Tablet+ styles */
	@media (min-width: 768px) {
		img {
			height: 65vh;
		}
	}
</style>
