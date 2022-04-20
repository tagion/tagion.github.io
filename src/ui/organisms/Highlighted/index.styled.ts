import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { SCREEN_SIZES } from 'lib/constants';
import { AQUA_ISLAND } from 'lib/constants/colors';

const S = {
	Title: styled.h2`
		margin: 0;

		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			font-size: 32px;
			line-height: 34px;
		}
	`,
	Sidebar: styled(Col).attrs(() => ({
		className: `border-primary border-end border-bottom border-start border-lg-bottom-0 border-lg-right-0 p-0`,
		lg: 4,
	}))`
		.fixed {
			position: fixed;
			padding-right: 3.5rem;
			width: 33.333333%;
		}

		nav {
			margin-top: 1rem;

			@media (max-width: ${SCREEN_SIZES.desktop}px) {
				display: none;
			}
		}
	`,
	Content: styled(Col).attrs(() => ({
		className: `border-primary border-start border-end px-3 py-425 px-md-4 px-lg-5 py-lg-6`,
		lg: 8,
	}))`
		height: 100%;

		h1,
		h2,
		h3,
		h4,
		h5 {
			margin-bottom: 1.5rem;
		}

		a,
		strong {
			color: ${AQUA_ISLAND};
		}
	`,
};

export { S };
