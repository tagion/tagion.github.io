import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

import { Button, Link } from 'ui/atoms';

import { Styled } from './index.styled';

import content from 'lib/content/index.json';
import PlanetIllustration from 'lib/img/phone-planet.svg';

const Hero = () => {
	const typingStrings = content.hero.children.map(({ content }) => content);

	return (
		<Container className='overflow-hidden'>
			<Row className='border-primary border-bottom'>
				<Col className='px-3 py-425 px-md-5 py-md-7 border-primary border-end border-start' lg={6}>
					<Styled.Title>
						We Are
						<Typewriter
							options={{
								strings: typingStrings,
								autoStart: true,
								loop: true,
								cursor: '',
							}}
						/>
					</Styled.Title>
					<p className='mb-3 mb-md-5 fw-bold'>
						Tagion is designed as an independent monetary system to serve as an{' '}
						<mark>efficient medium of exchange</mark>, a <mark>convenient unit of account</mark>, and a{' '}
						<mark>reliable store of value</mark>
					</p>
					<Styled.Link isExternal target='_blank' href='https://google.com'>
						<Button style={{ minWidth: 220 }} className='me-3' withIcon>
							GitHub
						</Button>
					</Styled.Link>
					<Styled.Link isExternal target='_blank' href='https://google.com'>
						<Button style={{ minWidth: 220 }} withIcon>
							TechPaper
						</Button>
					</Styled.Link>
				</Col>
				<Styled.Scene>
					<Styled.Background />
					<PlanetIllustration className='position-relative' />
				</Styled.Scene>
			</Row>
		</Container>
	);
};

export { Hero };
