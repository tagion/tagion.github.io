import { v4 as uuid } from 'uuid';

import { Image } from 'ui/atoms';

import { Styled } from './index.styled';
import { Props } from './index.model';

const GlitchImage: React.FunctionComponent<Props> = ({ imageSrc, imgAlt = '', ...rest }) => {
	const renderGlitchItems = Array.from({ length: 5 }).map(() => (
		<Styled.GlitchItem key={uuid()} background={imageSrc} />
	));

	return (
		<Styled.Container {...rest}>
			<Image src={imageSrc} alt={imgAlt} />
			{renderGlitchItems}
		</Styled.Container>
	);
};

export { GlitchImage };
