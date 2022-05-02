import Vue from 'vue';
import Router from 'vue-router';
import FyButtonSearch from '../FyButtonSearch.vue';
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('FyButtonSearch', () => {
  // eslint-disable-next-line
  let router: Router;
  let localVue: typeof Vue;

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);
  });

  it('should render component and match snapshot', () => {
    const wrapper = mount(FyButtonSearch, {
      localVue,
      vuetify: new Vuetify(),
      router,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('when hideName should apply class', () => {
    const wrapper: Wrapper<any> = mount(FyButtonSearch, {
      localVue,
      vuetify: new Vuetify(),
      router,
      propsData: {
        hideName: true,
      },
    });

    expect(wrapper.vm.isHideName).toBe('d-none d-sm-flex');
  });

  it('when button is clicked', () => {
    const wrapper: Wrapper<any> = mount(FyButtonSearch, {
      localVue,
      vuetify: new Vuetify(),
      router,
    });

    expect(wrapper.emitted('click-filter')).toBeFalsy();

    wrapper.find('[data-test="btn-filter"]').trigger('click');

    expect(wrapper.emitted('click-filter')).toBeTruthy();
  });
});
