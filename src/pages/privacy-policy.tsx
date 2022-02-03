import { v4 as uuid } from 'uuid';

import { Highlighted } from 'ui/organisms';

import PrivacyPolicyMD from 'lib/content/privacy-policy.md';

const PrivacyPolicy = () => {
	return (
		<Highlighted id='privacy-policy' title={'Privacy Policy'} backLink='/'>
			<PrivacyPolicyMD />
		</Highlighted>
	);
};

export default PrivacyPolicy;
