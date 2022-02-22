import FyDataTable from '../FyDataTable.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyDataTable.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDataTable>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyDataTable, {
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
