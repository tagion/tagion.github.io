import { Styled } from './index.styled';
import { Props } from './index.model';

const Badge: React.FunctionComponent<Props> = ({ title = '', ...rest }) => {
	return <Styled.Badge {...rest}>{title}</Styled.Badge>;
};

export { Badge };
