import { firebaseUrl } from '$lib/config/api_config';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const page = Number(url.searchParams.get('page') ?? 1);
		const sermonID = url.searchParams.get('sermonID');
		const sermonIDQueryString = sermonID && page === 0 ? `&sermonID=${sermonID}` : ``;
		const res = await fetch(`${firebaseUrl}/getSermons?page=${page}${sermonIDQueryString}`);
		const json = await res.json();
		return new Response(
			JSON.stringify({
				sermons: json
			})
		);
	} catch (err) {
		console.error((err as Error).message);
		throw error(400, (err as Error).message);
	}
};
