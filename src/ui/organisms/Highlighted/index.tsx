import { Container, Row } from 'react-bootstrap';

import { Link } from 'ui/atoms';

import { Styled } from './index.styled';
import { Props } from './index.model';

import ArrowLeft from 'lib/icons/arrow-left.svg';

const Highlighted: React.FunctionComponent<Props> = ({ title, children, backLink = null, ...rest }) => {
	return (
		<Container className='border-primary border-bottom' {...rest}>
			<Row>
				<Styled.LeftCol>
					<Styled.Title>
						{backLink && (
							<Link href='/'>
								<ArrowLeft className='mb-1 me-1' />{' '}
							</Link>
						)}
						{title}
					</Styled.Title>
				</Styled.LeftCol>
				<Styled.RightCol>{children}</Styled.RightCol>
			</Row>
		</Container>
	);
};

export { Highlighted };
