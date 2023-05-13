<script>
	import { lazyLoad } from '$lib/util/lazyLoad';
	import { faEnvelope, faFileAlt, faLock } from '@fortawesome/free-solid-svg-icons';
	import { faMedium, faTwitter, faReddit, faAppStore } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
</script>

<footer class="h-[500px] tablet:mt-32 mt-56 relative">
	<svg viewBox="0 -20 700 110" width="100%" height="300" preserveAspectRatio="none">
		<path
			transform="translate(0, -20)"
			d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
			fill="#96CFF2"
		/>
		<path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#39ABEB" />
	</svg>
	<div
		class="min-h-[300px] absolute w-full bottom-[0px] flex flex-col tablet:flex-row items-center py-12 desktop:px-32 tablet:px-16 px-4 bg-blue font-sans-semi text-blue_white "
	>
		<div class="flex flex-col flex-1 items-start justify-center w-4/5">
			<div class="flex flex-col">
				<div class="flex laptop:space-x-4 space-x-8 mb-4">
					<a href="https://twitter.com/HiFaithForward" aria-label="Twitter Link" class="icon-link">
						<Fa icon={faTwitter} />
					</a>
					<a
						href="https://apps.apple.com/us/app/faith-forward/id1661516199"
						aria-label="App Store Link"
						class="icon-link"
					>
						<Fa icon={faAppStore} />
					</a>
					<a href="https://medium.com/@faithforward" aria-label="Medium Link" class="icon-link">
						<Fa icon={faMedium} />
					</a>
					<a
						href="https://www.reddit.com/r/faithforward/"
						aria-label="Reddit Link"
						class="icon-link"
					>
						<Fa icon={faReddit} />
					</a>
				</div>
				<h3 class="text-3xl font-sans-bold text-white">Faith Forward</h3>
				<p class="text text-lg font-sans-semi italic mb-4">
					A more personal connection with your faith is just a tap away.
				</p>
				<div class="flex space-x-2 items-center">
					<Fa icon={faEnvelope} /><a href="/contact" class="link">Contact Us</a>
				</div>
				<div class="flex space-x-2 items-center my-2">
					<Fa icon={faLock} /><a href="/privacy" class="link">Privacy Policy</a>
				</div>
				<div class="flex space-x-2 items-center">
					<Fa icon={faFileAlt} /><a href="/terms-of-service" class="link">Terms of Service</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col mt-16 tablet:mt-0 flex-1 items-end">
			<a href="https://apps.apple.com/us/app/faith-forward/id1661516199">
				<img
					use:lazyLoad={'/images/Faith Forward QR Code.webp'}
					alt="QR Code that will take you to the Faith Forward App on the iOS app store. Click to download."
					width={200}
					height={259}
				/>
			</a>
		</div>
	</div>
</footer>

<style>
	a.link {
		position: relative;
		text-decoration: none;
		transition: color 0.2s ease;
		background: linear-gradient(#fffcb2, #fffcb2);
		background-size: 100% 0%;
		background-position: 0% 100%;
		transition: background-size 0.2s ease-out, color 0.3s ease-out;
		background-repeat: no-repeat;
		padding: 0px 4px;
	}

	a.link:hover {
		color: #000;
		background-size: 100% 100%;
	}

	a.icon-link {
		transition: color 0.2s;
	}

	a.icon-link:hover {
		color: #fffcb2;
	}
</style>
