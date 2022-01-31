import { SwiperProps } from 'swiper/react';

export interface Props {
	children?: React.ReactElement[];
	className?: string;
	options?: SwiperProps;
	withPagination?: boolean;
	withNavigation?: boolean;
	withScrollbar?: boolean;
}
