import { useRouter } from 'next/router';

import { Header, Footer } from 'ui/organisms';

import { Styled } from './index.styled';

const DefaultPage: React.FunctionComponent = ({ children }) => {
	const router = useRouter();

	return (
		<Styled.PageWrapper>
			<Header />
			<Styled.Main isFullHeight={router.pathname !== '/'}>{children}</Styled.Main>
			<Footer />
		</Styled.PageWrapper>
	);
};

export { DefaultPage };
