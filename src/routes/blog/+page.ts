// import fetch from 'node-fetch';
import { apiBaseUrl } from '$lib/config/api_config';
import qs from 'qs';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const query = qs.stringify({
		sort: ['releaseDate:desc'],
		filters: {
			releaseDate: {
				$lte: new Date().toISOString().split('T')[0]
			},
			pinned: true
		},
		populate: 'cover'
	});
	try {
		const res = await fetch(`${apiBaseUrl}/api/articles?${query}`);
		const json = await res.json();
		return {
			posts: json
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
