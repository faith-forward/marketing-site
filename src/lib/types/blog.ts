export type Image = {
	url: string;
	width?: number;
	height?: number;
	alternativeText: string;
};

export type Post = {
	title: string;
	description: string;
	content: string;
	releaseDate: string;
	slug: string;
	featured: boolean;
	pinned: boolean;
	isPortrait?: boolean;
	color: string;
	tags: {
		data: {
			id: string;
			attributes: {
				tag: string;
			};
		}[];
	};
	cover: {
		data: {
			attributes: {
				alternativeText: string;
				formats: {
					small: Image;
					large: Image;
					medium: Image;
				};
			};
		};
	};
	SEO: {
		keywords: string;
		metaDescription: string;
		metaTitle: string;
		SharedImage: {
			id: number;
			alt: string;
			media: {
				data: {
					attributes: {
						formats: {
							large: Image;
						};
					};
				};
			};
		};
	};
};
