<script lang="ts">
	import type { Author } from '$lib/types/blog';

	export let author: Author;
	export let textColor: string | null = null;

	let name: string = '';
	let bio: string = '';
	let avatar: string = '';

	$: if (author && author.data) {
		name = author.data.attributes.name;
		bio = author.data.attributes.bio;
		avatar = author.data.attributes.avatar.data.attributes.formats.thumbnail.url;
	}
</script>

<div class="flex flex-col laptop:flex-row items-center mt-8">
	<div class="w-14 h-14 rounded-full overflow-clip">
		<img src={avatar} alt={name} />
	</div>
	<div class="flex-1 flex flex-col ml-4 items-center laptop:items-start mt-2 laptop:mt-0">
		<p class={`text-sm font-sans-bold ${textColor ? `text-${textColor}` : 'text-text'}`}>{name}</p>
		<p
			class={`${
				textColor ? `text-${textColor} opacity-80` : 'text-grey'
			} text-xs font-sans w-4/5 laptop:w-3/5 mt-1 laptop:mt-0`}
		>
			{bio}
		</p>
	</div>
</div>
