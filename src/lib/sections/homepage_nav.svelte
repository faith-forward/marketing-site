<script lang="ts">
	import initiateDownload from '$lib/pixel/initiateDownload';
	export let churchVersion: boolean = false;

	let textColor: string = 'text-blue_white';

	let showDropdown = false;
	const toggleDropdown = () => {
		showDropdown = !showDropdown;
	};
</script>

<nav class="px-16 desktop:px-32 pb-16 pt-8 desktop:pt-16 justify-between hidden laptop:flex">
	<a href="/" class="hover:cursor-pointer"
		><h2 class={`text-2xl ${textColor} font-sans-bold`}>Faith Forward</h2></a
	>
	<div class={`flex space-x-8 items-center ${textColor}`}>
		<a href="/" class={`font-sans-semi text-lg link`}>
			About
		</a>
		<a href="/blog" class="font-sans-semi text-lg link">Blog</a>
		<a
			href="https://apps.apple.com/us/app/faith-forward/id1661516199"
			on:click={() => initiateDownload('/')}
		>
			<button
				class={`${
					churchVersion ? 'bg-blue text-white' : 'bg-white text-orange'
				} shadow-md rounded-full py-1 px-4 text-white font-sans-semi text-lg`}>Download</button
			>
		</a>
	</div>
</nav>

<nav class="px-4 pt-8 flex flex-col laptop:hidden items-baseline w-full">
	<div class="flex justify-between w-full">
		<a href="/" class="hover:cursor-pointer">
			<h2 class={`text-2xl ${textColor} font-sans-bold`}>Faith Forward</h2>
		</a>
		<button
			class="text-blue_white text-lg active:text-blue flex laptop:hidden"
			on:click={toggleDropdown}
		>
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
	<div class={`laptop:hidden ${!showDropdown ? 'hidden' : 'flex'} flex-col items-end mt-2 w-full`}>
		<ul class="space-y-2 text-right">
			<li><a href="/" class="text-white font-sans-semi">About</a></li>
			<li><a href="/blog" class="text-white font-sans-semi">Blog</a></li>
			<li>
				<a
					href="https://apps.apple.com/us/app/faith-forward/id1661516199"
					on:click={() => initiateDownload('/')}
					class="text-white font-sans-semi"
				>
					Download
				</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		z-index: 1;
	}
	a.link {
		position: relative;
		text-decoration: none;
	}

	a.link::before {
		content: '';
		position: absolute;
		width: 0%;
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: #e3f9ff;
		transition: width 0.2s ease-in-out;
	}

	a.link:hover::before {
		width: 100%;
	}

	a.link.active::before {
		width: 100%;
	}
</style>
