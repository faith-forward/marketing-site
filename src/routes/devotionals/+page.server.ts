import { logPageView } from '$lib/pixel/log';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ getClientAddress, request }) => {
	try {
		const client_user_agent = request.headers.get('User-Agent') || '';
		const client_ip_address = getClientAddress().toString();
		logPageView('Devotionals', '/devotionals', {
			client_ip_address,
			client_user_agent
		});
		return {};
	} catch (err) {
		console.error(err);
		return err;
	}
};
