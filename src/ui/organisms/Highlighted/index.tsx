import { Container, Row, Col } from 'react-bootstrap';

import { Props } from './index.model';

const Highlighted: React.FunctionComponent<Props> = ({ title, children, ...rest }) => {
	return (
		<Container className='border-primary border-bottom' {...rest}>
			<Row>
				<Col md={4} className='border-primary border-end border-start px-5 py-6'>
					<h2>{title}</h2>
				</Col>
				<Col md={8} className='border-primary border-end px-5 py-6'>
					{children}
				</Col>
			</Row>
		</Container>
	);
};

export { Highlighted };
