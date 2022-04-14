import Vue from 'vue';
import Vuetify from 'vuetify';
import FyInputDate from '../FyInputDate.vue';
import { mount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyInputDate.ts', () => {
  // eslint-disable-next-line
	let WRAPPER: Wrapper<any>;
  beforeEach(() => {
    WRAPPER = mount(FyInputDate, {
      vuetify: new Vuetify(),
      propsData: {
        value: '2022-10-01',
        text: '',
        mask: '#####-###',
      },
    });
  });

  test('Component exists', () => {
    expect(WRAPPER.exists()).toBeTruthy();
  });

  test('getDateToString test', async () => {
    const date = WRAPPER.vm.getDateToString(WRAPPER.vm.value);
    await WRAPPER.vm.$nextTick();
    expect(date).toBe('01/10/2022');
  });

  test('getDateToString test else block', async () => {
    WRAPPER.vm.value = false;
    const date = WRAPPER.vm.getDateToString(WRAPPER.vm.value);
    await WRAPPER.vm.$nextTick();
    expect(date).toBe('');
  });
});
