import { v4 as uuid } from 'uuid';

import { Highlighted } from 'ui/organisms';

import content from 'lib/content/privacy-policy.json';

const PrivacyPolicyContent = () => {
	const cntnt = content.privacyPolicy.children.map(({ title, content }) => {
		return (
			<div key={uuid()}>
				<h4 className='mb-2'>{title}</h4>
				<p className='mb-4'>{content}</p>
			</div>
		);
	});

	return <div>{cntnt}</div>;
};

const PrivacyPolicy = () => {
	return (
		<Highlighted id='privacy-policy' title={content.privacyPolicy.title} backLink='/'>
			<PrivacyPolicyContent />
		</Highlighted>
	);
};

export default PrivacyPolicy;
