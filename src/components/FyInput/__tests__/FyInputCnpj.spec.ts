import Vue from 'vue';
import Vuetify from 'vuetify';
import FyInputCnpj from '../FyInputCnpj.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyInputCnpj.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyInputCnpj>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyInputCnpj, {
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
