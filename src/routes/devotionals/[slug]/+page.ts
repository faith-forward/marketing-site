// import fetch from 'node-fetch';
import { apiBaseUrl } from '$lib/config/api_config';
import qs from 'qs';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const { slug } = params;
	const query = qs.stringify({
		filters: {
			slug: {
				$eq: slug
			}
		},
		populate: '*'
	});
	try {
		const res = await fetch(`${apiBaseUrl}/api/devotionals?${query}`);
		const json = await res.json();
		if (!json.data || json.data.length === 0) return { error: 'Not found' };
		return {
			post: json.data[0].attributes
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
