import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withVuetify
];