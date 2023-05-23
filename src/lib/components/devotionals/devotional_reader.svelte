<script lang="ts">
	import formatDate from '$lib/util/formatDate';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	export let title: string;
	export let releaseDate: string;
	export let content: string;
	export let quote: string;
	export let imageUrl: string;

	let contentDiv: HTMLDivElement;

	const renderContent = () => {
		const renderer = new marked.Renderer();
		renderer.br = () => '<br />';
		// renderer.br
		contentDiv.innerHTML = marked(content, { renderer });
	};

	onMount(() => {
		renderContent();
	});

	$: if (content && contentDiv) renderContent();
</script>

<div class="flex flex-1 relative pb-8">
	<a
		href="/devotionals"
		class="text-grey text-sm font-sans text-lg absolute top-0 left-4 tablet:left-16 desktop:left-32 flex items-center hover:text-blue"
	>
		<Fa icon={faArrowLeft} class="mr-2" />
		Back
	</a>
	<div
		class="flex flex-1 mx-4 tablet:mx-16 desktop:mx-32 content flex-col font-sans justify-center mt-16 tablet:mt-8"
	>
		<div class="flex flex-col tablet:flex-row space-between tablet:items-baseline items-center">
			<h1
				class="text-center tablet:text-left font-sans-condensed text-4xl text-boldGrey flex-1 leading-snug"
			>
				{title}
			</h1>
			<p class="text-sm text-grey italic">{formatDate(releaseDate)}</p>
		</div>
		<div class="flex flex-1 items-center tablet:hidden my-4 p-4">
			<p class="font-serif-bold text-2xl quote text-boldGrey leading-relaxed">
				<span class="highlight">
					{quote}
				</span>
			</p>
		</div>
		<div class="text-boldGrey mt-4 leading-relaxed" bind:this={contentDiv} />
	</div>
	<div class="bg-white flex-1 px-16 justify-center hidden tablet:flex flex-col">
		<img src={imageUrl} alt={title} class="w-full mt-12" />
		<p class="font-serif-bold text-3xl quote text-boldGrey leading-relaxed mt-12">
			<span class="highlight">
				{quote}
			</span>
		</p>
	</div>
</div>

<style>
	@keyframes highlight {
		0% {
			background-size: 0 60%;
		}
		100% {
			background-size: 100% 60%;
		}
	}

	.highlight {
		text-decoration: none;
		background-repeat: no-repeat;
		background-size: 0% 80%;
		animation: highlight 3s linear forwards;
		background-position-x: 16px;
		background-position-y: 20px;
		background-image: linear-gradient(#b8e6ff, #b8e6ff);
	}

	/* larger than phone styles for .highlight */
	@media (min-width: 640px) {
		.highlight {
			background-position-x: 24px;
			background-position-y: 26px;
		}
	}
</style>
