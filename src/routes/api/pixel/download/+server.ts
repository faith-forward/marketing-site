import { logDownload } from '$lib/pixel/log';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, request, getClientAddress }) => {
	try {
		const path = url.searchParams.get('path') ?? '';
		const client_user_agent = request.headers.get('User-Agent') || '';
		const client_ip_address = getClientAddress().toString();
		logDownload({ client_user_agent, client_ip_address }, path);
		return new Response();
	} catch (err) {
		console.error((err as Error).message);
		throw error(400, (err as Error).message);
	}
};
