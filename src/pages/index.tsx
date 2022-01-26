import { v4 as uuid } from 'uuid';
import { Container } from 'react-bootstrap';

import { Hero, Highlighted, Roadmap, FeatureCards, Features, Accordion, Community } from 'ui/organisms';
import { Ticker } from 'ui/molecules';

import content from 'lib/content/index.json';
import ComputerIcon from 'lib/img/computer.svg';
import BankIcon from 'lib/img/bank.svg';

const tagionVsCryptoContent = content.tagionVsCrypto,
	tagionVsCash = content.tagionVsCash,
	welcomeContent = content.welcome,
	faqContent = content.faq,
	roadmapContent = content.roadmap;

const TagionVsCryptoContent = () => {
	const content = tagionVsCryptoContent.children.map(({ title, content }) => {
		return (
			<div key={uuid()}>
				<h4 className='mb-2'>{title}</h4>
				<p className='mb-4'>{content}</p>
			</div>
		);
	});

	return <div>{content}</div>;
};

const TagionVsCashContent = () => {
	const content = tagionVsCash.children.map(({ title, content }) => {
		return (
			<div key={uuid()}>
				<h4 className='mb-2'>{title}</h4>
				<p className='mb-4'>{content}</p>
			</div>
		);
	});

	return <div>{content}</div>;
};

const WelcomeContent = () => (
	<>
		<p>{welcomeContent.children[0].content}</p>
		<p>{welcomeContent.children[1].content}</p>
	</>
);

const Index = () => {
	const accordionItems = faqContent.children.map(({ title, children }) => ({
			title,
			children: children.map((i) => <p key={uuid()}>{i.content}</p>),
		})),
		roadmapItems = roadmapContent.children.map(({ title, children }) => ({
			title,
			description: children[0].content,
			date: children[1].content,
		}));

	return (
		<>
			<Hero />
			<Highlighted id='about' title={welcomeContent.title}>
				<WelcomeContent />
			</Highlighted>
			<Roadmap title={roadmapContent.title} items={roadmapItems} />
			<FeatureCards id='how-it-works' />
			<Features id='features' title={tagionVsCryptoContent.title} image={<ComputerIcon width='300px' />}>
				<TagionVsCryptoContent />
			</Features>
			<Features title={tagionVsCash.title} image={<BankIcon width='365px' />} imageIsRight={true}>
				<TagionVsCashContent />
			</Features>
			<Ticker />
			<Highlighted id='faq' title={faqContent.title}>
				<Accordion items={accordionItems} />
			</Highlighted>
			<Community id='community' />
		</>
	);
};

export default Index;
