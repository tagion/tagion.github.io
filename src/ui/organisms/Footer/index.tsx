import { Container, Row, Col } from 'react-bootstrap';

import { isMobile } from 'lib/utils';

import { Link } from 'ui/atoms';

import { Styled } from './index.styled';

const Paragraph = ({ children, ...rest }) => (
	<p className='mb-2' {...rest}>
		{children}
	</p>
);

const Footer = () => {
	return (
		<Styled.Container>
			<Row className='align-items-center m-0'>
				<Col xs={{ span: 12 }} lg={{ span: 3, order: 1 }}>
					<Styled.Logo />
					<Styled.Copyright>&copy; {new Date().getFullYear()} Tagion. All rights reserved.</Styled.Copyright>
				</Col>
				<Col xs={{ span: 5 }} lg={{ order: 2, span: 3, offset: 1 }}>
					<Paragraph>Contact Us: ir@tagion.com</Paragraph>
					<Styled.Paragraph>
						<Link href='/privacy-policy' className='mb-2 mb-lg-0 d-block d-lg-inline'>
							Privacy Policy
						</Link>
						<Link href='/terms-of-use' className='d-block d-lg-inline'>
							Terms of Use
						</Link>
					</Styled.Paragraph>
				</Col>
				<Col xs={{ span: 3, offset: 3 }} lg={{ order: 3, span: 2 }}>
					<Paragraph style={{ whiteSpace: 'nowrap' }}>
						<Link href='https://github.com/tagion' isExternal withIcon target='_blank'>
							GitHub
						</Link>
					</Paragraph>
					<Paragraph className='mb-0' style={{ whiteSpace: 'nowrap' }}>
						<Link href='/resources/tech-paper.pdf' isExternal withIcon target='_blank'>
							TechPaper
						</Link>
					</Paragraph>
				</Col>
			</Row>
		</Styled.Container>
	);
};

export { Footer };
