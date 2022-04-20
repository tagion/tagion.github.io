import styled from 'styled-components';

const S = {
	Container: styled.div.attrs(() => ({ className: 'position-relative border-primary border mb-45' }))`
		height: 320px;
		overflow: hidden;

		img {
			position: absolute;
			max-width: 100%;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
			min-width: 100%;
		}
	`,
};

export { S };
