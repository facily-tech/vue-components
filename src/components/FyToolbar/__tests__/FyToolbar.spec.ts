import FyToolbar from '../FyToolbar.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyToolbar.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyToolbar>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyToolbar, {
        mocks: {
          $vuetify: {
            icons: {},
            rtl: false,
          },
        },
        ...options,
      });
    };
  });

  it('should render component and match snapshot', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
