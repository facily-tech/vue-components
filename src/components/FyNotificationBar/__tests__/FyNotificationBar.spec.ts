import Vue from 'vue';
import Vuetify from 'vuetify';
import FyNotificationBar from '../FyNotificationBar.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyNotificationBar.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyNotificationBar>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount(FyNotificationBar, {
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
