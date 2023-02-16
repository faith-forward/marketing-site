<script lang="ts">
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
		use:lazyLoad={'/images/phone church.webp'}
		alt="Users experience a whole new world of Faith through a church inside of a phone."
		id="church"
		class="desktop:h-[960px] laptop:h-[600px] desktop:mr-[64px] big-laptop:h-[700px] hidden laptop:flex"
	/>

	<div
		class="flex w-full px-12 desktop:px-28 desktop:mt-16 laptop:mt-8 mt-16 flex-col flex-1 justify-between"
	>
		<div class="flex flex-col">
			<div class="flex">
				<h1
					class="font-sans-condensed desktop:text-8xl laptop:text-7xl tablet:text-6xl text-5xl text-white z-10 tablet:px-4 laptop:w-3/5 tablet:w-4/5 text-center tablet:text-start"
				>
					<span class="text-yellow">DEVOTIONALS</span> MADE JUST
					<span class="text-yellow">FOR YOU</span>
				</h1>
			</div>
			<p
				class="laptop:w-[45%] big-laptop:mt-4 big-laptop:text-lg text-base text-blue_white font-sans-semi z-10 py-4 rounded-lg px-4 text-center tablet:text-start"
			>
				<span class="bg-blue">
					Connect with your faith on a deeper level with Faith Forward. Personalized inspiration,
					full Bible passages, and in-depth verse analysis to help you on your journey of spiritual
					growth.
				</span>
			</p>
		</div>
		<img
			use:lazyLoad={'https://storage.googleapis.com/faith-forward-media/medium_phone_church_9b0639de61/medium_phone_church_9b0639de61.webp'}
			alt="Users experience a whole new world of Faith through a church inside of a phone."
			class="laptop:hidden"
		/>
		<a
			href="https://apps.apple.com/us/app/faith-forward/id1661516199"
			class="self-center laptop:hidden"
			aria-label="Download the app"
		>
			<button class="py-4 px-8 bg-white text-red font-sans-bold mb-24 mt-4 rounded-full">
				Download the app
			</button>
		</a>
		<a
			href="https://apps.apple.com/us/app/faith-forward/id1661516199"
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
		max-width: 1000px;
		min-width: 700px;
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
		right: 24px;
		top: 50%;
		transform: translate(0, -50%);
		z-index: 0;
	}

	h1 {
		line-height: 1.2;
	}
</style>
