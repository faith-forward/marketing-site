<script lang="ts">
	import LandscapeJumbo from '$lib/components/blog/landscape_jumbo.svelte';
	import PortraitJumbo from '$lib/components/blog/portrait_jumbo.svelte';
	import Nav from '$lib/sections/nav.svelte';
	import type { Image, Post } from '$lib/types/blog';
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

		let lines = post.content.split('\n');
		// remove whitespace lines that appear after any lines that start with ##
		lines = lines.filter((line, index) => {
			if (line.startsWith('##')) {
				return true;
			} else if (line.trim() === '') {
				return lines[index - 1].startsWith('##') ? false : true;
			} else {
				return true;
			}
		});

		const renderedLines = lines.map((line) => {
			if (line.startsWith('##')) {
				return `<br /><h2 class="text-xl text-boldGrey font-sans-bold">${line.slice(2)}</h2>`;
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

	let shareImage: Image;

	$: {
		if (post.SEO.SharedImage) {
			shareImage = post.SEO.SharedImage.media.data.attributes.formats.large;
		} else {
			shareImage = post.cover.data.attributes.formats.large;
		}
	}

	$: post = data.post;
</script>

<svelte:head>
	<title>{post.SEO.metaTitle}</title>
	<meta name="description" content={post.SEO.metaDescription} />
	<meta name="og:image" content={shareImage.url} />
	<meta name="og:image:width" content={shareImage.width?.toString() || '667'} />
	<meta name="og:image:height" content={shareImage.height?.toString() || '1000'} />
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
				class={`w-[720px] z-10 font-sans leading-relaxed text-text px-4 tablet:px-0 ${
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
