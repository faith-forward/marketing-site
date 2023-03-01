<script lang="ts">
	import SermonNavigator from '$lib/components/sermons/sermon_navigator.svelte';
	import Nav from '$lib/sections/nav.svelte';
	import type Sermon from '$lib/types/sermon';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let sermonID: string;
	let page = 0;
	let sermonsPerPage = 5;

	// extract page data
	$: if (data && data.sermonID) {
		sermonID = data.sermonID;
	}

	let sermons: Sermon[] = [];
	let playingSermon: Sermon;

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
	};

	onMount(() => {
		fetchSermons();
	});
</script>

<svelte:head>
	<title>Sermons | Listen to Daily Sermons with Faith Forward</title>
	<meta
		name="description"
		content="Get daily inspiration and personalized Christian devotionals from Faith Forward. Browse our selection of devotionals, tailored to your needs and interests, on a monthly basis. Strengthen your faith and deepen your spiritual journey with our app. Download now and start your journey towards a more fulfilling life."
	/>
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
		<SermonNavigator {sermons} currentSermon={playingSermon} />
	</section>
</main>
