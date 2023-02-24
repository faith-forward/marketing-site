import { apiBaseUrl } from '$lib/config/api_config';
import { error, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email } = await request.json();
		console.log(email);
		const res = await fetch(`http://localhost:1337/api/subscribers`, {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(res.status);
		const json = await res.text();
		console.log(json);
		// const json = await res.json();
		return new Response(JSON.stringify({ status: res.status }));
	} catch (err) {
		console.error((err as Error).message);
		throw error(400, (err as Error).message);
	}
};
