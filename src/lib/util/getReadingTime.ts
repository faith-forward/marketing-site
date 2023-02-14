const getReadingTime = (text: string): string => {
	const wordsPerMinute = 200;
	const words = text.split(' ').length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return `${minutes} minute read`;
};

export default getReadingTime;
