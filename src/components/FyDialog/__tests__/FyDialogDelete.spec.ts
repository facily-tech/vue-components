import FyDialogDelete from '../FyDialogDelete.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyDialogDelete.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDialogDelete>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyDialogDelete, {
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
