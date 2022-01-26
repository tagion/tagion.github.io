const path = require('path')
// const withImages = require("next-images");
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */

    const nextConfig = {
        /* config options here */
        env: {
            customKey: 'my-value',
            test: process.env.TEST || 'hmmmmmm'
        },
        // basePath: '/path', // base site path ex: 'example.com/path'
        distDir: 'build',
        pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
        // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '', // CDN assets prefix
        sassOptions: {
            includePaths: [path.join(__dirname, '/lib/scss')],
        },
        compress: false,
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
            // staticFolder: '/static',
        },
        eslint: {
            // Warning: This allows production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: process.env.NODE_ENV === 'development',
        },
        async headers() {
            return [
                // custom page headers
                // {
                //     source: '/about',
                //     headers: [
                //         {
                //             key: 'x-custom-header',
                //             value: 'my custom header value',
                //         },
                //         {
                //             key: 'x-another-custom-header',
                //             value: 'my other custom header value',
                //         },
                //     ],
                // },
            ]
        },
        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
            // config.module.rules.push({
            //     test: /\.svg$/,
            //     type: 'asset/src',
            //     resourceQuery: /src/,
            // })
            config.module.rules.push({
                test: /\.svg$/,
                issuer: {
                    and: [/\.(js|ts)x?$/]
                },
                use: [{
                    loader: '@svgr/webpack',
                }],

            });


            // Important: return the modified config
            return config
        },
    }
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...nextConfig
            /* development only config options here */
        }
    }

    return { ...nextConfig }
}