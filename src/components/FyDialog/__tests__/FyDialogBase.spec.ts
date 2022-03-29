import Vue from 'vue';
import Vuetify from 'vuetify';
import FyDialogBase from '../FyDialogBase.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyDialogBase.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDialogBase>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyDialogBase, {
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
