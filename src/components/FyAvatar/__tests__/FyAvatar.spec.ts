import FyAvatar from '../FyAvatar.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyAvatar.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyAvatar>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyAvatar, {
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
