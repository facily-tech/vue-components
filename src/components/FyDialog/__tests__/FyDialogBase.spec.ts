import FyDialogBase from '../FyDialogBase.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyDialogBase.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDialogBase>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyDialogBase, {
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
