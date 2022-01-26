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
				<Col className='px-5 py-7 border-primary border-end border-start'>
					<Styled.Title>
						We Are
						{/* <span id={typingID}>New Money</span> */}
						<Typewriter
							options={{
								strings: typingStrings,
								autoStart: true,
								loop: true,
								cursor: '',
							}}
						/>
					</Styled.Title>
					<p className='mb-5'>
						Tagion is designed as an independent monetary system to serve as an{' '}
						<mark>efficient medium of exchange</mark>, a <mark>convenient unit of account</mark>, and a{' '}
						<mark>reliable store of value</mark>
					</p>
					<Link isExternal target='_blank' href='https://google.com'>
						<Button style={{ minWidth: 220 }} className='me-3' withIcon>
							GitHub
						</Button>
					</Link>
					<Link isExternal target='_blank' href='https://google.com'>
						<Button style={{ minWidth: 220 }} withIcon>
							TechPaper
						</Button>
					</Link>
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
