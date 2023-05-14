<script lang="ts">
	import initiateDownload from '$lib/pixel/initiateDownload';
	import { lazyLoad } from '$lib/util/lazyLoad';
	import Nav from './homepage_nav.svelte';
</script>

<div class="flex flex-col w-full bg-blue min-h-[100vh] overflow-hidden relative">
	<Nav />
	<img
		src="/images/blob1.svg"
		alt="Cloud that encompasses the nav bar."
		id="blob1"
		class="hidden tablet:flex"
	/>
	<img
		use:lazyLoad={'/images/homepage.webp'}
		alt="Users experience a whole new world of Faith through a church inside of a phone."
		id="church"
		class="desktop:h-[960px] laptop:h-[700px] desktop:mr-[64px] big-laptop:h-[800px] hidden laptop:flex"
	/>

	<div
		class="flex w-full px-12 desktop:px-28 desktop:mt-16 laptop:mt-8 mt-16 flex-col flex-1 justify-between"
	>
		<div class="flex flex-col mt-24 laptop:mt-0">
			<div class="flex">
				<h1
					class="font-sans-condensed desktop:text-8xl laptop:text-7xl tablet:text-6xl text-5xl text-darkBlue z-10 tablet:px-4 laptop:w-3/5 tablet:w-4/5 text-center tablet:text-start"
				>
					TAP INTO
					<span class="text-white">DEEPER DEVOTION</span>
				</h1>
			</div>
			<p
				class="laptop:w-[45%] big-laptop:mt-4 big-laptop:text-lg text-base text-blue_white font-sans-semi z-10 py-4 rounded-lg px-4 text-center tablet:text-start"
			>
				<span class="bg-blue">
					Step into a richer spiritual journey with Faith Forward. Our app brings you closer to your
					faith than ever before, with personalized devotions, comprehensive Bible passages, and
					profound verse analysis tailored just for you.
				</span>
			</p>
		</div>
		<img
			use:lazyLoad={'/images/homepage.webp'}
			alt="Users experience a whole new world of Faith through a church inside of a phone."
			class="laptop:hidden w-[80%] self-center"
		/>
		<a
			href="https://apps.apple.com/us/app/faith-forward/id1661516199"
			on:click={() => initiateDownload('/')}
			class="self-center laptop:hidden"
			aria-label="Download the app"
		>
			<button class="py-4 px-8 bg-white text-red font-sans-bold mb-24 mt-4 rounded-full">
				Download the app
			</button>
		</a>
		<a
			href="https://apps.apple.com/us/app/faith-forward/id1661516199"
			on:click={() => initiateDownload('/')}
			class="w-48 mb-24"
			aria-label="Download the app"
		>
			<img
				use:lazyLoad={'/images/Faith Forward QR Code.webp'}
				alt="QR Code that will take you to the Faith Forward App on the iOS app store. Click to download."
				class="w-48 hidden laptop:flex"
			/>
		</a>
	</div>
</div>

<style>
	#blob1 {
		width: 50%;
		max-width: 1100px;
		min-width: 750px;
		/* place the blob in the top right corner and 
    translate so that the blob is centered on the right corner of the screen */
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(20%, -45%);
		z-index: 0;
	}

	#church {
		/* height: 100vh; */
		position: absolute;
		right: 64px;
		top: 55%;
		transform: translate(0, -50%);
		z-index: 0;
	}

	h1 {
		line-height: 1.2;
	}
</style>
