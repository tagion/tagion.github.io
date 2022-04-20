import { Row, Col } from 'react-bootstrap';

import { Image, Link } from 'ui/atoms';

import { S } from './index.styled';
import { P } from './index.model';

const PostItem: React.FunctionComponent<P> = ({ className = '', imageSrc, title, description = '', href = '' }) => {
	return (
		<Link href={href}>
			<S.Container className={className}>
				<Row className='m-0'>
					<Col md={3}>
						<S.Image>
							<Image src={imageSrc} />
						</S.Image>
					</Col>
					<Col md={9} className='ps-3'>
						<h4 className='mb-2'>{title}</h4>
						<p className='m-0'>{description}</p>
					</Col>
				</Row>
			</S.Container>
		</Link>
	);
};

export { PostItem };
