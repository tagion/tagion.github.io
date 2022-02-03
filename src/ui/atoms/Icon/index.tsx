import { Styled } from './index.styled';
import { Props } from './index.model';

const Icon: React.FunctionComponent<any> = ({ children, ...rest }) => {
	return <Styled.Container {...rest}>{children}</Styled.Container>;
};

export { Icon };
