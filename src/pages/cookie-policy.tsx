import { Highlighted } from 'ui/organisms';

import CookiePolicyMD from 'lib/content/cookie-policy.md';

const PrivacyPolicy = () => {
	return (
		<Highlighted id='cookie-policy' title={'Cookie Policy'} backLink='/'>
			<CookiePolicyMD />
		</Highlighted>
	);
};

export default PrivacyPolicy;
