<script lang="ts">
	import PricingCard from './pricing_card.svelte';

	type PricingPlan = {
		level: string;
		price: string;
		subtitle: string | null;
		features: string[];
		planType: 'individual' | 'church' | 'enterprise';
	};

	const individualPlans: PricingPlan[] = [
		{
			planType: 'individual',
			level: 'Individual',
			price: 'Free',
			subtitle: 'Empower Your Faith Journey',
			features: [
				'Unrestricted access to all mobile app features anytime, anywhere.',
				'Personalized content tailored to your spiritual journey.',
				'Fresh new devotionals and audio sermons every day.',
				'Effortlessly search and study the Bible with advanced tools.',
				'AI-driven spiritual advice and insights on-demand.',
				'Easily bookmark and share content that resonates with you.',
				'Connect with your church and community.'
			]
		}
	];

	const churchPlans: PricingPlan[] = [
		{
			planType: 'church',
			level: 'Church: Basic',
			price: 'Free',
			subtitle: 'Engage Your Congregation Digitally',
			features: [
				"Tailor your church's digital presence.",
				'Easily write, schedule, and publish posts to engage your congregation.',
				"Quickly find what you're looking for with advanced search capabilities.",
				'Connect and share relevant content with your church community.'
			]
		},
		{
			planType: 'church',
			level: 'Church: Premium',
			price: '$20/month',
			subtitle: "Elevate Your Ministry's Impact",
			features: [
				'Ensure all church content reflects your style, values, and beliefs.',
				'Utilize AI tools for draft generation and creative writing support.',
				'Analyze and boost content engagement.',
				'Powerful YouTube integration to get more out of your existing library.',
				'Get fast, specialized assistance whenever you need it.'
			]
		}
	];

	const enterprisePlans: PricingPlan[] = [
		{
			planType: 'enterprise',
			level: 'Enterprise',
			price: 'Contact Us',
			subtitle: 'Scale Your Faith-Based Services',
			features: [
				'Top-tier, personalized assistance for anything your organization needs.',
				'Seamlessly blend Faith Forward features with your current system.',
				'Leverage cutting-edge technology for stronger spiritual engagement.',
				'Offer Faith Forward services under your own brand identity.'
			]
		}
	];

	const allPlans = [...individualPlans, ...churchPlans, ...enterprisePlans];
</script>

<div class="flex flex-row flex-wrap tablet:space-x-8 w-[80%] mx-auto mt-8">
	{#each allPlans as plan (plan.level)}
		<PricingCard {...plan} />
	{/each}
</div>

<!-- <h2 class="text-2xl text-boldGrey font-sans-bold self-start mt-16">For Individuals</h2> -->
<!-- <p class="font-sans text-grey self-start"> -->
<!-- 	Explore scripture, strengthen your faith, and connect more deeply with your church. Choose the -->
<!-- 	plan that best supports your spiritual journey. -->
<!-- </p> -->
<!-- <div class="flex flex-col tablet:flex-row tablet:space-x-8 w-full mt-8"> -->
<!-- 	{#each individualPlans as plan (plan.level)} -->
<!-- 		<PricingCard {...plan} planType="individual" /> -->
<!-- 	{/each} -->
<!-- </div> -->
<!---->
<!-- <h2 class="text-2xl text-boldGrey font-sans-bold self-start mt-16">For Churches</h2> -->
<!-- <p class="font-sans text-grey self-start"> -->
<!-- 	Enhance your administrative capabilities and elevate your congregation's engagement. Discover the -->
<!-- 	plan that aligns with your church's mission and needs. -->
<!-- </p> -->
<!-- <div class="flex flex-col tablet:flex-row tablet:space-x-8 w-full mt-8"> -->
<!-- 	{#each churchPlans as plan (plan.level)} -->
<!-- 		<PricingCard {...plan} planType="church" /> -->
<!-- 	{/each} -->
<!-- </div> -->
<!---->
<!-- <h2 class="text-2xl text-boldGrey font-sans-bold self-start mt-16">For Enterprise</h2> -->
<!-- <p class="font-sans text-grey self-start"> -->
<!-- 	We offer custom integration services for organizations looking to leverage our AI-powered platform -->
<!-- 	to enhance their own products and services. -->
<!-- </p> -->
<!-- <div class="flex flex-col tablet:flex-row tablet:space-x-8 w-full mt-8"> -->
<!-- 	{#each enterprisePlans as plan (plan.level)} -->
<!-- 		<PricingCard {...plan} planType="enterprise" /> -->
<!-- 	{/each} -->
<!-- </div> -->
