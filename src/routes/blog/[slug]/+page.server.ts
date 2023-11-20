// import fetch from 'node-fetch';
import { apiBaseUrl } from '$lib/config/api_config';
import { logView } from '$lib/pixel/log';
import { populatePostDefaults } from '$lib/util/populatePostDefaults';
import qs from 'qs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params, getClientAddress, request }) => {
	const { slug } = params;
	const client_user_agent = request.headers.get('User-Agent') || '';
	const client_ip_address = getClientAddress().toString();
	const query = qs.stringify({
		filters: {
			slug: {
				$eq: slug
			}
		},
		populate: {
			cover: '*',
			tags: '*',
			author: {
				populate: {
					avatar: '*'
				}
			},
			SEO: {
				populate: {
					SharedImage: {
						populate: '*'
					}
				}
			}
		}
	});
	console.log(`${apiBaseUrl}/api/articles?${query}`);
	try {
		const res = await fetch(`${apiBaseUrl}/api/articles?${query}`);
		const json = await res.json();
		if (!json.data || json.data.length === 0) return { error: 'Not found' };
		logView(json.data[0].attributes.title, 'post', `/blog/${slug}`, {
			client_ip_address,
			client_user_agent
		});
		return {
			post: populatePostDefaults(json.data[0].attributes)
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
