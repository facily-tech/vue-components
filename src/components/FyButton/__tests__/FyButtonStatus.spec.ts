import Vue from 'vue';
import Router from 'vue-router';
import FyButtonStatus from '../FyButtonStatus.vue';
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('FyButtonSearch', () => {
  // eslint-disable-next-line
  let router: Router;
  let localVue: typeof Vue;
  const event = 'active-control';

  beforeEach(() => {
    router = new Router();
    localVue = createLocalVue();
    localVue.use(Router);
  });

  it('should render component and match snapshot', () => {
    const wrapper = mount(FyButtonStatus, {
      localVue,
      vuetify: new Vuetify(),
      router,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('when status is active', () => {
    let wrapper: Wrapper<any>;

    beforeEach(() => {
      wrapper = mount(FyButtonStatus, {
        localVue,
        vuetify: new Vuetify(),
        router,
        propsData: {
          item: { id: 1 },
          status: true,
        },
      });
    });

    it('name', () => {
      expect(wrapper.vm.name).toBe('Ativo');
    });

    it('color', () => {
      expect(wrapper.vm.color).toBe('success');
    });

    it('event', () => {
      expect(wrapper.vm.event).toBe('inactitve');
    });

    it('when button is clicked', () => {
      expect(wrapper.emitted('click-status')).toBeFalsy();

      wrapper.find('[data-test="btn-status"]').trigger('click');

      expect(wrapper.emitted(event)).toBeTruthy();
      expect(wrapper.emitted(event)[0]).toEqual([
        {
          key: 'inactitve',
          value: {
            id: 1,
          },
        },
      ]);
    });
  });

  describe('when status is inactitve', () => {
    let wrapper: Wrapper<any>;

    beforeEach(() => {
      wrapper = mount(FyButtonStatus, {
        localVue,
        vuetify: new Vuetify(),
        router,
        propsData: {
          item: { id: 1 },
          status: false,
        },
      });
    });

    it('name', () => {
      expect(wrapper.vm.name).toBe('Inativo');
    });

    it('color', () => {
      expect(wrapper.vm.color).toBe('warning');
    });

    it('event', () => {
      expect(wrapper.vm.event).toBe('actitve');
    });

    it('when button is clicked', () => {
      expect(wrapper.emitted('click-status')).toBeFalsy();

      wrapper.find('[data-test="btn-status"]').trigger('click');

      expect(wrapper.emitted(event)).toBeTruthy();
      expect(wrapper.emitted(event)[0]).toEqual([
        {
          key: 'actitve',
          value: {
            id: 1,
          },
        },
      ]);
    });
  });
});
