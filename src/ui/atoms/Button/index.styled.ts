import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import ArrowIcon from 'lib/img/arrow.svg';

const Styled = {
	Button: styled(Button).attrs(({ className = '', theme = '', ...rest }) => ({
		className: `${className}`,
		theme,
		...rest,
	}))``,
	Icon: styled(ArrowIcon)`
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
	`,
};

export { Styled };
