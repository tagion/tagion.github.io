import styled from 'styled-components';
import { Row } from 'react-bootstrap';

const Styled = {
	Title: styled.h2.attrs(({ className = '' }) => ({
		className: `text-center p-425 m-0 pt-lg-6 pb-lg-5 border-primary border-bottom border-lg-bottom-0 ${className}`,
	}))``,
};

export { Styled };
