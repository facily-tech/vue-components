import FyFilter from '../FyFilter.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyFilter.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyFilter>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyFilter, {
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
