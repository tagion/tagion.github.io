import { Container } from 'react-bootstrap';

import { Styled } from './index.styled';

const FeatureImage = ({ img }) => {
	return <Container className='d-flex justify-content-center p-0 h-100'>{img}</Container>;
};

export { FeatureImage };
