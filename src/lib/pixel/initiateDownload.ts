const initiateDownload = async (path: string) => {
	try {
		await fetch('/api/pixel/download?path=' + path);
	} catch (err) {
		console.error(err);
	}
};

export default initiateDownload;
