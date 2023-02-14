<script lang="ts">
	export let src = '';
	export let alt = '';
</script>

<img {src} {alt} class="rounded-3xl" />

<style>
	img {
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	}
</style>
