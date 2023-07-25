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
			image: 'images/writing_desk/autogenerate.webp',
			description:
				"Let the advanced power of AI ignite your creativity, providing tailored suggestions to amplify your message. With our system streamlining your writing process, you'll find an intuitive partner in crafting inspiring sermons and devotionals."
		},
		{
			title: 'Intuitive Feedback & Revision',
			subtitle: 'Refine and Perfect with AI-Insights',
			description:
				'Receive immediate, insightful suggestions to enhance clarity, improve engagement, and perfect your writing style. The result? Faster, more efficient drafting and revisions, refining your spiritual messages to deeply resonate with your congregation.',
			image: 'images/writing_desk/feedback.webp'
		},
		{
			title: 'Image Library',
			subtitle: 'Visualize Your Message',
			image: 'images/writing_desk/images.webp',
			description:
				'Breathe life into your content with our expansive image library. Handpick from millions of high-quality images and find the perfect visual complement to amplify your message.'
		},
		{
			title: 'Publish with Precision',
			subtitle: 'Optimize Content Delivery for Your Congregation',
			description:
				"From crafting to scheduling to delivering, push meaningful content directly to your congregation's feeds with ease.",
			image: 'images/writing_desk/publishing.webp'
		}
	];

	let currentActive: number | null = 0;
	let currentImage: string = features[0].image;

	$: currentImage = features[currentActive || 0].image;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="mb-[-2px] mt-[-64px]" viewBox="0 0 1440 320"
	><path
		fill="#24313b"
		fill-opacity="1"
		d="M0,160L120,176C240,192,480,224,720,224C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
	/></svg
>
<section
	class="flex flex-col bg-churchBackground px-4 tablet:px-16 desktop:px-32 items-center flex-1 pt-4"
>
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
		fill="#24313b"
		fill-opacity="1"
		d="M0,96L80,85.3C160,75,320,53,480,42.7C640,32,800,32,960,53.3C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
	/>
</svg>
