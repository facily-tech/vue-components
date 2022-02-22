import FyUserLabel from '../FyUserLabel.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyUserLabel.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyUserLabel>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyUserLabel, {
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
