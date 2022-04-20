import '../lib/scss/index.scss';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { DefaultPage, Layout } from 'ui/templates';
import { HeadSEO } from 'ui/organisms';

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

	useEffect(() => {
		const scrollToHashHandler = (url: string) => {
			const [_baseUrl, id] = url.split('#'),
				section = document.getElementById(id),
				headerHeight = isMobile() ? 80 : 130,
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
			</ThemeProvider>
		</Layout>
	);
}

export function reportWebVitals(metric) {
	// console.log(metric); Page insights metrics
}

export default Application;
