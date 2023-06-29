<script lang="ts">
	import PricingCard from './pricing_card.svelte';

	type PricingPlan = {
		level: string;
		price: string;
		subtitle: string | null;
		features: string[];
	};

	const individualPlans: PricingPlan[] = [
		{
			level: 'Basic plan',
			price: 'Free',
			subtitle: null,
			features: [
				'Access to daily devotionals and sermons',
				'Comprehensive Bible reading, listening, and search capabilities',
				'Capability to save and share favorite verses, devotionals, and more',
				'Personalized devotionals curated just for you',
				'Unlimited access to personalized Bible study resources'
			]
		},
		{
			level: 'Premium plan',
			price: '$1/month',
			subtitle: 'Get everything in the Basic plan, plus...',
			features: [
				'Exclusive access to content from your church',
				"Personalized content reflecting your church's unique beliefs and teachings",
				'Inclusion of references to church content in personalized materials',
				"Advanced AI-powered search within your church's feed"
			]
		}
	];

	const churchPlans: PricingPlan[] = [
		{
			level: 'Basic Church Plan',
			price: 'Free',
			subtitle: null,
			features: [
				'Access to CMS for publishing and scheduling',
				'Basic analytics',
				'Limited usage of Writing Desk',
				"AI-powered search functionality within your church's content",
				'$1/month for premium member seats'
			]
		},
		{
			level: 'Premium Church Plan',
			price: '$20/month',
			subtitle: 'All the benefits of the Basic plan, plus...',
			features: [
				'Advanced analytics and insight reports',
				"Personalized content and devotionals reflecting your church's unique beliefs",
				'Priority customer support and consultation services',
				'Integration with external platforms for seamless content importing',
				'Access to premium features and updates as they are released',
				'Unlimited usage of the Writing Desk',
				'Access to AI-powered writing tools',
				'15 free premium member seats',
				'$0.50/month for premium member seats'
			]
		}
	];
</script>

<h2 class="text-2xl text-boldGrey font-sans-bold self-start">For Individuals</h2>
<p class="font-sans text-grey self-start">
	Explore scripture, strengthen your faith, and connect more deeply with your church. Choose the
	plan that best supports your spiritual journey.
</p>
<div class="flex flex-col tablet:flex-row tablet:space-x-8 w-full mt-8">
	{#each individualPlans as plan (plan.level)}
		<PricingCard {...plan} />
	{/each}
</div>

<h2 class="text-2xl text-boldGrey font-sans-bold self-start mt-32">For Churches</h2>
<p class="font-sans text-grey self-start">
	Enhance your administrative capabilities and elevate your congregation's engagement. Discover the
	plan that aligns with your church's mission and needs.
</p>
<div class="flex flex-col tablet:flex-row tablet:space-x-8 w-full mt-8">
	{#each churchPlans as plan (plan.level)}
		<PricingCard {...plan} />
	{/each}
</div>
