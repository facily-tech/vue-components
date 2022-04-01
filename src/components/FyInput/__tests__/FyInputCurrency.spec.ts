import Vue from 'vue';
import Vuetify from 'vuetify';
import FyInputCurrency from '../FyInputCurrency.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyInputCurrency.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyInputCurrency>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyInputCurrency, {
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
