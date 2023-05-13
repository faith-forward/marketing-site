<script>
	import Nav from '$lib/sections/nav.svelte';
	import { faMedium, faTwitter, faReddit, faAppStore } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
</script>

<svelte:head>
	<title>Contact Us | Personalized Christian Inspiration with Faith Forward</title>
	<meta name="description" content="View our Contact information and reach out to us." />
</svelte:head>

<main class="flex flex-col bg-paper flex-1">
	<div class="px-4 tablet:px-16 desktop:px-32">
		<Nav />
	</div>
	<section
		class="flex laptop:space-x-8 mt-8 flex-col items-center px-4 tablet:px-16 desktop:px-32 flex-1"
	>
		<h1 class="mb-4 text-4xl text-boldGrey font-sans-bold">Contact Us</h1>
		<div
			class="flex flex-col space-y-6 leading-relaxed px-4 laptop:w-3/5 tablet:w-4/5 w-full font-sans"
		>
			<h2 class="text-xl font-sans-semi">
				We're here to listen, share, and support. Connect with us!
			</h2>
			<p>
				At Faith Forward, we believe that every voice matters. Your questions, feedback, and
				insights are invaluable to us. There are various ways you can reach out to us, either
				through email or our social media platforms.
			</p>
			<h2 class="text-xl font-sans-semi">📬 Email Us</h2>
			<p>
				For general inquiries, suggestions, concerns, or technical support please feel free to send
				us an email at <a href="mailto:hello@faithforward.app" class="text-blue"
					>hello@faithforward.app</a
				>. We strive to respond to all emails within 24 to 48 hours and to resolve all issues
				promptly.
			</p>
			<h2 class="text-xl font-sans-semi">🌐 Connect with us on Social Media</h2>
			<p>
				Social media is more than just a communication tool for us. It is a vibrant community where
				we share, discuss and engage with our members on a daily basis. Find us on your preferred
				platform and join the conversation!
			</p>
			<ul class="ml-4 space-y-4">
				<li>
					<div class="flex items-start">
						<a href="https://twitter.com/HiFaithForward" class="text-blue">
							<Fa icon={faTwitter} class="mt-1.5 mr-4" />
						</a>
						<div>
							<a href="https://twitter.com/HiFaithForward" class="text-blue font-sans-semi"
								>Twitter</a
							>: Get real-time updates and engage with us on important discussions. Our handle is
							@HiFaithForward
						</div>
					</div>
				</li>
				<li>
					<div class="flex items-start">
						<a href="https://medium.com/@faithforward" class="text-blue">
							<Fa icon={faMedium} class="mt-1.5 mr-4" />
						</a>
						<div>
							<a href="https://medium.com/@faithforward" class="text-blue font-sans-semi">Medium</a
							>: Explore our in-depth articles on faith, spirituality, and personal growth. Follow
							us at @FaithForward
						</div>
					</div>
				</li>
			</ul>
			<p>
				Remember, we are here to support you on your spiritual journey. So don't hesitate to reach
				out. We can't wait to hear from you!
			</p>
			<h2 class="text-xl font-sans-semi">🙏 Stay Blessed, Stay Connected</h2>
		</div>
	</section>
</main>

<style>
	h2 {
		margin-top: 54px !important;
	}
</style>
