import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Hero, Highlighted, Roadmap, FeatureCards, Features, Accordion, Community } from 'ui/organisms';
import { Ticker } from 'ui/molecules';

import { isMobile } from 'lib/utils';

import content from 'lib/content/index.json';
import ComputerIcon from 'lib/icons/computer.svg';
import BankIcon from 'lib/icons/bank.svg';

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
	const [mobile, setMobile] = useState(false);

	useEffect(() => {
		setMobile(isMobile());
	}, []);

	const faqItems = faqContent.children.map(({ title, children }) => ({
			title,
			content: children.map((i) => <p key={uuid()} dangerouslySetInnerHTML={{ __html: i.content }} />),
		})),
		tagionVsCryptoItems = tagionVsCryptoContent.children.map(({ title, content }) => ({
			title,
			content: <p>{content}</p>,
		})),
		tagionVsCashItems = tagionVsCash.children.map(({ title, content }) => ({
			title,
			content: <p>{content}</p>,
		})),
		roadmapItems = roadmapContent.children.map(({ title, children, isComing = false }) => ({
			title,
			isComing,
			description: children[0].content,
			date: children[1].content,
		}));

	return (
		<>
			<Hero />
			<Highlighted id='about' title={welcomeContent.title}>
				<WelcomeContent />
			</Highlighted>
			<Roadmap id='roadmap' title={roadmapContent.title} items={roadmapItems} />
			<FeatureCards id='how-it-works' />
			<Features id='features' title={tagionVsCryptoContent.title} image={<ComputerIcon width='300px' />}>
				{mobile ? <Accordion items={tagionVsCryptoItems} /> : <TagionVsCryptoContent />}
			</Features>
			<Features title={tagionVsCash.title} image={<BankIcon width='365px' />} imageIsRight={true}>
				{mobile ? <Accordion items={tagionVsCashItems} /> : <TagionVsCashContent />}
			</Features>
			<Ticker />
			<Highlighted id='faq' title={faqContent.title}>
				<Accordion items={faqItems} />
			</Highlighted>
			<Community id='community' />
		</>
	);
};

export default Index;
