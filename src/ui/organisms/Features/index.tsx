import { Container, Row, Col } from 'react-bootstrap';

import { Styled } from './index.styled';
import { Props } from './index.model';

const ImageContainer = ({ children, className = '' }) => {
	return (
		<Styled.Col md={4} className={className}>
			{children}
		</Styled.Col>
	);
};

const Features: React.FunctionComponent<Props> = ({ imageIsRight = false, title = '', image, children, ...rest }) => {
	return (
		<Container className='border-primary border-bottom border-end border-start p-0' {...rest}>
			<Styled.Title>{title}</Styled.Title>
			<Row className='m-0'>
				{image && !imageIsRight && (
					<ImageContainer className='border-primary border-end'>{image}</ImageContainer>
				)}
				<Styled.TextContainer md={8}>
					<Container className='pb-425 py-lg-6 px-lg-5'>
						<Styled.DesktopTitle>{title}</Styled.DesktopTitle>
						{children}
					</Container>
				</Styled.TextContainer>
				{image && imageIsRight && (
					<ImageContainer className='border-primary border-start'>{image}</ImageContainer>
				)}
			</Row>
		</Container>
	);
};

export { Features };
