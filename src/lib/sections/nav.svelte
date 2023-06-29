<script lang="ts">
	import initiateDownload from '$lib/pixel/initiateDownload';

	export let active: 'devotionals' | 'blog' | 'about' | 'sermons' | 'pricing' | null = null;

	let showDropdown = false;
	const toggleDropdown = () => {
		showDropdown = !showDropdown;
	};
</script>

<nav class="pb-8 pt-8 desktop:pt-16 flex flex-col">
	<div class="flex justify-between items-center">
		<a href="/"><h2 class="text-2xl text-blue font-sans-bold">Faith Forward</h2></a>
		<div class="space-x-8 items-center hidden laptop:flex">
			<a href="/" class="text-grey font-sans-semi text-lg">About</a>
			<a href="/churches" class="text-grey font-sans-semi text-lg">For Churches</a>
			<a
				href="/pricing"
				class={`text-grey font-sans-semi text-lg ${active === 'pricing' && 'active'}`}>Pricing</a
			>
			<a
				href="/devotionals"
				class={`text-grey font-sans-semi text-lg ${active === 'devotionals' && 'active'}`}
			>
				Devotionals
			</a>
			<a
				href="/sermons"
				class={`text-grey font-sans-semi text-lg ${active === 'sermons' && 'active'}`}>Sermons</a
			>
			<a href="/blog" class={`text-grey font-sans-semi text-lg ${active === 'blog' && 'active'}`}
				>Blog</a
			>
			<a
				href="https://apps.apple.com/us/app/faith-forward/id1661516199"
				on:click={() => initiateDownload(`/${active || ''}`)}
			>
				<button class="bg-orange rounded-full py-1 px-4 text-white font-sans-semi text-lg"
					>Download</button
				>
			</a>
		</div>
		<button class="text-grey text-lg active:text-blue flex laptop:hidden" on:click={toggleDropdown}>
			<svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
				{#if !showDropdown}
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				{:else}
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				{/if}
			</svg>
		</button>
	</div>
	<div
		class={`tablet:hidden ${!showDropdown ? 'hidden' : 'flex'} flex-col items-end mt-2`}
		aria-label="Open Navigation Menu"
		aria-haspopup="menu"
	>
		<ul class="space-y-2 text-right">
			<li><a href="/" class="text-grey font-sans-semi">About</a></li>
			<li><a href="/devotionals" class="text-grey font-sans-semi">Devotionals</a></li>
			<li><a href="/sermons" class="text-gray font-sams-semi">Sermons</a></li>
			<li><a href="/blog" class="text-grey font-sans-semi">Blog</a></li>
			<li>
				<a
					href="https://apps.apple.com/us/app/faith-forward/id1661516199"
					on:click={() => initiateDownload(`/${active || ''}`)}
					class="text-orange font-sans-semi">Download</a
				>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		z-index: 1;
	}
	a.text-grey {
		position: relative;
		text-decoration: none;
	}

	a.text-grey::before {
		content: '';
		position: absolute;
		width: 0%;
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: #ff6745;
		transition: width 0.2s ease-in-out;
	}

	a.text-grey:hover::before {
		width: 100%;
	}
	a.text-grey.active::before {
		width: 100%;
	}
</style>
