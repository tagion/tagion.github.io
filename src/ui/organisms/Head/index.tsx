import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

import config from 'src/lib/config/next-seo.config';

import { P } from './index.model';

const Head: React.FunctionComponent<P> = ({ title, description, keywords, author = 'Tagion' }) => {
	const router = useRouter();
	console.log(router.pathname, config);

	return (
		<DefaultSeo
			{...config}
			openGraph={{
				url: router.asPath,
			}}
		/>
	);

	// return (
	// 	<NextHead>
	// 		<title>Tagion: the independent money system</title>
	// 		<link rel='shortcut icon' type='image/svg' href='/favicon.svg' />
	// 		<meta charSet='UTF-8'></meta>
	// 		<meta
	// 			name='description'
	// 			key='description'
	// 			content='Welcome to the future of money with Tagion - the monetary system, allowing you to participate in the global economy directly, immediately, and without special permission. This money system is decentralized, fast, non-political, and stable. Join Tagion to trade goods, services, and digital assets without the limitation of banks and credit card companies.'
	// 		></meta>
	// 		<meta
	// 			name='keywords'
	// 			key='keywords'
	// 			content='tagion, tagions, money, monetary system, decentralized, independent, community, economy, global, worldwide, non-political, common goods, fast, future, openly governed'
	// 		></meta>
	// 		<meta name='author' content='Tagion' key='author'></meta>
	// 		<meta name='viewport' content='width=device-width, initial-scale=1' key='viewport'></meta>
	// 		<meta property='og:title' content='Tagion: the independent money system' key='og:title'></meta>
	// 		<meta
	// 			property='og:description'
	// 			key='og:description'
	// 			content='Welcome to the future of money with Tagion - the monetary system, allowing you to participate in the global economy directly, immediately, and without special permission. This money system is decentralized, fast, non-political, and stable. Join Tagion to trade goods, services, and digital assets without the limitation of banks and credit card companies.'
	// 		></meta>{' '}
	// 		{/* shorten meta description */}
	// 		<meta property='og:type' key='og:type' content='website'></meta>
	// 		<meta property='og:url' key='og:url' content={router.asPath}></meta>
	// 		{/* twitter/social tags */}
	// 	</NextHead>
	// );
};

export { Head };
