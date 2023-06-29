<script lang="ts">
	import MdKeyboardArrowUp from 'svelte-icons/md/MdKeyboardArrowUp.svelte';
	import { slide } from 'svelte/transition';

	export let id: number;
	export let title: string;
	export let subtitle: string = '';
	export let description: string = '';
	export let currentActive: number | null;
	export let image: string;

	const onClickHandler = () => {
		if (currentActive === id) {
			currentActive = null;
		} else {
			currentActive = id;
		}
	};
</script>

<button
	on:click={onClickHandler}
	class="flex text-left w-full focus:outline-none items-center p-4 font-sans py-6"
>
	<div class="w-full flex flex-col">
		<h3
			class="font-sans-semi text-lg mb-1 text-boldGrey hover:!text-green transition-color duration-100 flex justify-between items-center"
			class:text-green={currentActive === id}
		>
			{title}
			<div
				class="
          w-8
          transform 
          transition
      "
				class:rotate-180={currentActive === id}
			>
				<MdKeyboardArrowUp />
			</div>
		</h3>

		{#if !!subtitle}
			<p class="text-grey">
				{subtitle}
			</p>
		{/if}
	</div>
</button>

{#if currentActive === id}
	<div class="px-4 pb-4 mt-0" transition:slide>
		<div class="laptop:hidden mb-4 overflow-clip rounded-md">
			<img src={image} alt={title} />
		</div>
		<p class="font-sans text-grey text-sm">{description}</p>
	</div>
{/if}
