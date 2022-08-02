import fs from 'fs';
import { Container } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import remarkGFM from 'remark-gfm';

import { HOST } from 'lib/constants';

import { HeadSEO, Highlighted } from 'ui/organisms';
import { S } from 'ui/organisms/Post/index.styled';
import { ArticleImage, Navigation } from 'ui/molecules';
import { Link, Image } from 'ui/atoms';

import posts from 'lib/content/blog/posts';

const Anchor = ({ id, children }) => <h4 id={id}>{children}</h4>;

const components = {
	Anchor,
	ArticleImage,
};

const Post = ({ post }) => {
	return (
		<>
			<HeadSEO
				title={`${post.title} | Tagion Blog`}
				description={post.excerpt}
				keywords={post.seo.keywords}
				author={post.author}
				imageSrc={post.image}
				canonicalLink={`https://${HOST}${post.url}`}
			/>
			<Highlighted
				title={post.title}
				breadcrumbs={['/', '/blog', post.title]}
				className='overflow-hidden border-bottom-0 border-primary border-end border-start'
				contentWithPaddings={false}
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
				<S.HeroContainer>
					<Image src={post.image} alt={post.title} />
				</S.HeroContainer>
				<Container className='px-3 pt-4 pb-3 px-md-425'>
					<h1 className='mb-2'>{post.title}</h1>
					{post.author && (
						<div className='mb-1'>
							Author: <span className='text-aqua'>{post.author}</span>
						</div>
					)}
					{post.published && (
						<div className='mb-5'>
							Published: <span className='text-aqua'>{post.published}</span>
						</div>
					)}
					<S.Content>
						<MDXRemote {...post.content} components={components} />
					</S.Content>
				</Container>
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
	const content = await serialize(source, {
		mdxOptions: { rehypePlugins: [rehypeSlug], remarkPlugins: [remarkGFM] },
	});

	return {
		props: { post: { ...post, content } },
	};
}

export default Post;
