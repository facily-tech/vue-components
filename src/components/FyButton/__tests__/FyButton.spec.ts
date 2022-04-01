import Vue from 'vue';
import Router from 'vue-router';
import FyButton from '../FyButton.vue';
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('FyButton', () => {
	// eslint-disable-next-line
  let mountFunction: (options?: Record<string, unknown>) => Wrapper<any>;
  let router: Router;
  let localVue: typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);

    mountFunction = (options = {}) => {
      return mount(FyButton, {
        localVue,
        vuetify: new Vuetify(),
        router,
        ...options,
      });
    };
  });

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot();
  });
});
