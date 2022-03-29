import Vue from 'vue';
import Vuetify from 'vuetify';
import FyAutocomplete from '../FyAutocomplete.vue';
import { mount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyAutocomplete', () => {
  type Instance = InstanceType<typeof FyAutocomplete>;
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<Instance>;

  beforeEach(() => {
    document.body.setAttribute('data-app', 'true');

    mountFunction = (options = {}) => {
      return mount(FyAutocomplete, {
        ...options,
        vuetify: new Vuetify(),
      });
    };
  });

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });
});
