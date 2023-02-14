export type CMSResponse<T> = {
	data: {
		id: string;
		attributes: T;
	}[];
	meta: {
		pagination: {
			page: number;
			pageCount: number;
			pageSize: number;
			total: number;
		};
	};
};
