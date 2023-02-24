// import fetch from 'node-fetch';
import { apiBaseUrl } from '$lib/config/api_config';
import { logPageView } from '$lib/pixel/log';
import qs from 'qs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, getClientAddress, request }) => {
	try {
		const client_user_agent = request.headers.get('User-Agent') || '';
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
		logPageView('Blog', '/blog', {
			client_ip_address: ip.toString(),
			client_user_agent
		});
		return {
			posts: json
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
