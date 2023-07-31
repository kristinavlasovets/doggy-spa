const path = require('path');

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': path.resolve(__dirname, '../src'),
      '@/shared': path.resolve(__dirname, '../shared'),
    };
    config.resolve.modules = [...(config.resolve.modules || []), './src'];
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        type: 'javascript/auto',
        use: [{ loader: '@svgr/webpack', options: { icon: true } }, 'url-loader'],
      },
    ];
    return config;
  },
};
export default config;
