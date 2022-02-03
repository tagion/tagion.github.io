import styled from 'styled-components';

import { DEEP_TURQUOISE, AQUA_ISLAND, BABY_BLUE } from 'lib/constants/colors';

const Styled: any = {
	Link: styled.a`
		text-decoration: none;
		cursor: pointer;
		color: ${(p: any) => (p.withIcon ? AQUA_ISLAND : DEEP_TURQUOISE)};

		transition: color 0.25s ease;

		svg {
			transition: color 0.2s ease;
		}

		:hover {
			color: ${(p: any) => (p.withIcon ? BABY_BLUE : AQUA_ISLAND)};

			svg {
				color: ${BABY_BLUE};
			}
		}
	`,
};

export { Styled };
