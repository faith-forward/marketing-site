<script lang="ts">
	import LoadingScreen from '$lib/components/sermons/loading_screen.svelte';
	import SermonNavigator from '$lib/components/sermons/sermon_navigator.svelte';
	import Nav from '$lib/sections/nav.svelte';
	import type Sermon from '$lib/types/sermon';
	import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let sermonID: string;
	let page = 0;
	let loading = true;

	// extract page data
	$: if (data && data.sermonID) {
		sermonID = data.sermonID;
	}

	let sermons: Sermon[] = [];
	let playingSermon: Sermon;
	let listRef: HTMLDivElement;

	const fetchSermons = async () => {
		// check if there is a sermonID and append it to the url
		const url = sermonID
			? `/api/sermons?page=${page}&sermonID=${sermonID}`
			: `/api/sermons?page=${page}`;
		const res = await fetch(url);
		const sermonData = await res.json();
		sermons = sermonData.sermons;
		playingSermon = sermonData.sermons[0];
		playingSermon.isPlaying = true;
		loading = false;
		console.log('finished loading');
	};

	const handleScroll = () => {
		console.log('scrolling');
		const scrollHeight = listRef.scrollHeight;
		const scrollTop = listRef.scrollTop;
		const clientHeight = listRef.clientHeight;
		console.log(clientHeight);
		if (scrollHeight - scrollTop === clientHeight) {
			// fetchSermons();
			console.log('next');
		}
	};

	onMount(() => {
		loading = true;
		fetchSermons();
		listRef.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (listRef) listRef.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Sermons | Listen to Daily Sermons with Faith Forward</title>
	<meta
		name="description"
		content="Get daily inspiration and personalized Christian devotionals from Faith Forward. Browse our selection of devotionals, tailored to your needs and interests, on a monthly basis. Strengthen your faith and deepen your spiritual journey with our app. Download now and start your journey towards a more fulfilling life."
	/>
	<meta name="og:image" content="/images/ff large.png" />
	<meta name="og:image:width" content="600" />
	<meta name="og:image:height" content="600" />
</svelte:head>

<main class="flex flex-col bg-paper w-full">
	<div class="px-4 tablet:px-16 desktop:px-32">
		<Nav active="sermons" />
	</div>
	<section class="flex laptop:space-x-8 mt-8 flex-col items-center ">
		<div class="flex flex-col px-4 tablet:px-16 desktop:px-32 items-center">
			<h1 class="mb-4 text-4xl text-boldGrey font-sans-bold">Sermons</h1>
			<p class="mb-24 text-lg text-grey font-sans-semi big-laptop:w-3/5 laptop:w-4/5 text-center">
				Start each day off on the right foot with our Daily Audio Sermons - a powerful message of
				faith and inspiration in just a few short minutes.
			</p>
		</div>
		<div bind:this={listRef}>
			<!-- display loading spinner or navigator -->
			{#if loading}
				<LoadingScreen />
			{:else}
				<SermonNavigator {sermons} currentSermon={playingSermon} />
			{/if}
		</div>
	</section>
</main>
