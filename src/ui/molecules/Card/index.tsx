import { Styled } from './index.styled';

const Card = ({ children, theme = 'primary', ...rest }) => {
	return (
		<Styled.Card {...rest} theme={theme}>
			{children}
		</Styled.Card>
	);
};

export { Card };
