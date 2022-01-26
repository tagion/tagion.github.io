import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { AQUA_ISLAND, DEEP_TURQUOISE } from 'lib/constants/colors';
import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Title: styled.h1`
		min-height: 102px;
		font-size: 3rem;
		line-height: 1;
		margin-bottom: 2rem;
		color: ${AQUA_ISLAND};
		text-shadow: 1px 1px 0 ${DEEP_TURQUOISE}, 2px 2px 0 ${DEEP_TURQUOISE}, 3px 3px 0 ${DEEP_TURQUOISE},
			4px 4px 0 ${DEEP_TURQUOISE}, 5px 5px 0 ${DEEP_TURQUOISE}, 6px 6px 0 ${DEEP_TURQUOISE},
			7px 7px 0 ${DEEP_TURQUOISE}, 8px 8px 0 ${DEEP_TURQUOISE}, 9px 9px 0 ${DEEP_TURQUOISE},
			10px 10px 0 ${DEEP_TURQUOISE};

		span {
			display: block;
		}

		@media (min-width: ${SCREEN_SIZES.tablet}px) {
			font-size: 5rem;
			line-height: 4.5rem;
			min-height: 144px;
		}
	`,
	Scene: styled(Col).attrs(() => ({
		className: `d-flex position-relative border-primary border-end overflow-hidden px-6 py-5`,
	}))`
		perspective: 700px;

		:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(rgba(17, 17, 18, 1), rgba(17, 17, 18, 0));
		}
	`,
	Background: styled.div.attrs(() => ({ className: `border-primary border-end border-bottom border-top` }))`
		position: absolute;
		bottom: -10px;
		left: 0;
		right: 0;
		transform: rotateX(45deg);
		perspective-origin: center bottom;
		height: 100%;
		background-image: repeating-linear-gradient(${DEEP_TURQUOISE} 0 1px, transparent 1px 100%),
			repeating-linear-gradient(90deg, ${DEEP_TURQUOISE} 0 1px, transparent 1px 100%);
		background-size: 71px 71px;
		z-index: -1;
	`,
};

export { Styled };
