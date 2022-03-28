import Vue from 'vue';
import Vuetify from 'vuetify';
import FyUserLabel from '../FyUserLabel.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyUserLabel.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyUserLabel>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyUserLabel, {
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
