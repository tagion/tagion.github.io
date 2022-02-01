import { Container } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

import { FeatureCard, IFeatureCard } from 'ui/molecules';
import { Slider } from 'ui/organisms';

import { Styled } from './index.styled';

import content from 'lib/content/index.json';
import DbIcon from 'lib/img/datacenter.svg';
import MedalIcon from 'lib/img/medal.svg';
import PhoneIcon from 'lib/img/phone-card.svg';

const FeatureCards = ({ ...rest }) => {
	const features: IFeatureCard[] = [
		{
			title: content.howItWorks.children[0].title,
			content: content.howItWorks.children[0].content,
			icon: <MedalIcon className='mx-auto' style={{ maxHeight: 200 }} />,
		},
		{
			title: content.howItWorks.children[1].title,
			content: content.howItWorks.children[1].content,
			icon: <DbIcon className='mx-auto' style={{ maxHeight: 200 }} />,
		},
		{
			title: content.howItWorks.children[2].title,
			content: content.howItWorks.children[2].content,
			icon: <PhoneIcon className='mx-auto' style={{ maxHeight: 200 }} />,
		},
	];

	return (
		<Container className='border-primary border-bottom border-end border-start p-0' {...rest}>
			<Styled.Title>{content.howItWorks.title}</Styled.Title>
			<Slider
				className='px-3 px-lg-5 pt-425 pb-6 pt-lg-0'
				options={{
					spaceBetween: 16,
					pagination: { clickable: true },
					breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
				}}
				withPagination={true}
				withNavigation={true}
			>
				{features.map((feature, i) => (
					<FeatureCard key={uuid()} {...feature} className='h-100' />
				))}
			</Slider>
		</Container>
	);
};

export { FeatureCards };
