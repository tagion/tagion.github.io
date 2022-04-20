import { S } from './index.styled';
import { P } from './index.model';

const ArticleImage: React.FunctionComponent<P> = ({ imageSrc }) => {
	return (
		<S.Container>
			<img src={imageSrc} />
		</S.Container>
	);
};

export { ArticleImage };
