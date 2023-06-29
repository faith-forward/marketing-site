import { onMount } from 'svelte';

export function fadeIn(node: HTMLElement) {
	let observer: IntersectionObserver;

	onMount(() => {
		node.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
		observer = new IntersectionObserver((entries) => {
			entries.forEach(async (entry) => {
				if (entry.isIntersecting) {
					console.log('entered');
					await new Promise((r) => setTimeout(r, 200));
					entry.target.classList.remove('opacity-0');
					entry.target.classList.add('slide-up', 'opacity-1');
					observer.unobserve(node);
				}
			});
		});

		observer.observe(node);

		return () => {
			observer.unobserve(node);
		};
	});

	return {
		update() {},
		destroy() {
			if (observer) {
				observer.unobserve(node);
			}
		}
	};
}
