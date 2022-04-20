import fs from 'fs';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import { v4 as uuid } from 'uuid';

import { Highlighted } from 'ui/organisms';
import { ArticleImage, Navigation } from 'ui/molecules';
import { Link } from 'ui/atoms';

import posts from 'lib/content/blog/posts';

const Anchor = ({ id, children }) => <h4 id={id}>{children}</h4>;

const components = {
	Anchor,
};

const Post = ({ post }) => {
	return (
		<>
			<Head>
				<title>{post.title} | Tagion Blog</title>
				<meta name='description' key='description' content={post.description} />{' '}
				{/* shorten meta description */}
				<meta
					name='keywords'
					key='keywords'
					content='tagion, tagions, money, monetary system, decentralized, independent, community, economy, global, worldwide, non-political, common goods, fast, future, openly governed'
				></meta>{' '}
				{/* add keywords */}
				<meta name='robots' content='index, follow' />
				<meta name='author' content='Tagion' key='author' /> {/* add author */}
				<meta property='og:title' key='og:title' content={post.title} />
				<meta property='og:description' key='og:description' content={post.description} />{' '}
				{/* shorten meta description */}
				{/* <meta property="og:url" content={location.href}></meta> */}
				{/* <link rel="canonical" href="https://blog.ethereum.org/2022/04/14/secured-no-3/"></link> */}
				{/* <meta property="og:image" content="https://blog.ethereum.org/img/ethereum-blog-og-image.png"> */}
				{/* add twitter/social meta */}
			</Head>
			<Highlighted
				title={post.title}
				backLink='/blog'
				className='border-bottom-0'
				isSidebarFixed
				sidebarChildren={
					post.navigation.length ? (
						<Navigation>
							{post.navigation.map(({ title, id }) => (
								<Link href={`#${id}`} key={uuid()}>
									{title}
								</Link>
							))}
						</Navigation>
					) : null
				}
			>
				<ArticleImage imageSrc={post.image} />
				<MDXRemote {...post.content} components={components} />
			</Highlighted>
		</>
	);
};

export async function getStaticPaths() {
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, req }) {
	const { slug } = params;
	const post = posts.find((p) => p.slug === slug);

	const source = fs.readFileSync(`src/lib/content/blog/${slug}.mdx`, 'utf-8');
	const content = await serialize(source, { mdxOptions: { rehypePlugins: [rehypeSlug] } });

	return {
		props: { post: { ...post, content } },
	};
}

export default Post;
