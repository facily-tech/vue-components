import Vue from 'vue';
import Vuetify from 'vuetify';
import FyDialogDelete from '../FyDialogDelete.vue';
import { mount, MountOptions, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyDialogDelete.ts', () => {
  // eslint-disable-line max-statements
  type Instance = InstanceType<typeof FyDialogDelete>;
  let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>;
  beforeEach(() => {
    mountFunction = (options?: MountOptions<Instance>) => {
      return mount<Instance>(FyDialogDelete, {
        vuetify: new Vuetify(),
        ...options,
      });
    };
  });

  it('should render component and match snapshot', () => {
    const wrapper = mountFunction({
      props: {},
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
