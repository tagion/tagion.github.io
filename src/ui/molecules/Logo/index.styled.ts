import styled from 'styled-components';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Container: styled.div`
		width: auto;
		height: 32px;

		svg {
			width: 100%;
			height: 100%;
		}

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			height: 40px;
		}
	`,
};

export { Styled };
