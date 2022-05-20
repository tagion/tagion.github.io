import styled from 'styled-components';
import { AQUA_ISLAND, DEEP_TURQUOISE, BG_COLOR } from 'lib/constants/colors';

const S = {
	HeroContainer: styled.div.attrs(() => ({ className: `position-relative border-primary border-bottom` }))`
		min-height: 320px;
		overflow: hidden;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			width: auto;
			height: auto;
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
			display: block;
			overflow: auto;
			width: 100%;
			max-width: 100%;
			margin-bottom: 1rem;

			th {
				background: ${DEEP_TURQUOISE};
				color: ${BG_COLOR};

				strong {
					color: ${BG_COLOR};
				}
			}

			tr {
				border-bottom: 1px solid ${DEEP_TURQUOISE};
				border-left: 1px solid ${DEEP_TURQUOISE};
				border-right: 1px solid ${DEEP_TURQUOISE};
			}

			td,
			th {
				padding: 0.75rem 1.5rem;
			}
		}

		img {
			max-width: 100%;
		}
	`,
};

export { S };
