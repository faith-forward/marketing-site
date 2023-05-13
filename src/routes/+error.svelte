<script>
	import Nav from '$lib/sections/nav.svelte';
</script>

<main class="flex flex-col bg-paper flex-1">
	<div class="px-4 tablet:px-16 desktop:px-32">
		<Nav />
	</div>
	<section
		class="flex laptop:space-x-8 mt-8 flex-col items-center px-4 tablet:px-16 desktop:px-32 flex-1"
	>
		<h1 class="mb-4 text-4xl text-boldGrey font-sans-bold">
			Oops... we couldn't find the page you're looking for.
		</h1>
		<p class="font-sans-semi text-lg text-grey mt-4">Please check the URL and try again.</p>
	</section>
</main>
