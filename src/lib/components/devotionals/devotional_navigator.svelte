<script lang="ts">
	import { onMount } from 'svelte';
	// import Fa from 'svelte-fa/src/fa.svelte';
	// import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import type { CMSResponse } from '$lib/types/cmsResponse';
	import type { Devotional } from '$lib/types/devotional';
	import DevotionalCard from './devotional_card.svelte';

	let month: number = new Date().getMonth() + 1;
	let year: number = new Date().getFullYear();
	let search: string = '';
	let devotionals: Devotional[] = [];

	const fetchDevotionals = async () => {
		// replace with your mocked API request
		try {
			const res = await fetch('/api/devotionals');
			const data: { posts: CMSResponse<Devotional> } = await res.json();
			devotionals = data.posts.data.map((item) => item.attributes);
			console.log(devotionals);
			// console.log(devotionals.map((devo) => devo.slug));
		} catch (err) {
			console.error(err);
		}
		// devotionals = await res.json();
	};

	onMount(() => {
		fetchDevotionals();
	});
</script>

<div class="flex w-full items-center justify-center laptop:justify-end">
	<div>
		<select
			class="font-sans-semi text-boldGrey py-2 px-4 border-width-2 border-2 border-boldGrey mr-4"
			aria-label="Month"
			bind:value={month}
		>
			{#each Array.from({ length: 12 }, (_, i) => i + 1) as m}
				<option value={m}
					>{new Date(2000, m - 1).toLocaleString('default', { month: 'long' })}</option
				>
			{/each}
		</select>
		<select
			bind:value={year}
			aria-label="Year"
			class="font-sans-semi text-boldGrey py-2 px-4 border-width-2 border-2 border-boldGrey"
		>
			{#each Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i) as y}
				<option value={y}>{y}</option>
			{/each}
		</select>
	</div>
	<!-- <div class="bg-[#ddd] rounded-full px-4 flex items-center w-[400px]">
		<button type="button">
			<Fa icon={faSearch} />
		</button>
		<input
			type="text"
			class="py-2 px-4 bg-transparent text-boldGrey font-sans-semi"
			bind:value={search}
		/>
	</div> -->
</div>

<ul class="flex w-full justify-center laptop:flex-wrap laptop:justify-between mt-4">
	{#each devotionals as devotional}
		<li class="flex">
			<a href={`/devotionals/${devotional.slug}`}>
				<DevotionalCard
					title={devotional.title}
					description={devotional.description}
					releaseDate={devotional.releaseDate}
				/>
			</a>
		</li>
	{:else}
		<li>No devotionals found</li>
	{/each}
</ul>

<style>
	select {
		border-radius: 100px;
		background: none;
	}
	select:hover {
		cursor: pointer;
	}
	/* input {
		width: 340px;
	}
	input:focus {
		outline: none;
	} */
	ul {
		flex-flow: row wrap;
	}
	li {
		flex: 0 1 calc(25% - 1em);
	}
</style>
