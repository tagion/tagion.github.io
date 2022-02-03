import { v4 as uuid } from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';

import { Styled } from './index.styled';
import { Props, Milestone } from './index.model';

const Roadmap: React.FunctionComponent<Props> = ({ title, items, id = '' }) => {
	const renderMilestones = items.map(({ title, date, description, isComing }, i) => {
			let order: number = 0;
			let offset: number = 0;

			if (i === 0) {
				order = 0;
				offset = 0;
			} else if (i === 1) {
				order = 2;
				offset = 1;
			} else if (i === 2) {
				order = 4;
				offset = 2;
			} else if (i === 3) {
				order = 1;
				offset = 1;
			} else if (i === 4) {
				order = 3;
				offset = 1;
			} else if (i === 5) {
				order = 5;
				offset = 1;
			}

			return (
				<Col lg={{ span: 5, order, offset }} key={uuid()} className='mb-4'>
					<Styled.Card variant={isComing ? 'dashed' : 'primary'} className='h-100'>
						<h4>{title}</h4>
						<p className='mb-0 mt-auto'>{description}</p>
						<p className='mb-0'>
							{isComing ? 'Target:' : 'Date:'} <time dateTime={Date.parse(date).toString()}>{date}</time>
						</p>
					</Styled.Card>
				</Col>
			);
		}),
		renderBG = Array.from({ length: 50 }).map((_item, i) => (
			<div className='dash' style={{ left: `${i * 3}rem`, marginLeft: '-.8rem' }} key={uuid()}></div>
		));

	return (
		<Container className='border-primary border-bottom border-end border-start p-0 pb-lg-6 overflow-hidden' id={id}>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Container>
				{renderBG}
				<Row>{renderMilestones}</Row>
			</Styled.Container>
		</Container>
	);
};

export { Roadmap };
