// import fetch from 'node-fetch';
import { apiBaseUrl } from '$lib/config/api_config';
import { logView } from '$lib/pixel/log';
import type { CMSResponse } from '$lib/types/cmsResponse';
import type { Devotional } from '$lib/types/devotional';
import qs from 'qs';
import type { PageServerLoad } from './$types';

// fetch related posts
const getRelatedPosts = async (tags: string[], slug: string) => {
	const query = qs.stringify({
		filters: {
			releaseDate: {
				$lte: new Date().toISOString().split('T')[0]
			},
			tags: {
				tag: {
					$in: tags
				}
			},
			slug: {
				$ne: slug
			}
		},
		pagination: {
			page: 1,
			pageSize: 3
		},
		populate: '*'
	});
	// fetch related posts
	const res = await fetch(`${apiBaseUrl}/api/devotionals?${query}`);
	const json = await res.json();
	if (!json.data || json.data.length === 0) return [];
	return json;
};

// Fetch post on load
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
		populate: '*'
	});
	try {
		const res = await fetch(`${apiBaseUrl}/api/devotionals?${query}`);
		const json = await res.json();
		if (!json.data || json.data.length === 0) return { error: 'Not found' };

		// If the post is tagged, fetch related posts
		const tags = (json as CMSResponse<Devotional>).data[0].attributes.tags?.data.map(
			(tag) => tag.attributes.tag
		);
		let relatedPosts: CMSResponse<Devotional> | undefined;
		if (tags) {
			relatedPosts = await getRelatedPosts(tags, slug);
		}
		logView(json.data[0].attributes.title, 'devotional', `/devotionals/${slug}`, {
			client_ip_address,
			client_user_agent
		});
		return {
			post: json.data[0].attributes,
			relatedPosts
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
