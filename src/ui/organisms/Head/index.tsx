import NextHead from 'next/head';

const Head = () => {
	return (
		<NextHead>
			<title>Tagion. We are New Money</title>
			<link rel='shortcut icon' type='image/svg' href='/favicon.svg' />
			<meta charSet='UTF-8'></meta>
			<meta
				name='description'
				content='Tagion is a decentralized non-political monetary system, used and governed openly as a common
						good.'
			></meta>
			<meta
				name='keywords'
				content='crypto, money, tagion, decentralized, network, digital, smart, social'
			></meta>
			<meta name='author' content='Vlady aka Hustler Engineer'></meta>
			<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'></meta>
		</NextHead>
	);
};

export { Head };
