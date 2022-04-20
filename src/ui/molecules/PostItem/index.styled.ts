import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const S = {
	Container: styled(Container).attrs(() => ({ className: `border-primary border p-45` }))``,
	Image: styled.div.attrs(() => ({ className: `position-relative border-primary border` }))`
		padding-bottom: 75.55%;

		img {
			position: absolute;
			max-width: 100%;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
		}
	`,
};

export { S };
