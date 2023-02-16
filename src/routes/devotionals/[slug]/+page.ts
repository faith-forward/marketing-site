// import fetch from 'node-fetch';
import { apiBaseUrl } from '$lib/config/api_config';
import type { CMSResponse } from '$lib/types/cmsResponse';
import type { Devotional } from '$lib/types/devotional';
import qs from 'qs';
import type { PageLoad } from './$types';
import type { Tag } from '$lib/types/tag';

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

		// If the post is tagged, fetch related posts
		const tags = (json as CMSResponse<Devotional>).data[0].attributes.tags?.data.map(
			(tag) => tag.attributes.tag
		);
		let relatedPosts: CMSResponse<Devotional> | undefined;
		if (tags) {
			relatedPosts = await getRelatedPosts(tags, slug);
		}

		return {
			post: json.data[0].attributes,
			relatedPosts
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
