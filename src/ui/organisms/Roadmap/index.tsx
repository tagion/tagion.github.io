import { v4 as uuid } from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';

import { Card } from 'ui/molecules';

import { Styled } from './index.styled';
import { Props } from './index.model';

const Roadmap: React.FunctionComponent<Props> = ({ title, items }, ...rest) => {
	const renderItems = items.map(({ title, date, description }, i) => {
			const isLastItem = i === items.length - 1;

			return (
				<Row key={uuid()} className={`${!isLastItem ? 'mb-3' : ''}`}>
					<Col lg={{ span: 4, offset: i * 3 }}>
						<Styled.Card variant={isLastItem ? 'dashed' : 'primary'}>
							<h4>{title}</h4>
							<p className='mb-0'>{description}</p>
							<p className='mb-0'>
								Launch date: <time dateTime={Date.parse(date).toString()}>{date}</time>
							</p>
						</Styled.Card>
					</Col>
				</Row>
			);
		}),
		renderBG = Array.from({ length: 50 }).map((_item, i) => (
			<div className='dash' style={{ left: `${i * 3}rem`, marginLeft: '-.8rem' }} key={uuid()}></div>
		));

	return (
		<Container className='border-primary border-bottom border-end border-start p-0 pb-lg-6 overflow-hidden'>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Container>
				{renderBG}
				{renderItems}
			</Styled.Container>
		</Container>
	);
};

export { Roadmap };
