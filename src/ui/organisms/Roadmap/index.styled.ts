import styled from 'styled-components';

import { Card } from 'ui/molecules';

import { DASH_LINE_IMAGE, SCREEN_SIZES } from 'lib/constants';
import { DEEP_TURQUOISE } from 'lib/constants/colors';

const Styled = {
	Container: styled.div.attrs((props) => ({ className: `p-425 px-lg-5 position-relative`, ...props }))`
		.dash {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 1px;
			border: 1px solid;
			border-image: url(${DASH_LINE_IMAGE}) 1 / 1px;
			border-image-repeat: repeat;
			opacity: 0.2;

			@media (max-width: ${SCREEN_SIZES.desktop}px) {
				display: none;
			}
		}
	`,
	Title: styled.h2.attrs(() => ({ className: `text-center p-425 m-0 pt-lg-6 pb-lg-5 border-primary border-bottom border-lg-bottom-0` }))``,
	Card: styled(Card).attrs((props) => ({
		...props,
		className: `position-relative`,
	}))`
		:before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%) translateY(calc(100% + 1px));
			width: 1px;
			height: 1.5rem;
			background: ${DEEP_TURQUOISE};
			${({ variant }) => (variant === 'dashed' ? 'display: none;' : '')}

			@media (min-width: ${SCREEN_SIZES.desktop}px) {
				display: none;
			}
		}
	`,
};

export { Styled };
