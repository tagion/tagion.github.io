import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { SCREEN_SIZES } from 'lib/constants';
import { DEEP_TURQUOISE } from 'lib/constants/colors';

const S = {
	Container: styled(Container).attrs(() => ({ className: `position-relative border-primary border p-3 p-md-45` }))`
		@media (max-width: ${SCREEN_SIZES.tablet}px) {
			h4,
			svg {
				color: ${DEEP_TURQUOISE};
			}
		}
		.description {
			@media (max-width: ${SCREEN_SIZES.tablet}px) {
				display: none;
			}
		}

		svg {
			position: absolute;
			transform: rotate(180deg);
			bottom: 1.5rem;
			right: 1.5rem;

			@media (min-width: ${SCREEN_SIZES.tablet}px) {
				display: none;
			}
		}
	`,
	Image: styled.div.attrs(() => ({ className: `position-relative border-primary border` }))`
		padding-bottom: 75.55%;
		overflow: hidden;

		img {
			position: absolute;
			max-width: 100%;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
			max-height: 100%;
			max-width: none;
		}
	`,
};

export { S };
