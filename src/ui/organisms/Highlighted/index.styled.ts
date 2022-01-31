import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Title: styled.h2`
		@media (max-width: ${SCREEN_SIZES.desktop}px) {
			font-size: 32px;
			line-height: 34px;
		}
	`,
	LeftCol: styled(Col).attrs(() => ({
		className: `border-primary border-end border-bottom border-start border-lg-bottom-0 border-lg-right-0 px-3 py-425 px-md-4 px-lg-5 py-lg-6`,
		lg: 4,
	}))``,
	RightCol: styled(Col).attrs(() => ({
		className: `border-primary border-start border-end px-3 py-425 px-md-4 px-lg-5 py-lg-6`,
		lg: 8,
	}))``,
};

export { Styled };
