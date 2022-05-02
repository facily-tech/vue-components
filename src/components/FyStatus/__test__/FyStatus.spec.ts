import Vue from 'vue';
import Router from 'vue-router';
import FyStatus from '../FyStatus.vue';
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('FyStatus', () => {
  // eslint-disable-next-line
  let router: Router;
  let localVue: typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);
  });

  it('should render component and match snapshot', () => {
    const wrapper = mount(FyStatus, {
      localVue,
      vuetify: new Vuetify(),
      router,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('when switch is clicked', () => {
    const wrapper: Wrapper<any> = mount(FyStatus, {
      localVue,
      vuetify: new Vuetify(),
      router,
    });

    expect(wrapper.emitted('input')).toBeFalsy();

    wrapper.find('[data-test="select-status"]').trigger('click');

    expect(wrapper.emitted('input')).toBeTruthy();
  });
});
