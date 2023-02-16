<script lang="ts">
	import { lazyLoad } from '$lib/util/lazyLoad';

	export let src = '';
	export let alt = '';
</script>

<img
	use:lazyLoad={src}
	{alt}
	class="rounded-3xl tablet:h-[687px] tablet:w-[317px] h-[549px] w-[253px]"
/>

<style>
	img {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	}
</style>
