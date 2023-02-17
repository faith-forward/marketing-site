<script lang="ts">
	import LandscapeJumbo from '$lib/components/blog/landscape_jumbo.svelte';
	import PortraitJumbo from '$lib/components/blog/portrait_jumbo.svelte';
	import Nav from '$lib/sections/nav.svelte';
	import type { Post } from '$lib/types/blog';
	import formatDate from '$lib/util/formatDate';
	import getReadingTime from '$lib/util/getReadingTime';
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	export let data: { post: Post };
	let post: Post;
	let contentDiv: HTMLDivElement;

	const renderContent = () => {
		const renderer = new marked.Renderer();

		renderer.link = (href: string, title: string, text: string) => {
			return `<a href="${href}" title="${title}" class="text-blue">${text}</a>`;
		};

		renderer.blockquote = (quote: string) => {
			return '<p class="text-xl text-boldGrey font-sans-bold">' + quote + '</p>';
		};

		const lines = post.content.split('\n');

		const renderedLines = lines.map((line) => {
			if (line.startsWith('##')) {
				return `<h2 class="text-xl text-boldGrey font-sans-bold">${line.slice(2)}</h2>`;
			} else if (line.startsWith('>')) {
				return `<p class="text-lg text-boldGrey font-serif-bold leading-relaxed"><span class="bg-[#fff09c]">${line.slice(
					1
				)}</span></p>`;
			} else {
				return line.replace(/<br\s*\/?>/gi, '\n'); // replace <br> with \n for other lines
			}
		});

		return marked(renderedLines.join('<br>'), { renderer }); // join the lines with <br> tags
	};

	onMount(() => {
		contentDiv.innerHTML = renderContent();
	});

	$: post = data.post;
</script>

<svelte:head>
	<title>{post.SEO.metaTitle}</title>
	<meta name="description" content={post.SEO.metaDescription} />
</svelte:head>

<main class="bg-paper">
	<div class="px-4 tablet:px-16 desktop:px-32">
		<Nav active="blog" />
	</div>
	<section class="flex flex-col relative">
		{#if post.isPortrait}
			<PortraitJumbo {post} />
		{:else}
			<LandscapeJumbo {post} />
		{/if}
		<div class="flex justify-around pb-8 tablet:py-24">
			<div
				class={`${
					post.content.split(' ')[0] !== 'Dear' ? 'indent-4' : ''
				} w-[720px] z-10 font-sans leading-relaxed text-boldGrey px-4 tablet:px-0 ${
					post.isPortrait ? '' : 'moveUp'
				}`}
				bind:this={contentDiv}
			>
				{post.content}
			</div>
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

	.moveUp {
		margin-top: -6rem;
	}

	/* Tablet+ */
	@media (min-width: 768px) {
		.moveUp {
			margin-top: -16rem;
		}
	}
</style>
