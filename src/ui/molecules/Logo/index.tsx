import { Link } from 'ui/atoms';

import LogoIcon from 'lib/img/logo_text.svg';

import { Styled } from './index.styled';

const Logo = () => {
	return (
		<Link href='/'>
			<Styled.Container>
				<LogoIcon />
			</Styled.Container>
		</Link>
	);
};

export { Logo };
