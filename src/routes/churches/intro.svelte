<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import { lazyLoad } from '$lib/hooks/lazyLoad';
	import IntroAccordionItem from './intro_accordion_item.svelte';

	let currentActive: number = 0;

	const items = [
		{
			title: 'Boost Engagement',
			text: 'Understand your congregation on a deeper level and tailor your approach for increased participation with our advanced analytics.'
		},
		{
			title: 'Optimize Your Writing Process with AI',
			text: 'Use the potential of AI to refine your writing, making your sermons and devotionals more persuasive and meaningful with our state-of-the-art writing desk.'
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
				Faith Forward is a transformative Church Management Software (ChMS) armed with a suite of
				tools, integrations, and resources designed to elevate the way your church connects,
				manages, and grows. Seamlessly bridging technology and spirituality, Faith Forward empowers
				you to focus on what truly matters: your congregation. <br /><br />
				Our comprehensive platform is designed to serve your church's unique needs. It brings together
				content management, community engagement, personalized devotions, and insightful analytics under
				one unified digital roof. With Faith Forward, every interaction, every sermon, every message
				is an opportunity to foster deeper connections within your church community.
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
