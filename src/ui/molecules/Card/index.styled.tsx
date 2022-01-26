import styled from 'styled-components';
import { Card } from 'react-bootstrap';

import { DASHED_BORDER_IMAGE } from 'lib/constants';

const Styled = {
	Card: styled(Card).attrs((props, ...rest) => ({
		...rest,
		...props,
		className: `p-3 border-primary`,
	}))`
		${(p) =>
			p.variant === 'dashed'
				? `border-image: url(${DASHED_BORDER_IMAGE}) 3 / 1px round; background: rgba(162, 208, 210, 0.1);
		`
				: ''};
	`,
};

export { Styled };
