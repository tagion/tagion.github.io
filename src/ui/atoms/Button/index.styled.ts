import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import ArrowIcon from 'lib/icons/arrow.svg';

const Styled = {
	Button: styled(Button).attrs(({ className = '', theme = '', ...rest }) => ({
		className: `${className}`,
		theme,
		...rest,
	}))`
		${(p) => (p.$withIcon ? 'padding-right: 3.5rem;' : '')}
	`,
	Icon: styled(ArrowIcon)`
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
	`,
};

export { Styled };
