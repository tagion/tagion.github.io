import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Styled = {
	FeatureCard: styled(Card).attrs(() => ({ className: `border border-primary p-45 overflow-hidden` }))`
		background: transparent;

		&:hover {
			background: rgba(162, 208, 210, 0.1);
		}
	`,
	Content: styled.p`
		flex: 1 0 auto;
	`,
};

export { Styled };
