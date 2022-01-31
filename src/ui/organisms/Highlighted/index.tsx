import { Container, Row, Col } from 'react-bootstrap';

import { Styled } from './index.styled';
import { Props } from './index.model';

const Highlighted: React.FunctionComponent<Props> = ({ title, children, ...rest }) => {
	return (
		<Container className='border-primary border-bottom' {...rest}>
			<Row>
				<Styled.LeftCol>
					<Styled.Title>{title}</Styled.Title>
				</Styled.LeftCol>
				<Styled.RightCol>{children}</Styled.RightCol>
			</Row>
		</Container>
	);
};

export { Highlighted };
