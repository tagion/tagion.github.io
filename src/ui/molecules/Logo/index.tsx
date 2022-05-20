import { HOST } from 'lib/constants';

import { Link } from 'ui/atoms';

import LogoIcon from 'lib/icons/logo_text.svg';

import { Styled } from './index.styled';

const Logo = () => {
	return (
		<Link href={`https://${HOST}`}>
			<Styled.Container>
				<LogoIcon />
			</Styled.Container>
		</Link>
	);
};

export { Logo };
