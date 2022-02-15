import FyDrawer from '../FyDrawer.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyDrawer.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDrawer>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyDrawer, {
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
