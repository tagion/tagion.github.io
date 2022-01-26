import styled from 'styled-components';

import { DEEP_TURQUOISE } from 'lib/constants/colors';

const Styled = {
	Burger: styled.div.attrs(({ isOpened = false }: { isOpened: boolean }) => ({
		className: `position-relative d-lg-none ${isOpened ? 'opened' : ''}`,
		isOpened,
	}))`
		width: 18px;
		height: 14px;
		transition .5s ease;
		cursor: pointer;

		&.opened {
			span {
				:nth-child(1) {
					top: 6px;
					transform: rotate(135deg);
				}

				:nth-child(2) {
					opacity: 0;
					left: -30px;
				}

				:nth-child(3) {
					top: 6px;
					transform: rotate(-135deg);
				}
			}
		}

		span {
			position: absolute;
			display: block;
			width: 100%;
			height: 2px;
			background: ${DEEP_TURQUOISE};
			border-radius: 2px;
			opacity: 1;
			left: 0;
			transition .25s ease;

			:nth-child(1) {
				top: 0;
			}

			:nth-child(2) {
				top: 6px;
			}

			:nth-child(3) {
				top: 12px;
			}
		}
	`,
};

export { Styled };
