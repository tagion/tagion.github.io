import styled from 'styled-components';

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
	Content: styled.div.attrs(() => ({ className: 'content' }))``,
};

export { S };
