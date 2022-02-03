import styled from 'styled-components';

import { SCREEN_SIZES } from 'lib/constants';

import { Card } from 'ui/molecules';
import { Badge, Link } from 'ui/atoms';

const Styled = {
	Card: styled(Card).attrs((props, ...rest) => ({
		...props,
		...rest,
		className: 'flex-row p-3 p-lg-45 align-items-center',
	}))`
		background: transparent;
		height: 105px;

		@media (min-width: ${SCREEN_SIZES.desktop}px) {
			height: 155px;
		}
	`,
	Link: styled(Link)`
		&:hover {
			.card {
				background: rgba(162, 208, 210, 0.1);
			}
		}
	`,
	Badge: styled(Badge)`
		position: absolute;
		top: -1px;
		right: -1px;
	`,
	TextContainer: styled.div`
		float: right;
	`,
};

export { Styled };
