import { useRouter } from 'next/router';
import { NextSeo, DefaultSeo } from 'next-seo';

import config from 'src/lib/config/next-seo.config';

import { P } from './index.model';

const HeadSEO: React.FunctionComponent<P> = ({
	title,
	description,
	keywords = '',
	author = 'Tagion',
	isDefault = null,
}) => {
	const router = useRouter();

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
				openGraph={{
					title,
					description,
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
			/>
		</>
	);
};

export { HeadSEO };
