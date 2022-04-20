import Head from 'next/head';
import { v4 as uuid } from 'uuid';

import { Highlighted } from 'ui/organisms';
import { PostItem } from 'ui/molecules';

import posts from 'lib/content/blog/posts';

const Blog = () => {
	return (
		<>
			<Head>
				<title>Tagion Blog</title>
				<meta name='description' content='Tagion blog with latest news' key='description'></meta>
				<meta
					name='keywords'
					content='tagion, tagions, money, monetary system, decentralized, independent, community, economy, global, worldwide, non-political, common goods, fast, future, openly governed'
					key='keywords'
				></meta>
				<meta property='og:title' key='og:title' content='Tagion Blog'></meta>
				{/* <meta property='og:url' content={location.href}></meta> */}
			</Head>
			<Highlighted id='blog' title={'Blog'} backLink='/' className='border-bottom-0'>
				{posts.map(({ title, description, image, url }) => (
					<PostItem key={uuid()} title={title} description={description} imageSrc={image} href={url} />
				))}
			</Highlighted>
		</>
	);
};

export default Blog;
