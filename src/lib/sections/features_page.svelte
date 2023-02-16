<script lang="ts">
	import PhoneScreenshot from '$lib/components/phone_screenshot.svelte';

	type Screenshot = {
		src: string;
		alt: string;
	};
	const screenshots: Screenshot[] = [
		{
			src: '/images/screenshots/Faith Forward Demo.webp',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Personalized Devotionals.webp',
			alt: `A blob that says "Personalized Devotionals - Tell us what's on your mind. Devotionals made just for you.`
		},
		{
			src: '/images/screenshots/Find Your Way.webp',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Dive Deeper.webp',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Explore the Bible.webp',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Study Scripture.webp',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		}
	];
</script>

<div class="h-100v min-h-[1000px] flex flex-col items-center px-4" id="features">
	<h2 class="mt-16 text-4xl font-sans-bold text-boldGrey text-center leading-snug">
		A full suite of features to help <br /> you connect with your faith
	</h2>
	<div
		class="slideshow w-full flex mx-32 space-x-8 mt-16 overflow-x-scroll overflow-y-clip mb-16 py-4 "
	>
		{#each screenshots as screenshot}
			<PhoneScreenshot src={screenshot.src} alt={screenshot.alt} />
		{/each}
	</div>
</div>
