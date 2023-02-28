// import fetch from 'node-fetch';
import { apiBaseUrl, firebaseUrl } from '$lib/config/api_config';
import { logPageView, logView } from '$lib/pixel/log';
import qs from 'qs';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ fetch, url, getClientAddress, request }) => {
	const sermonID = url.searchParams.get('sermonID');
	const client_user_agent = request.headers.get('User-Agent') || '';
	const client_ip_address = getClientAddress().toString();
	try {
		const res = await fetch(`${firebaseUrl}/getSermons?page=0`);
		const json = await res.json();
		logPageView('Sermons', '/sermons', {
			client_ip_address,
			client_user_agent
		});
		for (let sermon of json) {
			if (sermon.id && sermon.id === sermonID) {
				sermon.isPlaying = true;
			}
		}
		return {
			sermons: json
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
