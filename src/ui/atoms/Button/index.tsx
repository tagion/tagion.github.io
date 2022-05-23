import { Styled } from './index.styled';

const Button = ({ children, theme = 'primary', withIcon = false, ...rest }) => {
	return (
		<Styled.Button theme={theme} $withIcon={withIcon} {...rest}>
			{children}
			{withIcon && <Styled.Icon />}
		</Styled.Button>
	);
};

export { Button };
