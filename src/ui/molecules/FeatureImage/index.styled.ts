import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { SCREEN_SIZES } from 'lib/constants';

const Styled = {
	Container: styled(Container).attrs(() => ({ className: `d-flex justify-content-center p-0 h-100` }))`
		svg {
			@media (max-width: ${SCREEN_SIZES.desktop}px) {
				max-height: 200px;
			}
		}
	`,
};

export { Styled };
