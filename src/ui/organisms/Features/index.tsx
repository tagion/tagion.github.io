import { Container, Row, Col } from 'react-bootstrap';

import { FeatureImage } from 'ui/molecules';

import { Styled } from './index.styled';
import { Props } from './index.model';

const ImageContainer = ({ children, className = '' }) => {
	return (
		<Col md={4} className={`p-5 ${className}`}>
			{children}
		</Col>
	);
};

const Features: React.FunctionComponent<Props> = ({ imageIsRight = false, title = '', image, children, ...rest }) => {
	return (
		<Container className='border-primary border-bottom border-end border-start' {...rest}>
			<Row>
				{image && !imageIsRight && (
					<ImageContainer className='border-primary border-end'>
						<FeatureImage img={<>{image}</>} />
					</ImageContainer>
				)}
				<Col md={8}>
					<Container className='py-6 px-5'>
						<h2 className='mb-45'>{title}</h2>
						{children}
					</Container>
				</Col>
				{image && imageIsRight && (
					<ImageContainer className='border-primary border-start'>
						<FeatureImage img={image} />
					</ImageContainer>
				)}
			</Row>
		</Container>
	);
};

export { Features };
