const defaults: Record<string, any> = {
	featured: false,
	pinned: false,
	isPortrait: false,
	color: '#ffffff'
};

export const populatePostDefaults = (post: Record<string, any>): Record<string, any> => {
	// standard fields
	for (const key in defaults) {
		if (!post[key]) {
			post[key] = defaults[key];
		}
	}

	if (!post.SEO) {
		post.SEO = {};
	}

	// SEO fields
	if (!post.SEO?.metaTitle) {
		post.SEO.metaTitle = `${post.title} | Blog | Faith Forward`;
	}
	if (!post.SEO?.metaDescription) {
		post.SEO.metaDescription = post.description.substring(0, 160) + '...';
	}

	return post;
};
