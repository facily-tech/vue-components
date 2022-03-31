import Vue from 'vue';
import Vuetify from 'vuetify';
import FyInputTime from '../FyInputTime.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyInputTime.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyInputTime>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyInputTime, {
        vuetify: new Vuetify(),
        ...options,
      });
    };
  });

  it('should render component and match snapshot', () => {
    const wrapper = mountFunction();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
