import Vue from 'vue';
import Vuetify from 'vuetify';
import FyInputCep from '../FyInputCep.vue';
import { mount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyInputCep.ts', () => {
  // eslint-disable-next-line
	let WRAPPER: Wrapper<any>;
  beforeEach(() => {
    WRAPPER = mount(FyInputCep, {
      vuetify: new Vuetify(),
      propsData: {
        value: '35310903801',
        text: '',
        cepRule: [
          (value: string): boolean | string => {
            if (value && value !== '')
              return value.length === 9 || 'O campo Cep deve conter 8 números';

            return false;
          },
        ],
        mask: '#####-###',
      },
    });
  });

  test('Component exists', () => {
    expect(WRAPPER.exists()).toBeTruthy();
  });
});
