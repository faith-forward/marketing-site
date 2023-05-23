<script lang="ts">
	import { onMount } from 'svelte';
	// import Fa from 'svelte-fa/src/fa.svelte';
	// import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import type { CMSResponse } from '$lib/types/cmsResponse';
	import type { Devotional } from '$lib/types/devotional';
	import DevotionalCard from './devotional_card.svelte';

	let month: number = new Date().getMonth() + 1;
	let year: number = new Date().getFullYear();
	let devotionals: Devotional[] = [];
	let loading: boolean = true;

	const fetchDevotionals = async () => {
		// replace with your mocked API request
		try {
			const res = await fetch(`/api/devotionals?month=${month - 1}&year=${year}`);
			const data: { posts: CMSResponse<Devotional> } = await res.json();
			devotionals = data.posts.data.map((item) => item.attributes);
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	};

	onMount(() => {
		fetchDevotionals();
	});

	const updateMonth = () => {
		loading = true;
		fetchDevotionals();
	};
</script>

<div class="flex w-full items-center justify-center laptop:justify-end">
	<div>
		<select
			class="font-sans-semi text-boldGrey py-2 px-4 border-width-2 border-2 border-boldGrey mr-4"
			aria-label="Month"
			bind:value={month}
			on:change={updateMonth}
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
			<option value={2023}>2023</option>
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

{#if loading}
	<div class="flex w-full justify-center mt-4">
		<p>Loading...</p>
	</div>
{:else}
	<ul class="flex w-full justify-center laptop:flex-wrap laptop:justify-between mt-4">
		{#each devotionals as devotional}
			<li class="flex">
				<a href={`/devotionals/${devotional.slug}`} aria-label={`Read "${devotional.title}"`}>
					<DevotionalCard
						title={devotional.title}
						description={devotional.description}
						releaseDate={devotional.releaseDate}
						imageUrl={devotional.imageUrl}
					/>
				</a>
			</li>
		{:else}
			<li>No devotionals found</li>
		{/each}
	</ul>
{/if}

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
