import FyInput from '../FyInput';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyInput.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyInput>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyInput, {
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
