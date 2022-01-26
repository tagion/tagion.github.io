import { Container } from 'react-bootstrap';
import ExtTicker from 'react-ticker';

import { Styled } from './index.styled';

import content from 'lib/content/index.json';
import LogoIcon from 'lib/img/logo_icon.svg';

const tickerContent = content.ticker;

const Ticker = () => {
	const firstRowContent = tickerContent.children[0].content.split('|');
	const secondRowContent = tickerContent.children[1].content.split('|');

	return (
		<Container className='py-6 px-0 border-primary border-bottom border-end border-start'>
			<ExtTicker>
				{() => (
					<>
						<Styled.Line className='mb-3'>
							{firstRowContent.map((content) => (
								<>
									<span>{content}</span>
									<LogoIcon width='52' height='55' className='mx-3' />
								</>
							))}
						</Styled.Line>
						<Styled.Line>
							{secondRowContent.map((content) => (
								<>
									<span>{content}</span>
									<LogoIcon width='52' height='55' className='mx-3' />
								</>
							))}
						</Styled.Line>
					</>
				)}
			</ExtTicker>
		</Container>
	);
};

export { Ticker };
