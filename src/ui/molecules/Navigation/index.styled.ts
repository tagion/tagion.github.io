import styled from 'styled-components';

const S = {
	Nav: styled.nav`
		display: flex;
		flex-direction: column;
		padding: 2rem 0;

		a {
			font-size: 1.25rem;
			line-height: 1.5rem;
			font-weight: bold;
			font-family: 'Space Grotesk', sans-serif;
			:not(:last-child) {
				margin-bottom: 1.5rem;
			}
		}
	`,
};

export { S };
