<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import {
		faChartBar,
		faDollar,
		faEdit,
		faListUl,
		faUsers,
		type IconDefinition
	} from '@fortawesome/free-solid-svg-icons';

	import Fa from 'svelte-fa';

	let features: {
		name: string;
		description: string;
		icon: IconDefinition;
		gradientId: string;
		style?: string;
	}[] = [
		{
			name: 'Enhanced Analytics',
			description:
				'Understand your congregation better with in-depth user analytics. Gain insights on active users, the most-read Bible verses, and trending topics within your community.',
			icon: faChartBar,
			gradientId: '#blue-to-green',
			style: 'transform:scaleX(-1); rotate:90deg;'
		},
		{
			name: 'Content Manager',
			description:
				'Create, publish, and manage your sermons, devotionals, and more in one central location. Seamlessly integrate third-party sources, like YouTube, to bring a variety of content to your congregation.',
			icon: faListUl,
			gradientId: '#purple-to-blue'
		},
		{
			name: 'Writing Desk',
			description:
				'Our unique AI-powered tool designed to assist in your sermon and devotional creation process. Generate content on any topic and receive instant feedback to enhance your writing.',
			icon: faEdit,
			gradientId: '#yellow-to-orange'
		},
		{
			name: 'Boosted Engagement',
			description:
				"Deepen your congregation's engagement with personalized content referencing your church's teachings and beliefs.",
			icon: faUsers,
			gradientId: '#blue-to-red'
		},
		{
			name: 'Easy Giving',
			description:
				'Facilitate contributions to your church with a customizable "Give" link, creating a simple and straightforward donation process for your community.',
			icon: faDollar,
			gradientId: '#green-to-green'
		}
	];
</script>

<!-- Purple to blue -->
<svg width="0" height="0">
	<linearGradient id="purple-to-blue" x1="100%" y1="100%" x2="0%" y2="0%">
		<stop stop-color="#3d68f5" offset="0%" />
		<stop stop-color="#c163ff" offset="100%" />
	</linearGradient>
</svg>

<!-- Orange to Purple -->
<svg width="0" height="0">
	<linearGradient id="yellow-to-orange" x1="100%" y1="100%" x2="0%" y2="0%">
		<stop stop-color="#FF4E50" offset="0%" />
		<stop stop-color="#F9D423" offset="100%" />
	</linearGradient>
</svg>

<!-- Blue to Green -->
<svg width="0" height="0">
	<linearGradient id="blue-to-green" x1="100%" y1="100%" x2="0%" y2="0%">
		<stop stop-color="#35f0bb" offset="0%" />
		<stop stop-color="#20BDFF" offset="100%" />
	</linearGradient>
</svg>

<!-- Blue to Red -->
<svg width="0" height="0">
	<linearGradient id="blue-to-red" x1="100%" y1="100%" x2="0%" y2="0%">
		<stop stop-color="#74ebd5" offset="0%" />
		<stop stop-color="#ACB6E5" offset="100%" />
	</linearGradient>
</svg>

<!-- Green to Green -->
<svg width="0" height="0">
	<linearGradient id="green-to-green" x1="100%" y1="100%" x2="0%" y2="0%">
		<stop stop-color="#1D976C" offset="0%" />
		<stop stop-color="#93F9B9" offset="100%" />
	</linearGradient>
</svg>

<div class="min-h-[1000px] max-w-[1800px] flex flex-col items-center px-4" id="for_individuals">
	<h2 class="mt-16 text-4xl font-sans-bold text-boldGrey text-center leading-snug" use:fadeIn>
		Faith Forward for Churches
	</h2>
	<p class="text-grey mt-4 leading-snug text-center text-lg font-sans-semi" use:fadeIn>
		Powering engagement and connection
	</p>
	<div
		class="grid grid-cols-1 laptop:grid-cols-2 gap-32 desktop:px-64 laptop:px-16 tablet:px-8 font-sans mt-24"
	>
		{#each features as { name, description, icon, style, gradientId } (name)}
			<div class="flex flex-col items-center text-center" use:fadeIn>
				<Fa {icon} class="text-6xl mb-8" primaryColor={`url(${gradientId})`} {style} />
				<h3 class="font-semibold text-lg mb-1 text-boldGrey">{name}</h3>
				<p class="text-grey text-left">{description}</p>
			</div>
		{/each}
	</div>
</div>
