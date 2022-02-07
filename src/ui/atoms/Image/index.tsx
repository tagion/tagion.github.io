import { Props } from './index.model';

const Image: React.FunctionComponent<Props> = ({ src = '', ...rest }) => {
	return <img src={src} {...rest} />;
};

export { Image };
