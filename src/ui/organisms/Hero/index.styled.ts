import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { Link } from 'ui/atoms';

import { AQUA_ISLAND, DEEP_TURQUOISE } from 'lib/constants/colors';
import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Title: styled.h1`
		min-height: 82px;
		font-size: 2.5rem;
		line-height: 1;
		margin-bottom: 1.5rem;
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
			line-height: 1;
			min-height: 160px;
			margin-bottom: 2rem;
		}

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			font-size: 4rem;
			min-height: 128px;
		}

		@media (min-width: ${SCREEN_SIZES.desktopL}px) {
			font-size: 5rem;
			min-height: 160px;
		}
	`,
	Link: styled(Link)`
		@media (max-width: ${SCREEN_SIZES.tablet}px) {
			display: block;
			margin: 0 auto;
			width: 220px;

			:not(:last-child) {
				margin-bottom: 1rem;
			}
		}

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			display: block;

			:not(:last-child) {
				margin-bottom: 1rem;
			}
		}

		@media (min-width: ${SCREEN_SIZES.desktopL}px) {
			display: inline-block;
		}
	`,
	Scene: styled(Col).attrs(() => ({
		className: `position-relative border-primary border-end overflow-hidden px-6 py-5`,
	}))`
		display: none;
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

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			display: flex;
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
