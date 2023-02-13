import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { SCREEN_SIZES } from 'lib/constants';

export interface ContentProps {
	$withPaddings?: boolean;
}

const S = {
	Title: styled.h2`
		margin: 0;

		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			font-size: 32px;
			line-height: 34px;
		}
	`,
	Sidebar: styled(Col).attrs(() => ({
		className: `border-primary border-end border-bottom border-lg-bottom-0 border-lg-right-0 p-0`,
		lg: 4,
	}))`
		.fixed {
			position: fixed;
			padding-right: 3.5rem;
			width: calc(33.33333333% - 1px);
			height: 100%;
			max-height: calc(100vh - 105px);
			overflow: auto;

			@media (max-width: ${SCREEN_SIZES.desktop - 1}px) {
				position: relative;
				width: auto;
			}
		}

		.sticky-sidebar {
			width: 100%;
		}

		nav {
			margin-top: 1rem;

			@media (max-width: ${SCREEN_SIZES.desktop - 1}px) {
				display: none;
			}
		}
	`,
	Content: styled(Col).attrs<ContentProps>(({ $withPaddings }) => ({
		className: `border-primary border-start ${
			$withPaddings ? 'px-3 py-425 px-md-4 px-lg-5 py-lg-6' : 'p-0'
		}`,
		lg: 8,
	}))<ContentProps>`
		height: 100%;
	`,
};

export { S };
