<script lang="ts">
	import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';

	export let level: string;
	export let price: string;
	export let subtitle: string | null = null;
	export let features: string[];
	export let planType: 'individual' | 'church' | 'enterprise';
	// TODO: handle heading/subheading objects for features attr
	// TODO: redesign level/subtitle
</script>

<div
	class={`flex flex-col p-6 ${
		planType === 'church'
			? 'bg-churchBackground'
			: planType === 'enterprise'
			? 'bg-enterpriseBackground'
			: 'bg-white'
	} mb-8 tablet:mb-0 rounded-lg shadow-lg flex-1`}
>
	<h2
		class="text-xs font-sans-bold uppercase"
		class:text-blue={planType === 'individual'}
		class:text-[#a8dfff]={planType !== 'individual'}
	>
		{level}
	</h2>
	<p
		class="text-2xl font-sans-bold mt-2"
		class:text-boldGrey={planType === 'individual'}
		class:text-white={planType !== 'individual'}
	>
		{price}
	</p>
	{#if subtitle}
		<p
			class="text-xs font-sans mt-2"
			class:text-grey={planType === 'individual'}
			class:text-white={planType !== 'individual'}
		>
			{subtitle}
		</p>
	{/if}
	<ul
		class="flex flex-col space-y-2 mt-4"
		class:text-grey={planType === 'individual'}
		class:text-white={planType !== 'individual'}
	>
		{#each features as feature (feature)}
			<li class="flex items-center font-sans">
				<Fa icon={faCheckCircle} class="mr-2" />
				{feature}
			</li>
		{/each}
	</ul>
</div>
