<script lang="ts">
	import MdKeyboardArrowRight from 'svelte-icons/md/MdKeyboardArrowRight.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';

	import { slide } from 'svelte/transition';

	export let id: number;
	export let title: string;
	export let text: string;
	export let currentActive: number | null;

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
	class="flex text-left w-full focus:outline-none items-center font-sans py-4"
>
	<div class="w-full flex items-center">
		<div
			class="
          w-6
          transform 
          transition
          mr-2
          text-green
      "
		>
			{#if currentActive === id}
				<MdKeyboardArrowDown />
			{:else}
				<MdKeyboardArrowRight />
			{/if}
		</div>
		<h3 class="font-sans-semi text-boldGrey text-sm">
			{title}
		</h3>
	</div>
</button>

{#if currentActive === id}
	<div class="ml-8 pb-4" transition:slide>
		<p class="font-sans text-grey text-sm">{text}</p>
	</div>
{/if}
