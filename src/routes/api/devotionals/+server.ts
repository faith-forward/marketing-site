import { apiBaseUrl } from '$lib/config/api_config';
import { error } from '@sveltejs/kit';
import qs from 'qs';
import type { RequestHandler } from './$types';

// Function that formats the date to be used in the query
const formatDate = (month: number, year: number): string => {
	if (month > 12) return formatDate(month - 12, year + 1);
	let stringMonth = month.toString();
	if (stringMonth.length < 2) stringMonth = `0${stringMonth}`;
	return `${year}-${stringMonth}-01`;
};

const getSoonerDate = (endDate: string) => {
	const today = new Date();
	const end = new Date(endDate);
	return end < today ? end : today.toISOString().split('T')[0];
};

export const GET: RequestHandler = async ({ url }) => {
	try {
		const month = Number(url.searchParams.get('month') ?? new Date().getMonth());
		const year = Number(url.searchParams.get('year') ?? new Date().getFullYear());
		const query = qs.stringify({
			sort: ['releaseDate:desc'],
			filters: {
				// Only fetch devotionals that have been released in the current month
				releaseDate: {
					$gte: formatDate(month + 1, year),
					$lt: getSoonerDate(formatDate(month + 2, year))
				}
			}
		});

		const res = await fetch(`${apiBaseUrl}/api/devotionals?${query}`);
		const json = await res.json();
		return new Response(
			JSON.stringify({
				posts: json
			})
		);
	} catch (err) {
		console.error((err as Error).message);
		throw error(400, (err as Error).message);
	}
};
