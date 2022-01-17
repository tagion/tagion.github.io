import { Header } from 'ui/organisms';

import { Styled } from './index.styled';

const DefaultPage = () => {
	return (
		<>
			<Header />
			<Styled.PageWrapper className='container-lg'>
				<h2>Default Page</h2>
			</Styled.PageWrapper>
		</>
	);
};

export { DefaultPage };
