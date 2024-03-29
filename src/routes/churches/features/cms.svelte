<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import { lazyLoad } from '$lib/hooks/lazyLoad';

	type Feature = {
		title: string;
		description: string;
		imageUrl: string;
		tag: string;
	};
	let features: Feature[] = [
		{
			title: 'Seamless App Integration',
			description:
				"Publish directly to Faith Forward and let our advanced AI integrate your message into personalized content for your congregation.",
			imageUrl: 'images/content-publishing.svg',
			tag: 'Publishing'
		},
		{
			title: 'Effortlessly Manage Content',
			description:
				'Strategically plan and schedule your sermons, devotionals, and other content to reach your audience at the most impactful times. With our user-friendly CMS page, you can plan ahead and ensure a continuous flow of spiritually uplifting content for your congregation.',
			imageUrl: 'images/content-optimization.svg',
			tag: 'Scheduling'
		},
		{
			title: 'AI-Powered Content Discovery',
			description:
				'Relevant content, every search. Our AI understands the context and meaning of your search queries, delivering the most relevant content every time.',
			imageUrl: 'images/analytics-integration.svg',
			tag: 'Searching'
		},
		{
			title: 'YouTube Integration',
			description:
				"Connect your YouTube videos and let our smart AI transform them into impactful, personalized messages. It's not just about transcribing—it's about delivering your wisdom at the most resonant moments.",
			imageUrl: 'images/collaboration-tools.svg',
			tag: 'Importing'
		}
	];
</script>

<section
	class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32 items-center tablet:mt-[-32px] laptop:mt-[-64px]"
>
	<h2 class="text-4xl font-sans-bold text-boldGrey text-center leading-snug" use:fadeIn>
		Your New Hub for Church Content
	</h2>
	<p
		class="text-grey mt-4 leading-snug text-center text-lg font-sans-semi max-w-[60vw] leading-relaxed"
		use:fadeIn
	>
		Publish, track, and optimize your church's content with unprecedented ease and clarity.
	</p>
	<div class="desktop:px-64 big-laptop:px-32 laptop:px-16 tablet:px-8 tablet:mt-32 mt-8">
		<div
			class="flex flex-col-reverse tablet:flex-row laptop:space-x-24 tablet:space-x-12 mb-48"
			use:fadeIn
		>
			<div class="flex flex-1 flex-col space-y-32">
				{#each features as feature (feature.title)}
					<div class="flex flex-col flex-1">
						<div class="mb-4">
							<span
								class="bg-blue px-4 py-1 rounded-full text-white font-sans-semi uppercase text-xs tracking-wider"
								>{feature.tag}</span
							>
						</div>
						<h3 class="font-sans-semi text-lg mb-1 text-boldGrey">{feature.title}</h3>
						<p class="text-grey text-left leading-normal font-sans">{feature.description}</p>
					</div>
				{/each}
			</div>
			<div class="flex-1 flex justify-center sticky-image items-center">
				<img use:lazyLoad={'/images/user.svg'} alt={'test'} />
			</div>
		</div>
	</div>
</section>

<style>
	@media (min-width: 640px) {
		.sticky-image {
			position: sticky;
			top: 15vh;
			align-self: flex-start;
		}
	}
</style>
