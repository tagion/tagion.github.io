import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { SCREEN_SIZES } from 'lib/constants';
import { BG_COLOR } from 'lib/constants/colors';

const Styled = {
	Container: styled(Container).attrs(() => ({
		className: `position-fixed d-flex justify-content-between align-items-center container p-3 px-lg-5 py-lg-4 border border-primary`,
	}))`
		top: 0;
		left: 0;
		width: 100%;
		background: ${BG_COLOR};
		z-index: 10;

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			left: 50%;
			transform: translateX(-50%);
		}
	`,
	OffsetMenu: styled.div.attrs(({ isOpened = false }: { isOpened: boolean }) => ({
		className: `border-primary border-end border-start ${isOpened ? 'opened' : ''}`,
		isOpened,
	}))`
		position: fixed;
		top: 81px;
		left: 0;
		width: 100%;
		background: ${BG_COLOR};
		transition: 0.25s ease;
		transform: translateY(-100%);
		// opacity: 0;
		pointer-event: none;
		z-index: 2;

		&.opened {
			transform: translateY(0%);
			pointer-event: auto;
			// opacity: 1;
		}

		> nav {
			display: block !important;
			padding: 3rem 1.5rem;

			a {
				display: block;
				margin-left: 0 !important;
				font-size: 20px;
				font-weight: 700;
				line-height: 24px;
			}

			a:not(:last-child) {
				margin-bottom: 40px;
			}
		}
	`,
};

export { Styled };
