<script lang="ts">
	import initiateDownload from '$lib/pixel/initiateDownload';
	import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';

	export let level: string;
	export let price: string;
	export let subtitle: string | null = null;
	export let features: string[] = [];
	export let planType: 'individual' | 'church' | 'enterprise';
</script>

<div
	class={`flex flex-col justify-between p-6 ${
		planType === 'church'
			? 'bg-churchBackground'
			: planType === 'enterprise'
			? 'bg-enterpriseBackground'
			: 'bg-white'
	} mb-8 tablet:mb-0 rounded-lg shadow-lg flex-1`}
>
	<div>
		<h2
			class="text-xs font-sans-bold uppercase"
			class:text-blue={planType === 'individual'}
			class:text-[#a8dfff]={planType !== 'individual'}
		>
			{level}
		</h2>
		{#if subtitle}
			<p
				class="text-xs font-sans mt-2"
				class:text-grey={planType === 'individual'}
				class:text-white={planType !== 'individual'}
			>
				{subtitle}
			</p>
		{/if}
		<p
			class="text-2xl font-sans-bold mt-2"
			class:text-boldGrey={planType === 'individual'}
			class:text-white={planType !== 'individual'}
		>
			{price}
		</p>
		<ul
			class="flex flex-col space-y-2 mt-4"
			class:text-grey={planType === 'individual'}
			class:text-white={planType !== 'individual'}
		>
			{#each features as feature (feature)}
				<li class="flex items-center">
					<Fa icon={faCheckCircle} class="mr-2" />
					<p class="text-sm">{feature}</p>
				</li>
			{/each}
		</ul>
	</div>

	{#if planType === 'individual'}
		<a
			href="https://apps.apple.com/us/app/faith-forward/id1661516199"
			on:click={() => initiateDownload('/')}
		>
			<button
				class="bg-blue text-white font-sans-bold uppercase text-sm rounded-lg py-2 mt-4 w-full"
			>
				Download
			</button>
		</a>
	{/if}

	{#if planType === 'church'}
		<a href="https://admin.faithforward.app/signup">
			<button
				class="bg-white text-blue font-sans-bold uppercase text-sm rounded-lg py-2 mt-4 w-full"
			>
				Sign Up
			</button>
		</a>
	{/if}

	{#if planType === 'enterprise'}
		<a href="mailto:hello@faithforward.app">
			<button
				class="bg-white text-enterpriseBlue font-sans-bold uppercase text-sm rounded-lg py-2 mt-4 w-full"
			>
				Contact Us
			</button>
		</a>
	{/if}
</div>
