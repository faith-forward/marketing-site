<script lang="ts">
	import type { Post } from '$lib/types/blog';
	import formatDate from '$lib/util/formatDate';

	export let post: Post;
</script>

<a href={`/blog/${post.slug}`} aria-label={`Read "${post.title}"`}>
	<div
		class="flex flex-row rounded-lg card bg-white h-[220px] tablet:h-[200px] desktop:h-[180px] overflow-scroll"
	>
		<div
			class="rounded-l-lg hidden tablet:flex desktop:w-[180px] desktop:h-[180px] big-laptop:w-[200px] w-[180px] overflow-cut"
		>
			<img
				src={post.cover.data.attributes.formats.small.url}
				alt={post.cover.data.attributes.alternativeText}
				class="w-full"
			/>
		</div>
		<div class="py-4 px-8 flex flex-col justify-between flex-1">
			<div>
				<h2 class="font-sans-bold text-lg">{post.title}</h2>
				<p class="font-sans text-sm mt-1 text-grey">{post.description}</p>
			</div>
			<p class="justify-self-end text-grey italic font-sans text-sm">
				{formatDate(post.releaseDate)}
			</p>
		</div>
	</div>
</a>

<style>
	.card {
		box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
	}
	img {
		object-fit: cover;
	}
</style>
