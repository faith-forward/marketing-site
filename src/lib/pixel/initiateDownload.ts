const initiateDownload = (path: string) => {
	fetch('/api/pixel/download?path=' + path);
};

export default initiateDownload;
