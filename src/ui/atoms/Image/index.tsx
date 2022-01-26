import Img from 'next/image';

import { Props } from './index.model';

const Image: React.FunctionComponent<Props> = (props) => {
	return <Img {...props} src={props.src || ''} />;
};

export { Image };
