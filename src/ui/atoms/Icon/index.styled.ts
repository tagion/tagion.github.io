import styled from 'styled-components';

import { DEEP_TURQUOISE } from 'lib/constants/colors';

const Styled = {
	Container: styled.div.attrs(({ className = '', ...rest }) => ({
		className: `icon position-relative border-primary  ${className}`,
		...rest,
	}))`
		width: 3.5rem;
		height: 3.5rem;
		border: 2px solid ${DEEP_TURQUOISE};
		background: linear-gradient(0deg, rgba(65, 163, 169, 0.2), rgba(65, 163, 169, 0.2)),
			linear-gradient(0deg, #111112, #111112);
		flex-shrink: 0;

		svg {
			width: 22px;
			height: 22px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
		}
	`,
};

export { Styled };
