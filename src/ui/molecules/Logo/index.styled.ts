import styled from 'styled-components';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Container: styled.div`
		width: auto;
		height: 32px;

		svg {
			width: 135px;
			height: 32px;
		}

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			width: auto
			height: 40px;
		}
	`,
};

export { Styled };
