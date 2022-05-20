import { useRouter } from 'next/router';
import { NextSeo, DefaultSeo } from 'next-seo';

import config from 'src/lib/config/next-seo.config';

import { HOST } from 'lib/constants';

import { P } from './index.model';

const HeadSEO: React.FunctionComponent<P> = ({
	title,
	description,
	keywords = '',
	author = 'Tagion',
	imageSrc = '',
	isDefault = null,
	canonicalLink = '',
	...rest
}) => {
	const router = useRouter();
	const rootUrl = `https://${HOST}`;

	return (
		<>
			{isDefault && (
				<DefaultSeo
					{...config}
					openGraph={{
						url: router.asPath,
					}}
				/>
			)}
			<NextSeo
				title={title}
				description={description}
				canonical={canonicalLink || rootUrl}
				openGraph={{
					title,
					description,
					url: rootUrl,
					site_name: 'Tagion',
					type: 'website',
					locale: 'en',
					images: imageSrc
						? [
								{
									url: imageSrc,
									type: 'image/jpeg',
								},
						  ]
						: [],
				}}
				additionalMetaTags={[
					{
						property: 'keywords',
						content: keywords || config.additionalMetaTags[0].content, // default keywords
					},
					{
						property: 'author',
						content: author,
					},
				]}
				{...rest}
			/>
		</>
	);
};

export { HeadSEO };
