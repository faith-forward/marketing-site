const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const options = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC' // set the time zone to UTC
	};
	return date.toLocaleDateString('en-US', { ...(options as any) });
};

export default formatDate;
