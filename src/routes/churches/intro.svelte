<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import { lazyLoad } from '$lib/hooks/lazyLoad';
	import IntroAccordionItem from './intro_accordion_item.svelte';

	let currentActive: number = 0;

	const items = [
		{
			title: 'Boost Engagement',
			text: 'Discover the pulse of your congregation and create engaging content tailored to their interests.'
		},
		{
			title: 'Optimize Your Writing Process with AI',
			text: 'Our AI writing assistant will refine your writing process giving you the tools to focus on what matters most.'
		},
		{
			title: 'Streamline Your Content Delivery',
			text: 'Make publishing, managing, and organizing your content seamless and efficient with our intuitive content management system.'
		},
		{
			title: 'Enhance Charitable Giving',
			text: 'Make the donation process simple and seamless for your congregation with customizable giving links.'
		}
	];
</script>

<section class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32 items-center mt-16">
	<h2 class="mt-16 text-4xl font-sans-bold text-boldGrey text-center leading-snug" use:fadeIn>
		Discover Faith Forward for Churches
	</h2>
	<div class="my-16 tablet:w-[75vw] laptop:w-[50vw]">
		<img
			use:lazyLoad={'/images/for churches.svg'}
			use:fadeIn
			alt="A woman smiling about all of the features Faith Forward offers"
		/>
	</div>
	<div
		class="flex flex-col tablet:flex-row items-start desktop:px-64 big-laptop:px-32 laptop:px-16 tablet:px-8 mt-16 w-full tablet:space-x-24"
	>
		<div class="flex flex-col flex-1">
			<h3 class="text-center text-lg font-sans-semi text-boldGre">What we do</h3>
			<p class="text-grey font-sans mt-2">
				Unlock a new era of church management with Faith Forward, a revolutionary Church Management Software (ChMS) 
				that seamlessly merges technology and spirituality. Our platform empowers you to foster growth, 
				effortlessly connecting, organizing, and expanding your church community.<br /><br />
				Discover a comprehensive solution designed to meet your unique needs. Faith Forward integrates content management, 
				community engagement, personalized devotions, and insightful analytics into a unified digital hub. 
				Every interaction, devotional, and message becomes an opportunity to cultivate profound connections within your church.
			</p>
		</div>
		<div class="flex flex-col flex-1 mt-24 tablet:mt-0">
			<h3 class="text-center text-lg font-sans-semi text-boldGrey">How we can help</h3>
			<p class="text-grey font-sans mt-2">
				Faith Forward isn't just a tool; it's an engine for spiritual growth, engagement, and
				connection in your community. Here's how Faith Forward can be an indispensable asset to your
				church:
			</p>
			<ul class="mt-8 font-sans min-h-[400px]">
				{#each items as item, index (item.title)}
					<li>
						<IntroAccordionItem id={index} title={item.title} text={item.text} bind:currentActive />
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<!-- <p
		class="text-grey mt-4 leading-snug text-center text-lg font-sans-semi max-w-[60vw] leading-relaxed"
		use:fadeIn
	>
		Unlock innovative pathways to better involve your congregation with your unique teachings
	</p> -->
</section>
