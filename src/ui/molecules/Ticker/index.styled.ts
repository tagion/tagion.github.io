import styled from 'styled-components';

const Styled = {
	Line: styled.h2.attrs((props, ...rest) => ({ ...props, ...rest }))`
		font-size: 4.5rem;

		:nth-child(1) {
			span:nth-child(1),
			svg:nth-child(2) {
				opacity: 0.3;
			}
		}

		:nth-child(2) {
			span:nth-child(3),
			svg:nth-child(4) {
				opacity: 0.3;
			}
		}
	`,
};

export { Styled };
