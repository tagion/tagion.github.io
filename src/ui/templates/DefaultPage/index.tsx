import { Header, Footer } from 'ui/organisms';

import { Styled } from './index.styled';

const DefaultPage: React.FunctionComponent = ({ children }) => {
	return (
		<Styled.PageWrapper>
			<Header />
			<Styled.Main>{children}</Styled.Main>
			<Footer />
		</Styled.PageWrapper>
	);
};

export { DefaultPage };
