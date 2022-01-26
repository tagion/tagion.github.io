import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styled = {
	Copyright: styled.p``,
	Container: styled(Container).attrs(({ className }) => ({ className: `border border-primary` }))`
		flex-shrink: 0;
		padding: 4.5rem 3.5rem;
	`,
};

export { Styled };
