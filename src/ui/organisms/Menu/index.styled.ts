import styled from 'styled-components';

import { Link } from 'ui/atoms';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Link: styled(Link).attrs((props) => ({ ...props, className: `` }))`
		:not(:first-child) {
			margin-left: 40px;
		}
	`,
	Nav: styled.nav.attrs(({ className = '' }) => ({ className: `align-items-center ${className}` }))`
		display: none;

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			display: flex;
		}
	`,
	SpecContainer: styled.div.attrs(() => ({ className: `border-primary border-top border-bottom px-3` }))`
		padding-top: 40px;
		padding-bottom: 40px;

		a {
			display: block;
		}
	`,
};

export { Styled };
