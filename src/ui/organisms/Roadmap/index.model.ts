export interface Milestone {
	title: string;
	isComing?: boolean;
	description?: string;
	date: string;
}

export interface Props {
	title: string;
	id?: string;
	items: Array<Milestone>;
}
