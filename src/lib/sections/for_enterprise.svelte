<script lang="ts">
	import { fadeIn } from '$lib/hooks/fadeIn';
	import {
		faCogs,
		faNetworkWired,
		faScaleBalanced,
		faHeadset,
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
			name: 'Custom Solutions',
			description:
				'Tailor-made technology solutions that align seamlessly with your organization’s specific faith-based needs and goals.',
			icon: faCogs,
			gradientId: '#blue-to-green'
		},
		{
			name: 'Seamless Integration',
			description:
				'Integrate Faith Forward services smoothly with your existing systems, enhancing your technological ecosystem without disruption.',
			icon: faNetworkWired,
			gradientId: '#purple-to-blue'
		},
		{
			name: 'Scalable Technology',
			description:
				'Advanced, scalable solutions designed to grow with your organization, ensuring long-term sustainability and flexibility.',
			icon: faScaleBalanced,
			gradientId: '#yellow-to-orange'
		},
		{
			name: 'Dedicated Support',
			description:
				'Premium, round-the-clock support to ensure your organization receives the assistance it needs whenever it needs it.',
			icon: faHeadset,
			gradientId: '#blue-to-red'
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

<div
	class="max-w-[1800px] flex flex-col items-center px-4 bg-enterpriseBackground pt-16 pb-32"
	id="for_enterprise"
>
	<h1 class="text-4xl font-sans-condensed text-white text-center mt-16 leading-snug" use:fadeIn>
		For Enterprise
	</h1>
	<p class="text-grey mt-4 leading-snug text-center text-lg font-sans-semi text-white" use:fadeIn>
		Empower your organization with customizable, faith-centric technology solutions.
	</p>
	<div
		class="grid grid-cols-1 laptop:grid-cols-2 gap-32 desktop:px-64 laptop:px-16 tablet:px-8 font-sans mt-24"
	>
		{#each features as { name, description, icon, style, gradientId } (name)}
			<div class="flex flex-col items-center text-center" use:fadeIn>
				<Fa {icon} class="text-6xl mb-8" primaryColor={`url(${gradientId})`} {style} />
				<h3 class="font-semibold text-lg mb-1 text-white">{name}</h3>
				<p class="text-white text-left">{description}</p>
			</div>
		{/each}
	</div>
</div>
