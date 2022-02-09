import FyAutocomplete from '../FyAutocomplete';

import { mount, Wrapper } from '@vue/test-utils';

describe('FyAutocomplete.ts', () => {
  type Instance = InstanceType<typeof FyAutocomplete>;
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Instance>;

  beforeEach(() => {
    document.body.setAttribute('data-app', 'true');

    mountFunction = (options = {}) => {
      return mount(FyAutocomplete, {
        ...options,
        mocks: {
          $vuetify: {
            lang: {
              t: (val: string) => val,
            },
            theme: {
              dark: false,
            },
          },
        },
      });
    };
  });

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });
});
