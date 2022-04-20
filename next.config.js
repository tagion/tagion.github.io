// import withPlugins from 'next-compose-plugins';
// import withImages from 'next-images';

const getBuildConfig = (...args) => {
	const withPlugins = require('next-compose-plugins');
	const withImages = require('next-images');

	const withMDX = require('@next/mdx')({
		extension: /\.mdx?$/,
		options: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
	});

	const path = require('path');

	const nextConfig = {
		/* config options here */
		env: {
			// customKey: 'my-value', pass custom runtime env variables
		},
		// basePath: '/path', // base site path ex: 'example.com/path'
		distDir: 'build',
		pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
		// assetPrefix: isProd ? 'https://cdn.mydomain.com' : '', // CDN assets prefix
		sassOptions: {
			includePaths: [path.join(__dirname, '/lib/scss')],
		},
		images: {
			static: true,
		},
		optimizedImages: true,
		compress: true,
		poweredByHeader: false,
		generateEtags: true,
		trailingSlash: true,
		reactStrictMode: true,
		devIndicators: {
			buildActivityPosition: 'top-right',
			buildActivity: true,
		},
		serverRuntimeConfig: {
			// Will only be available on the server side
			// mySecret: 'secret',
			// secondSecret: process.env.SECOND_SECRET, // Pass through env variables
		},
		publicRuntimeConfig: {
			// Will be available on both server and client
			// staticFolder: '/public',
		},
		eslint: {
			// Warning: This allows production builds to successfully complete even if
			// your project has ESLint errors.
			ignoreDuringBuilds: process.env.NODE_ENV === 'development',
		},
		webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
			config.module.rules.push({
				test: /\.svg$/,
				issuer: {
					and: [/\.(js|ts)x?$/],
				},
				use: [
					{
						loader: '@svgr/webpack',
					},
				],
			});

			return config;
		},
	};

	return withPlugins(
		[[withImages, { fileExtensions: ['jpg', 'jpeg', 'png', 'gif'] }], [withMDX]],
		nextConfig,
	)(...args);
};

module.exports = (phase, ...rest) => {
	return getBuildConfig(phase, ...rest);
};
