import Vue from 'vue';
import Vuetify from 'vuetify';
import FySnackbar from '../FySnackbar.vue';

import { shallowMount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FySnackbar.ts', () => {
	// eslint-disable-next-line
	let WRAPPER: Wrapper<any>;
	beforeEach(() => {
		WRAPPER = shallowMount(FySnackbar, {
			vuetify: new Vuetify(),
			propsData: {
				snackbar: {},
			},
		});
	});

	test('Component exists', () => {
		expect(WRAPPER.exists()).toBeTruthy();
	});

	test('Test snackbarClose', async () => {
		WRAPPER.vm.snackbarClose();
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.emitted()['snackbar-close']).toBeTruthy();
	});
});
