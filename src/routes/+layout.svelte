<script>
	import Footer from '$lib/sections/footer.svelte';
	import '../app.css';
	import '../fonts.css';
</script>

<div class="flex bg-paper w-[100vw] min-h-[100vh] justify-center">
	<div class="max-w-[1800px] flex flex-col flex-1">
		<slot />
		<Footer />
	</div>
</div>
