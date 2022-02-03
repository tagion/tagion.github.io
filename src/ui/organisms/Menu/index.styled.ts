import styled from 'styled-components';

import { Link } from 'ui/atoms';

import { SCREEN_SIZES } from 'lib/constants';
import { DEEP_TURQUOISE } from 'lib/constants/colors';

const Styled = {
	Link: styled(Link).attrs((props) => ({ ...props, className: `` }))``,
	Nav: styled.nav.attrs(({ className = '' }) => ({ className: `align-items-center ${className}` }))`
		display: none;

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			display: flex;
		}

		a {
			color: ${DEEP_TURQUOISE};

			:not(:first-child) {
				margin-left: 40px;
			}
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
