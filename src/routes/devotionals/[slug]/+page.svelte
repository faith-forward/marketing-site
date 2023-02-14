<script lang="ts">
	import DevotionalReader from '$lib/components/devotionals/devotional_reader.svelte';
	import Nav from '$lib/sections/nav.svelte';
	import type { Devotional } from '$lib/types/devotional';
	import formatDate from '$lib/util/formatDate';
	import getReadingTime from '$lib/util/getReadingTime';

	export let data: { post: Devotional };
	let post: Devotional;
	let content: string;

	$: post = data.post;
	$: content = post.content.replaceAll('\n', '<br />');
</script>

<main class="bg-paper flex flex-col relative">
	<div class="px-4 tablet:px-16 desktop:px-32">
		<Nav active="devotionals" />
	</div>
	<section class="flex flex-1 flex h-full items-center flex-col">
		<DevotionalReader
			title={post.title}
			{content}
			releaseDate={post.releaseDate}
			quote={post.quote}
		/>
	</section>
</main>

<style>
	main {
		width: 100vw;
		min-height: 100vh;
	}
</style>
