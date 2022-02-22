import FySnackbar from '../FySnackbar.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FySnackbar.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FySnackbar>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FySnackbar, {
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
