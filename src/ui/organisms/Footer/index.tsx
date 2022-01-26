import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'ui/atoms';

import { Styled } from './index.styled';

import LogoIcon from 'lib/img/logo_icon.svg';

const Paragraph = ({ children, ...rest }) => (
	<p className='mb-2' {...rest}>
		{children}
	</p>
);

const Footer = () => {
	return (
		<Styled.Container>
			<Row className='align-items-center'>
				<Col>
					<LogoIcon className='mb-2' width='30px' height='30px' />
					<Paragraph className='mb-0'>
						&copy; {new Date().getFullYear()} Tagion. All rights reserved.
					</Paragraph>
				</Col>
				<Col md={3}>
					<Paragraph>
						<Link href='#'>Contact Us</Link>
					</Paragraph>
					<Paragraph className='mb-0'>
						<Link href='https://google.com' isExternal target='_blank'>
							Privacy Policy
						</Link>
						{' | '}
						<Link href='https://google.com' isExternal target='_blank'>
							Terms of Use
						</Link>
					</Paragraph>
				</Col>
				<Col md={2}>
					<Paragraph>
						<Link href='https://github.com' isExternal withIcon target='_blank'>
							GitHub
						</Link>
					</Paragraph>
					<Paragraph className='mb-0'>
						<Link href='https://github.com' isExternal withIcon target='_blank'>
							TechPaper
						</Link>
					</Paragraph>
				</Col>
			</Row>
		</Styled.Container>
	);
};

export { Footer };
