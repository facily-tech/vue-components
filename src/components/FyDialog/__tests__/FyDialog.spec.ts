import FyDialog from '../FyDialog.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyDialog.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDialog>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyDialog, {
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
