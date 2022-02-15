import FyInfoCard from '../FyInfoCard.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

describe('FyInfoCard.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyInfoCard>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyInfoCard, {
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
