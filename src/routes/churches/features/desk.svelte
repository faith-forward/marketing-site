<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import { fade } from 'svelte/transition';
	import AccordionItem from './accordion_item.svelte';

	type Feature = {
		title: string;
		description: string;
		subtitle: string;
		image: string;
	};
	const features: Feature[] = [
		{
			title: 'AI-Assisted Drafting',
			subtitle: 'Revolutionize Your Writing Process',
			image: 'images/writing_desk/autogenerate.png',
			description:
				'With the advanced power of ChatGPT at your disposal, let AI fuel your creativity. Write sermons and devotionals more effortlessly as our system suggests content, phrases, and ideas to enhance your first drafts. Step into the future of writing where artificial intelligence empowers your words.'
		},
		{
			title: 'Intuitive Feedback & Revision',
			subtitle: 'Refine and Perfect with AI-Insights',
			description:
				'Elevate your writing with our intelligent feedback system. Our AI-powered revision process provides real-time constructive feedback, suggesting improvements to make your content more compelling. It helps you iterate quickly and efficiently, refining your thoughts into powerful messages that resonate with your congregation.',
			image: 'images/writing_desk/feedback.png'
		},
		{
			title: 'Image Library',
			subtitle: 'Visualize Your Message with Impact',
			image: 'images/writing_desk/images.png',
			description:
				'Create engaging content by adding striking visuals from our vast image library. Our Image Selector allows you to search and choose from millions of high-quality photos that fit your message, making your content more captivating and impactful.'
		},
		{
			title: 'Publish with Precision',
			subtitle: 'Optimize Content Delivery for Your Congregation',
			description:
				"Take control of your content dissemination with our easy-to-use publishing tool. Configure essential details, schedule publish dates, and push your content directly to your congregation's feeds. With Faith Forward's Writing Desk, not only create but also manage and deliver your content effectively.",
			image: 'images/writing_desk/publishing.png'
		}
	];

	let currentActive: number | null = 0;
	let currentImage: string = features[0].image;

	$: currentImage = features[currentActive || 0].image;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="mb-[-2px] mt-[-64px]" viewBox="0 0 1440 320"
	><path
		fill="#8FC9BD"
		fill-opacity="1"
		d="M0,160L120,176C240,192,480,224,720,224C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
	/></svg
>
<section class="flex flex-col bg-green px-4 tablet:px-16 desktop:px-32 items-center flex-1 pt-4">
	<h2 class="text-4xl font-sans-bold text-white text-center leading-snug" use:fadeIn>
		Elevate Your Content Creation with AI
	</h2>
	<p
		class="text-greenWhite mt-4 leading-snug text-center text-lg font-sans-semi max-w-[60vw] leading-relaxed"
		use:fadeIn
	>
		Our Writing Desk uses advanced AI to power drafting, streamlined feedback and revisions, and
		efficient publishing for a transformative content creation experience.
	</p>
	<div
		class="flex laptop:space-x-16 desktop:space-x-32 mt-32 w-full big-laptop:px-32 laptop:px-16 tablet:px-8 bg-paper rounded-2xl shadow-lg mb-48 py-16"
		use:fadeIn
	>
		<!-- Desktop image -->
		<div
			class="h-[660px] w-full flex-[2] hidden laptop:flex items-center justify-center overflow-clip relative"
		>
			{#each features as feature, index (feature.title)}
				{#if currentActive === index}
					<img
						src={currentImage}
						alt={features[currentActive || 0].title}
						class="absolute"
						out:fade={{ duration: 200 }}
						in:fade={{ duration: 300 }}
					/>
				{/if}
			{/each}
		</div>
		<div class="flex-1">
			{#each features as feature, index (feature.title)}
				<AccordionItem
					title={feature.title}
					subtitle={feature.subtitle}
					description={feature.description}
					image={feature.image}
					bind:currentActive
					id={index}
				/>
			{/each}
		</div>
	</div>
</section>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
	<path
		fill="#8FC9BD"
		fill-opacity="1"
		d="M0,96L80,85.3C160,75,320,53,480,42.7C640,32,800,32,960,53.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
	/>
</svg>
