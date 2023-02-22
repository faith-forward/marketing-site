import { apiBaseUrl } from '$lib/config/api_config';
import { error, type RequestHandler } from '@sveltejs/kit';
import qs from 'qs';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const { contentName, contentType, url } = await request.json();
		const ip = getClientAddress();
		console.log(ip, contentName);
		// const json = await res.json();
		return new Response();
	} catch (err) {
		console.error((err as Error).message);
		throw error(400, (err as Error).message);
	}
};
