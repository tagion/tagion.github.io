import { Props } from './index.model';

const Image: React.FunctionComponent<Props> = ({ src = '', alt = '', ...rest }) => {
	return <img src={src} alt={alt} {...rest} />;
};

export { Image };
