import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

import { FeatureCard, IFeatureCard } from 'ui/molecules';

import DbIcon from 'lib/img/datacenter.svg';
import MedalIcon from 'lib/img/medal.svg';
import PhoneIcon from 'lib/img/phone-card.svg';

const FeatureCards = ({ ...rest }) => {
	const features: IFeatureCard[] = [
		{
			title: 'Distributed Database',
			content:
				'Tagion can be viewed as a large network of computers that form one large database. This database contains all Tagion bills and handles incoming transactions.',
			icon: <DbIcon className='mx-auto' />,
		},
		{
			title: 'Secure Transactions',
			content:
				'Transactions are instructions to destroy input bill, and transfer its value to output bill. Each input bill must be digitally signed by its private key.',
			icon: <MedalIcon className='mx-auto' />,
		},
		{
			title: 'User Applications',
			content:
				"When a user wants to send money, all he has to do is send the network a valid transaction via the wallet app. The money will be quickly credited to the recipient's account.",
			icon: <PhoneIcon className='mx-auto' />,
		},
	];

	return (
		<Container className='border-primary border-bottom border-end border-start px-5 py-6' {...rest}>
			<h2 className='text-center mb-5'>How Tagion Works</h2>
			<Row>
				{features.map((feature, i) => (
					<Col md={4} key={uuid()} className='px-3'>
						<FeatureCard {...feature} className='h-100' />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export { FeatureCards };
