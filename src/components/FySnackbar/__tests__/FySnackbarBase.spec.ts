import FySnackbarBase from '../FySnackbarBase.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FySnackbarBase.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FySnackbarBase>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FySnackbarBase, {
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
