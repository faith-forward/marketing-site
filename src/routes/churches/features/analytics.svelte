<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import {
		faBookBible,
		faChartLine,
		faHeartPulse,
		faUsersViewfinder,
		type IconDefinition
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	type Feature = {
		id: Number;
		icon: IconDefinition;
		title: string;
		description: string;
		gradientId: string;
	};

	let features: Feature[] = [
		{
			id: 1,
			icon: faUsersViewfinder,
			title: 'Congregation Insight',
			description:
				'Dive into the heart of your church community with real-time analytics. The Active User Count feature gives you an up-to-the-minute understanding of your congregational engagement. This data-driven approach helps to guide your efforts where they are needed most.',
			gradientId: '#blue-to-red'
		},
		{
			id: 2,
			icon: faChartLine,
			title: 'Content Engagement Analytics',
			gradientId: '#blue-to-green',
			description:
				'Discover which content resonates most with your congregation. Our Engagement Analytics feature highlights the sermons, videos, and devotionals that truly make an impact. Use these insights to curate a more meaningful spiritual experience.'
		},
		{
			id: 3,
			icon: faBookBible,
			title: 'Biblical Trends',
			gradientId: '#purple-to-blue',
			description:
				'With our Popular Bible Chapters feature, gain insights into the spiritual journey of your congregation. Understand which biblical chapters are most sought after and use this knowledge to tailor your sermons and study groups for maximum impact.'
		},
		{
			id: 4,
			icon: faHeartPulse,
			title: 'Pulse on Spirituality',
			gradientId: '#red-to-orange',
			description:
				'Get a sense of the spiritual pulse of your congregation. The Popular Topics feature reveals the themes and concerns that currently resonate with your community. Use this crucial insight to address their needs and provide relevant guidance.'
		}
	];
</script>

<!-- Purple to blue -->
<svg width="0" height="0">
	<linearGradient id="purple-to-blue" x1="100%" y1="100%" x2="0%" y2="0%">
		<stop stop-color="#c163ff" offset="0%" />
		<stop stop-color="#3d68f5" offset="100%" />
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
		<stop stop-color="#38ef7d" offset="0%" />
		<stop stop-color="#11998e" offset="100%" />
	</linearGradient>
</svg>

<!-- Green to Green -->
<svg width="0" height="0">
	<linearGradient id="red-to-orange" x1="100%" y1="100%" x2="0%" y2="0%">
		<stop stop-color="#ff9472" offset="0%" />
		<stop stop-color="#f2709c" offset="100%" />
	</linearGradient>
</svg>

<section class="flex flex-col bg-paper px-4 tablet:px-16 desktop:px-32 items-center">
	<h2 class="mt-16 text-4xl font-sans-bold text-boldGrey text-center leading-snug" use:fadeIn>
		Meaningful Insights With User Analytics
	</h2>
	<p
		class="text-grey mt-4 leading-snug text-center text-lg font-sans-semi max-w-[60vw] leading-relaxed"
		use:fadeIn
	>
		The key to a vibrant, engaged congregation is understanding their needs. Our user analytics
		offer unparalleled insight, helping you guide your community with precision.
	</p>
	<div
		class="grid grid-cols-1 tablet:grid-cols-2  gap-32 desktop:px-64 big-laptop:px-32 laptop:px-16 tablet:px-8 font-sans mt-24"
	>
		{#each features as feature (feature.id)}
			<div class="flex flex-col items-center text-center" use:fadeIn>
				<Fa icon={feature.icon} class="text-6xl mb-8" primaryColor={`url(${feature.gradientId})`} />
				<h3 class="font-sans-semi text-lg mb-1 text-boldGrey">{feature.title}</h3>
				<p class="text-grey text-left leading-normal">{feature.description}</p>
			</div>
		{/each}
	</div>
</section>
