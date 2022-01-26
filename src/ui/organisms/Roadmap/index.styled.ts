import styled from 'styled-components';

import { DASH_LINE_IMAGE } from 'lib/constants';

const Styled = {
	Container: styled.div.attrs((props) => ({ className: `py-4 position-relative`, ...props }))`
		.dash {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 1px;
			border: 1px solid;
			border-image: url(${DASH_LINE_IMAGE}) 1 / 1px;
			border-image-repeat: repeat;
			opacity: 0.2;
		}
	`,
};

export { Styled };
