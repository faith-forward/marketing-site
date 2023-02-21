import { apiBaseUrl } from '$lib/config/api_config';
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
				pageSize: 8
			},
			populate: '*'
		});

		const res = await fetch(`${apiBaseUrl}/api/articles?${query}`);
		const json = await res.json();
		return new Response(
			JSON.stringify({
				posts: json
			})
		);
	} catch (err) {
		console.error((err as Error).message);
		throw error(400, (err as Error).message);
	}
};
