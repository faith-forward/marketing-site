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
		logPageView('Sermons', '/sermons', {
			client_ip_address,
			client_user_agent
		});
		return {
			sermonID
		};
	} catch (err) {
		console.log(err);
		return { error: err };
	}
};
