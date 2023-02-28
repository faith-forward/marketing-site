type Sermon = {
	id: string;
	createdAt: string;
	description: string;
	duration: number;
	filename: string;
	title: string;
	script: string;
	speaker: string;
	isPlaying?: boolean;
};

export default Sermon;
