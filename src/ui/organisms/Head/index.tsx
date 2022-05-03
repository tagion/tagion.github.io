import NextHead from 'next/head';

const TRACKING_ID = 'GTM-TJ6STM7'; // OUR_TRACKING_ID

const Head = () => {
	return (
		<NextHead>
			<title>Tagion: the independent money system</title>
			<link rel='shortcut icon' type='image/svg' href='/favicon.svg' />
			<meta charSet='UTF-8'></meta>
			<meta
				name='description'
				content='Welcome to the future of money with Tagion - the monetary system, allowing you to participate in the global economy directly, immediately, and without special permission. This money system is decentralized, fast, non-political, and stable. Join Tagion to trade goods, services, and digital assets without the limitation of banks and credit card companies.'
			></meta>
			<meta
				name='keywords'
				content='tagion, tagions, money, monetary system, decentralized, independent, community, economy, global, worldwide, non-political, common goods, fast, future, openly governed'
			></meta>
			<meta name='author' content='Vlady aka Hustler Engineer'></meta>
			<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'></meta>
		</NextHead>
	);
};

export { Head };
