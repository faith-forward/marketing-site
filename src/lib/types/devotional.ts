import type { CMSResponse } from './cmsResponse';
import type { Tag } from './tag';

export type Devotional = {
	content: string;
	releaseDate: string;
	title: string;
	description: string;
	slug: string;
	quote: string;
	tags?: CMSResponse<Tag>;
	seoDescription: string;
	seoTitle: string;
	imageUrl: string;
};
