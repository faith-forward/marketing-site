<script lang="ts">
	import DevotionalReader from '$lib/components/devotionals/devotional_reader.svelte';
	import RelatedDevotionals from '$lib/components/devotionals/related_devotionals.svelte';
	// import MailingList from '$lib/components/mailing_list.svelte';
	import Nav from '$lib/sections/nav.svelte';
	import type { CMSResponse } from '$lib/types/cmsResponse';
	import type { Devotional } from '$lib/types/devotional';

	export let data: { post: Devotional; relatedPosts: CMSResponse<Devotional> };
	let post: Devotional;
	let relatedPosts: Devotional[];

	$: post = data.post;
	$: if (data.relatedPosts && data.relatedPosts.data)
		relatedPosts = data.relatedPosts.data.map((post) => post.attributes);
</script>

<svelte:head>
	<title>{post.seoTitle}</title>
	<meta name="description" content={post.seoDescription} />
</svelte:head>

<main class="bg-paper flex flex-col relative">
	<div class="px-4 tablet:px-16 desktop:px-32">
		<Nav active="devotionals" />
	</div>
	<section class="flex flex items-center flex-col reader">
		<DevotionalReader
			title={post.title}
			content={post.content.replace(/\n/g, '<br />')}
			releaseDate={post.releaseDate}
			quote={post.quote}
		/>
	</section>
	{#if relatedPosts && relatedPosts.length > 0}
		<RelatedDevotionals {relatedPosts} />
	{/if}
	<!-- <MailingList /> -->
</main>

<style>
	main {
		width: 100vw;
		min-height: 100vh;
	}
	.reader {
		min-height: calc(100vh - 84px);
	}
</style>
