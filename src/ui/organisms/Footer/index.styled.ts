import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Link } from 'ui/atoms';

import { SCREEN_SIZES } from 'lib/constants';
import { BG_COLOR } from 'lib/constants/colors';

import LogoIcon from 'lib/icons/logo_icon.svg';

const Styled = {
	Copyright: styled.p.attrs(() => ({ className: `mb-0` }))`
		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 40px;
			text-align: center;
		}
	`,
	Container: styled(Container).attrs(({ className }) => ({
		className: `position-relative border border-primary px-3 pt-425 px-lg-55 py-lg-6`,
	}))`
		flex-shrink: 0;
		padding: 4.5rem 3.5rem;
		background: ${BG_COLOR};

		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			padding-bottom: 120px;
		}
	`,
	Logo: styled(LogoIcon).attrs(() => ({ className: `mb-4 mb-lg-2` }))`
		width: 30px;
		height: 30px;

		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			display: block;
			margin: 0 auto;
		}
	`,
	Link: styled(Link)`
		:before {
			@media (min-width: ${SCREEN_SIZES.desktop}px) {
				content: ' | ';
			}
		}
	`,
	Paragraph: styled.p`
		margin-bottom: 0;

		a:nth-child(1):after {
			@media (min-width: ${SCREEN_SIZES.desktop}px) {
				content: ' | ';
			}
		}
	`,
};

export { Styled };
