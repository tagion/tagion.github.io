import { Row, Col } from 'react-bootstrap';

import { Image, Link } from 'ui/atoms';
import ArrowIcon from 'lib/icons/arrow-left.svg';

import { S } from './index.styled';
import { P } from './index.model';

const PostItem: React.FunctionComponent<P> = ({ className = '', imageSrc, title, description = '', href = '' }) => {
	return (
		<Link href={href}>
			<S.Container className={className}>
				<Row className='m-0'>
					<Col md={3} xs={4}>
						<S.Image>
							<Image src={imageSrc} />
						</S.Image>
					</Col>
					<Col md={9} xs={8} className='ps-3'>
						<h4 className='mb-2'>{title}</h4>
						<p className='m-0 description'>{description}</p>
					</Col>
				</Row>
				<ArrowIcon width='2rem' height='2rem' />
			</S.Container>
		</Link>
	);
};

export { PostItem };
