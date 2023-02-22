import { PIXEL_API_VERSION, PIXEL_ID, PIXEL_TOKEN } from '$env/static/private';

type ContentTypes = 'page' | 'post' | 'devotional';

interface ClientData {
	client_ip_address: string;
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
				event_name: 'ViewContent',
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
	};
};

const logView = async (
	contentName: string,
	contentType: ContentTypes,
	url: string,
	clientData: ClientData
) => {
	const body = formatBody(contentName, contentType, url, clientData);
	console.log(JSON.stringify(body));
	console.log(
		`https://graph.facebook.com/${PIXEL_API_VERSION}/${PIXEL_ID}/events?access_token=${PIXEL_TOKEN}`
	);
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
};

export default logView;
