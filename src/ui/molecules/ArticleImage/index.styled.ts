import styled from 'styled-components';

export interface ContainerProps {
	className?: string;
}

const S = {
	Container: styled.div.attrs<ContainerProps>(() => ({
		className: `article-image position-relative border-primary border`,
	}))<ContainerProps>`
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
