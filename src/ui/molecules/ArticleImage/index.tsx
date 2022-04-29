import { S } from './index.styled';
import { P } from './index.model';

const ArticleImage: React.FunctionComponent<P> = ({ imageSrc, className = '', ...rest }) => {
	return (
		<S.Container {...rest} className={className}>
			<img src={imageSrc} />
		</S.Container>
	);
};

export { ArticleImage };
