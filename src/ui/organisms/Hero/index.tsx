import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

import { BG_COLOR } from 'lib/constants/colors';

import { Button } from 'ui/atoms';
import { GlitchImage } from 'ui/molecules';

import { Styled } from './index.styled';

import content from 'lib/content/index.json';

const Hero = () => {
	const typingStrings = content.hero.children.map(({ content }) => content);

	return (
		<Container className='overflow-hidden'>
			<Row className='border-primary border-bottom'>
				<Col className='px-3 py-425 px-md-5 py-md-7 border-primary border-end border-start' lg={6}>
					<h1 style={{ color: BG_COLOR, position: 'absolute', zIndex: -1, opacity: 0, visibility: 'hidden' }}>
						We are {typingStrings[0]}
					</h1>{' '}
					{/* SEO hack */}
					<Styled.Title>
						We Are <br />
						<Typewriter
							options={{
								strings: typingStrings,
								autoStart: true,
								loop: true,
								cursor: '',
							}}
						/>
					</Styled.Title>
					<p className='mb-3 mb-md-5'>
						Tagion is a decentralized non-political monetary system, used and governed openly as a common
						good.
					</p>
					<Styled.Link isExternal target='_blank' href='https://t.me/tagionChat'>
						<Button style={{ minWidth: 240 }} withIcon className='me-3'>
							Say Hi
						</Button>
					</Styled.Link>
					<Styled.Link isExternal target='_blank' href='/resources/tech-paper.pdf'>
						<Button style={{ minWidth: 240 }} withIcon>
							Read Tech Paper
						</Button>
					</Styled.Link>
				</Col>
				<Styled.Scene>
					<Styled.Background />
					<GlitchImage imageSrc='/images/phone-planet.svg' imgAlt='World is glitching!' />
				</Styled.Scene>
			</Row>
		</Container>
	);
};

export { Hero };
