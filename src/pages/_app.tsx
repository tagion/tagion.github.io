import '../lib/scss/index.scss';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Cookie from 'js-cookie';
import TagManager from 'react-gtm-module';

import { DefaultPage, Layout } from 'ui/templates';
import { HeadSEO } from 'ui/organisms';
import { Toast } from 'ui/molecules';
import { Link } from 'ui/atoms';

import { isMobile } from 'lib/utils';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {};

function Application({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [isCookiesAccepted, setIsCookiesAccepted] = useState(true);

	useEffect(() => {
		setIsCookiesAccepted(!!Cookie.get('cookies-accepted'));

		TagManager.initialize({ gtmId: 'GTM-TJ6STM7' });
	}, []);

	useEffect(() => {
		const scrollToHashHandler = (url: string) => {
			const [baseUrl, id] = url.split('#'),
				section = document.getElementById(id),
				headerHeight = isMobile() ? 80 : baseUrl === '/' ? 105 : 130,
				topOffset = section?.offsetTop;

			if (topOffset) {
				setTimeout(() => {
					window.scroll({
						top: topOffset - headerHeight,
						left: 0,
						behavior: 'smooth',
					});
				}, 100);
			}
		};

		router.events.on('hashChangeComplete', scrollToHashHandler);

		return () => {
			router.events.off('hashChangeComplete', scrollToHashHandler);
		};
	}, [router.events]);

	return (
		<Layout>
			<HeadSEO isDefault />
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<DefaultPage>
					<Component {...pageProps} />
				</DefaultPage>
				{!isCookiesAccepted && (
					<div
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							right: '2rem',
							bottom: '2rem',
							pointerEvents: 'none',
							zIndex: 100,
						}}
						aria-live='polite'
						aria-atomic='true'
					>
						<Toast
							title='Cookie Policy'
							content={
								<p className='mb-2'>
									We are using cookies but all data is private. If you interested in more info, please
									read <Link href='/privacy-policy'>privacy policy</Link>
								</p>
							}
							buttonHandler={() => Cookie.set('cookies-accepted', 1)}
							buttonTitle='Accept'
						/>
					</div>
				)}
			</ThemeProvider>
		</Layout>
	);
}

export function reportWebVitals(metric) {
	// console.log(metric); Page insights metrics
}

export default Application;
