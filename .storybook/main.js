const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@socheatsok78/storybook-addon-vuetify',
    'storybook-addon-turbo-build',
  ],
  framework: '@storybook/vue',
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.sass$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
