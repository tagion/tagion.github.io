import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const Styled = {
	Carousel: styled(Carousel).attrs((props, ...rest) => ({ ...props, ...rest }))``,
	Slide: styled(Carousel.Item).attrs((props, ...rest) => ({ ...props, ...rest }))``,
};

export { Styled };
