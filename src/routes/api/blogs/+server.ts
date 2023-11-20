import { apiBaseUrl } from '$lib/config/api_config';
import type { Post } from '$lib/types/blog';
import type { CMSResponse } from '$lib/types/cmsResponse';
import { populatePostDefaults } from '$lib/util/populatePostDefaults';
import { error, type RequestHandler } from '@sveltejs/kit';
import qs from 'qs';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const page = Number(url.searchParams.get('page') ?? 1);
		const query = qs.stringify({
			sort: ['releaseDate:desc'],
			filters: {
				pinned: false
			},
			pagination: {
				page: page,
				pageSize: 10
			},
			populate: '*'
		});

		const res = await fetch(`${apiBaseUrl}/api/articles?${query}`);
		const json: CMSResponse<Post> = await res.json();
		if (!json.data) throw new Error('No data returned from CMS');
		const postsWithDefaults = [];
		for (const post of json.data) {
			const populatedPost = populatePostDefaults(post.attributes);
			postsWithDefaults.push(populatedPost);
		}
		return new Response(
			JSON.stringify({
				posts: postsWithDefaults
			})
		);
	} catch (err) {
		console.error((err as Error).message);
		throw error(400, (err as Error).message);
	}
};
