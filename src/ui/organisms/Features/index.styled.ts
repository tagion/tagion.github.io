import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Title: styled.h2.attrs(() => ({ className: `text-center p-425 m-0 border-primary border-bottom` }))`
		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			display: none;
		}
	`,

	DesktopTitle: styled.h2.attrs(() => ({ className: 'mb-45' }))`
		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			display: none;
		}
	`,
	Col: styled(Col).attrs(({ className = '', ...rest }) => ({ className: `p-425 p-lg-5`, ...rest }))`
		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			border: 0 !important;
			order: 0;
		}
	`,
	TextContainer: styled(Col).attrs(({ ...rest }) => ({ className: ``, ...rest }))`
		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			order: 1;
		}
	`,
};

export { Styled };
