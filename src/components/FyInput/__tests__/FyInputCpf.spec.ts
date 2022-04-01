import Vue from 'vue';
import Vuetify from 'vuetify';
import FyInputCpf from '../FyInputCpf.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyInputCpf.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyInputCpf>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyInputCpf, {
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
