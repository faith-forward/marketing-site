import { PIXEL_API_VERSION, PIXEL_ID, PIXEL_TOKEN } from '$env/static/private';

type ContentTypes = 'post' | 'devotional' | 'page';

interface ClientData {
	client_ip_address?: string;
	client_user_agent?: string;
}

const formatBody = (
	contentName: string,
	contentType: ContentTypes,
	url: string,
	clientData: ClientData
) => {
	return {
		data: [
			{
				event_name: contentType === 'page' ? 'PageView' : 'ViewContent',
				event_time: Math.floor(Date.now() / 1000),
				action_source: 'website',
				event_source_url: `https://www.faithforward.app${url}`,
				user_data: clientData,
				custom_data: {
					content_name: contentName,
					content_type: contentType
				}
			}
		]
		// test_event_code: 'TEST85855'
	};
};

export const logView = async (
	contentName: string,
	contentType: ContentTypes,
	url: string,
	clientData: ClientData
) => {
	const body = formatBody(contentName, contentType, url, clientData);
	const response = await fetch(
		`https://graph.facebook.com/${PIXEL_API_VERSION}/${PIXEL_ID}/events?access_token=${PIXEL_TOKEN}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	);
	console.log(response.status);
	console.log(await response.json());
	console.log('logViewContent', contentName, url, clientData);
};

export const logPageView = async (contentName: string, url: string, clientData: ClientData) =>
	await logView(contentName, 'page', url, clientData);

export const logDownload = async (clientData: ClientData, url: string) => {
	const response = await fetch(
		`https://graph.facebook.com/${PIXEL_API_VERSION}/${PIXEL_ID}/events?access_token=${PIXEL_TOKEN}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				data: [
					{
						event_name: 'InitiateCheckout',
						event_time: Math.floor(Date.now() / 1000),
						action_source: 'website',
						event_source_url: `https://www.faithforward.app${url}`,
						user_data: clientData
					}
				]
				// test_event_code: 'TEST85855'
			})
		}
	);
	console.log(response.status);
	console.log(await response.json());
	console.log('logDownload', url, clientData);
};
