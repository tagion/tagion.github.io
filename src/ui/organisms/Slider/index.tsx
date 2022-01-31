import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { v4 as uuid } from 'uuid';

import { Styled } from './index.styled';
import { Props } from './index.model';

const Slider: React.FunctionComponent<Props> = ({
	className = '',
	children = [],
	options = {},
	withPagination = null,
	withNavigation = null,
	withScrollbar = null,
	...rest
}) => {
	const modules: any[] = []; // todo: SwiperModule type

	withPagination && modules.push(Pagination);
	withNavigation && modules.push(Navigation);
	withScrollbar && modules.push(Scrollbar);

	return (
		<Swiper className={className} modules={modules} {...options} {...rest}>
			{children.map((child) => (
				<SwiperSlide key={uuid()} className='h-auto'>
					{child}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export { Slider };
