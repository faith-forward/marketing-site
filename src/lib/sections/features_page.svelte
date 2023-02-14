<script lang="ts">
	import PhoneScreenshot from '$lib/components/phone_screenshot.svelte';

	type Screenshot = {
		src: string;
		alt: string;
	};
	const screenshots: Screenshot[] = [
		{
			src: '/images/screenshots/Faith Forward Demo.png',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Personalized Devotionals.png',
			alt: `A blob that says "Personalized Devotionals - Tell us what's on your mind. Devotionals made just for you.`
		},
		{
			src: '/images/screenshots/Find Your Way.png',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Dive Deeper.png',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Explore the Bible.png',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/Study Scripture.png',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		}
	];
</script>

<div class="h-100v flex flex-col items-center" id="features">
	<h2 class="mt-16 text-4xl font-sans-bold text-boldGrey text-center leading-snug">
		A full suite of features to help <br /> you connect with your faith
	</h2>
	<div class="slideshow w-full flex mx-32 space-x-8 mt-16 overflow-x-scroll mb-16 py-4">
		{#each screenshots as screenshot}
			<PhoneScreenshot src={screenshot.src} alt={screenshot.alt} />
		{/each}
	</div>
</div>
