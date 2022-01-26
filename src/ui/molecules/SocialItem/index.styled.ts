import styled from 'styled-components';

import { Card } from 'ui/molecules';
import { Badge, Link } from 'ui/atoms';

const Styled = {
	Card: styled(Card).attrs((props, ...rest) => ({
		...props,
		...rest,
		className: 'flex-row p-45 align-items-center',
	}))`
		background: transparent;
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
