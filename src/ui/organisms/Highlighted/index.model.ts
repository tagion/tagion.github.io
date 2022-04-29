export interface P {
	children?: React.ReactNode;
	breadcrumbs?: string[];
	sidebarChildren?: React.ReactNode;
	isSidebarFixed?: boolean;
	title?: string;
	id?: string;
	backLink?: string;
	style?: React.CSSProperties;
	className?: string;
	contentWithPaddings?: boolean;
}
