<script lang="ts">
	import PricingCard from './pricing_card.svelte';

	type PricingPlan = {
		level: string;
		price: string;
		subtitle: string | null;
		features: { heading: string; subheading: string }[];
		planType: 'individual' | 'church' | 'enterprise';
	};

	const individualPlans: PricingPlan[] = [
		{
			level: 'Individual',
			price: 'Free',
			subtitle: 'Empower Your Faith Journey',
			features: [
				{ heading: 'Access Anytime, Anywhere', subheading: 'Unlimited use of our mobile app.' },
				{
					heading: 'Personalized Devotionals',
					subheading: 'On-demand, AI-powered content tailored to your spiritual needs.'
				},
				{
					heading: 'Daily Inspiration',
					subheading: 'New classic devotionals and audio sermons every day.'
				},
				{
					heading: 'The Bible, at Your Fingertips',
					subheading: 'Comprehensive Bible reader with powerful search capabilities.'
				},
				{ heading: 'Ask the Bible', subheading: 'Interactive, AI-assisted spiritual guidance.' },
				{ heading: 'Save and Share', subheading: 'Bookmark and share your favorite content.' },
				{
					heading: 'Church Connection',
					subheading: 'Seamlessly link with your church for exclusive content and updates.'
				}
			]
		}
	].map((plan) => ({ ...plan, planType: 'individual' }));

	const churchPlans: PricingPlan[] = [
		{
			level: 'Church: Basic',
			price: 'Free',
			subtitle: 'Engage Your Congregation Digitally',
			features: [
				{ heading: 'Access Anytime, Anywhere', subheading: 'Unlimited use of our mobile app.' },
				{
					heading: 'Personalized Devotionals',
					subheading: 'On-demand, AI-powered content tailored to your spiritual needs.'
				},
				{
					heading: 'Daily Inspiration',
					subheading: 'New classic devotionals and audio sermons every day.'
				},
				{
					heading: 'The Bible, at Your Fingertips',
					subheading: 'Comprehensive Bible reader with powerful search capabilities.'
				},
				{ heading: 'Ask the Bible', subheading: 'Interactive, AI-assisted spiritual guidance.' },
				{ heading: 'Save and Share', subheading: 'Bookmark and share your favorite content.' },
				{
					heading: 'Church Connection',
					subheading: 'Seamlessly link with your church for exclusive content and updates.'
				}
			]
		},
		{
			level: 'Church: Premium',
			price: '$20/month',
			subtitle: "Elevate Your Ministry's Impact",
			features: [
				{ heading: 'Access Anytime, Anywhere', subheading: 'Unlimited use of our mobile app.' },
				{
					heading: 'Personalized Devotionals',
					subheading: 'On-demand, AI-powered content tailored to your spiritual needs.'
				},
				{
					heading: 'Daily Inspiration',
					subheading: 'New classic devotionals and audio sermons every day.'
				},
				{
					heading: 'The Bible, at Your Fingertips',
					subheading: 'Comprehensive Bible reader with powerful search capabilities.'
				},
				{ heading: 'Ask the Bible', subheading: 'Interactive, AI-assisted spiritual guidance.' },
				{ heading: 'Save and Share', subheading: 'Bookmark and share your favorite content.' },
				{
					heading: 'Church Connection',
					subheading: 'Seamlessly link with your church for exclusive content and updates.'
				}
			]
		}
	].map((plan) => ({ ...plan, planType: 'church' }));

	const enterprisePlans: PricingPlan[] = [
		{
			level: 'Enterprise',
			price: 'Contact Us',
			subtitle: 'Scale Your Faith-Based Services',
			features: [
				{ heading: 'Access Anytime, Anywhere', subheading: 'Unlimited use of our mobile app.' },
				{
					heading: 'Personalized Devotionals',
					subheading: 'On-demand, AI-powered content tailored to your spiritual needs.'
				},
				{
					heading: 'Daily Inspiration',
					subheading: 'New classic devotionals and audio sermons every day.'
				},
				{
					heading: 'The Bible, at Your Fingertips',
					subheading: 'Comprehensive Bible reader with powerful search capabilities.'
				},
				{ heading: 'Ask the Bible', subheading: 'Interactive, AI-assisted spiritual guidance.' },
				{ heading: 'Save and Share', subheading: 'Bookmark and share your favorite content.' },
				{
					heading: 'Church Connection',
					subheading: 'Seamlessly link with your church for exclusive content and updates.'
				}
			]
		}
	].map((plan) => ({ ...plan, planType: 'enterprise' }));

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
