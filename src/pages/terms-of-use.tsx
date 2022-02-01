import { Highlighted } from 'ui/organisms';

import TermsOfUseMD from 'lib/content/terms-of-use.md';

const PrivacyPolicy = () => {
	return (
		<Highlighted id='privacy-policy' title={'Terms of Use'} backLink='/'>
			<TermsOfUseMD />
		</Highlighted>
	);
};

export default PrivacyPolicy;
