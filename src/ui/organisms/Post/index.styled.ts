import styled from 'styled-components';
import { AQUA_ISLAND } from 'lib/constants/colors';

const S = {
	HeroContainer: styled.div.attrs(() => ({ className: `position-relative border-primary border-bottom` }))`
		min-height: 320px;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			width: auto;
			height: auto;
			max-width: 100%;
			max-height: 100%;
			min-height: 100%;
		}
	`,
	Content: styled.div.attrs(() => ({ className: 'content' }))`
		h1,
		h2,
		h3,
		h4,
		h5 {
			margin-bottom: 1.5rem;
		}

		a,
		strong {
			color: ${AQUA_ISLAND};
		}

		table {
			width: 100%;
		}

		img {
			max-width: 100%;
		}
	`,
};

export { S };
