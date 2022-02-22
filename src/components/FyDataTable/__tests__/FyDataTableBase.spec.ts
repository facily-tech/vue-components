import FyDataTableBase from '../FyDataTableBase.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyDataTableBase.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDataTableBase>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyDataTableBase, {
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
