import { v4 as uuid } from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';

import { Styled } from './index.styled';
import { Props, Milestone } from './index.model';

const Roadmap: React.FunctionComponent<Props> = ({ title, items, id = '' }) => {
	const groupedItems = items.reduce((result = [], _current, index, array = []) => {
		if (!Boolean(index % 2)) {
			result.push(array.slice(index, index + 2));
		}

		return result;
	}, [] as Milestone[][]); // grouped by 2 Milestone

	const renderItems = groupedItems.map((items, index) => {
			const renderMilestones = items.map(({ title, date, description, isComing }, i) => (
				<Col lg={{ span: 4, offset: index + i }} key={uuid()} className='mb-4'>
					<Styled.Card variant={isComing ? 'dashed' : 'primary'} className='h-100'>
						<h4>{title}</h4>
						<p className='mb-0 mt-auto'>{description}</p>
						<p className='mb-0'>
							{isComing ? 'Target:' : 'Date:'} <time dateTime={Date.parse(date).toString()}>{date}</time>
						</p>
					</Styled.Card>
				</Col>
			));

			return <Row key={uuid()}>{renderMilestones}</Row>;
		}),
		renderBG = Array.from({ length: 50 }).map((_item, i) => (
			<div className='dash' style={{ left: `${i * 3}rem`, marginLeft: '-.8rem' }} key={uuid()}></div>
		));

	return (
		<Container className='border-primary border-bottom border-end border-start p-0 pb-lg-6 overflow-hidden' id={id}>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Container>
				{renderBG}
				{renderItems}
			</Styled.Container>
		</Container>
	);
};

export { Roadmap };
