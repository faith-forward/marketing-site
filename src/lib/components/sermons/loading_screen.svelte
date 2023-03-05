<!-- Loading.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	const MESSAGES = [
		'Waiting on the Holy Spirit...',
		"God's Word is worth the wait...",
		'In the beginning God created the heavens and the earth...',
		'Trust in the Lord with all your heart...',
		'Delight yourself in the Lord...',
		'The Lord is my shepherd, I shall not want...',
		'For I know the plans I have for you, declares the Lord...',
		'The Lord is good, a stronghold in the day of trouble...',
		'Cast your cares on the Lord and he will sustain you...',
		'He will not let your foot be moved...',
		'He who keeps you will not slumber...',
		'The Lord is your shade at your right hand...',
		'The Lord will keep you from all evil...',
		'The Lord will guard your going out and your coming in...',
		'The Lord will watch over your coming and going...',
		'The Lord will keep you from all harm...'
	];

	const getRandom = () => {
		console.log('test');
		return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
	};

	let random = '';

	onMount(() => {
		console.log('mounted');
		random = getRandom();
	});
</script>

{#if random}
	<div class="loading flex flex-col">
		<div class="spinner text-blue" />
		<div class="message mt-8 text-grey">{random}</div>
	</div>
{/if}

<style>
	/* Loading animation styles */
	.loading {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	.spinner {
		display: inline-block;
		width: 3rem;
		height: 3rem;
		vertical-align: text-bottom;
		border: 0.25em solid currentColor;
		border-right-color: transparent;
		border-radius: 50%;
		animation: spin 0.75s linear infinite;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	.message {
		margin-left: 0.5rem;
		font-style: italic;
	}
</style>
