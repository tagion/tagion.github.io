import styled from 'styled-components';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	PageWrapper: styled.div.attrs(({ className = '', ...rest }): any => ({
		className: `d-flex flex-column container p-0 ${className}`,
		...rest,
	}))`
		min-height: 100vh;
		min-width: 375px;
	`,
	Main: styled.main.attrs(() => ({ id: 'main' }))<{ isFullHeight: boolean }>`
		${(p) => (p.isFullHeight ? 'display: flex;' : '')}
		flex: 1 0 auto;
		padding-top: 82px;

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			padding-top: 106px;
		}
	`,
};

export { Styled };
