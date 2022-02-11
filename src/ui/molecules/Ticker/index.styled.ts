import styled from 'styled-components';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Line: styled.span.attrs((props, ...rest) => ({ ...props, ...rest }))`
		font-family: 'Space Grotesk', sans-serif;
		font-weight: bold;
		font-size: 2.5rem;
		line-height: 1;
		white-space: nowrap;

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			font-size: 4.5rem;
		}

		svg {
			width: 25px;
			height: 26px;

			@media (min-width: ${SCREEN_SIZES.tablet}px) {
				width: 34px;
				height: 36px;
			}

			@media (min-width: ${SCREEN_SIZES.desktop}px) {
				width: 52px;
				height: 55px;
			}
		}

		:nth-child(1) {
			span:nth-child(1),
			svg:nth-child(2) {
				opacity: 0.3;
			}
		}

		:nth-child(2) {
			span:nth-child(3),
			svg:nth-child(4) {
				opacity: 0.3;
			}
		}
	`,
};

export { Styled };
