<script lang="ts">
	import formatDate from '$lib/util/formatDate';

	export let cover: string;
	export let title: string;
	export let description: string;
	export let releaseDate: string;
	export let slug: string;
</script>

<li class="">
	<a href={`/blog/${slug}`}>
		<div class="flex flex-row rounded-lg card bg-white h-[220px] tablet:h-[160px]">
			<img src={cover} alt={title} class="rounded-l-lg hidden tablet:flex" />
			<div class="py-4 px-8 flex flex-col justify-between">
				<div>
					<h2 class="font-sans-bold text-lg">{title}</h2>
					<p class="font-sans text-sm mt-1 text-grey">{description}</p>
				</div>
				<p class="justify-self-end text-grey italic font-sans text-sm">
					{formatDate(releaseDate)}
				</p>
			</div>
		</div>
	</a>
</li>

<style>
	.card {
		box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
	}
	img {
		width: 160px;
		height: 160px;
		object-fit: cover;
	}
</style>
