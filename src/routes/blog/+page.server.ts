// import fetch from 'node-fetch';
import { apiBaseUrl } from '$lib/config/api_config';
import logView from '$lib/pixel/logView';
import qs from 'qs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, getClientAddress }) => {
	try {
		const ip = getClientAddress();
		const query = qs.stringify({
			sort: ['releaseDate:desc'],
			filters: {
				releaseDate: {
					$lte: new Date().toISOString().split('T')[0]
				},
				pinned: true
			},
			populate: '*'
		});
		const res = await fetch(`${apiBaseUrl}/api/articles?${query}`);
		const json = await res.json();
		logView('Blog Archive', 'page', '/blog', {
			client_ip_address: ip.toString()
		});
		return {
			posts: json
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
