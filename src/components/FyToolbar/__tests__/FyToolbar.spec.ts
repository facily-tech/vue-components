import Vue from 'vue';
import Vuetify from 'vuetify';
import FyToolbar from '../FyToolbar.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyToolbar.ts', () => {
	// eslint-disable-next-line
	let WRAPPER: Wrapper<any>;
	beforeEach(() => {
		WRAPPER = shallowMount(FyToolbar, {
			vuetify: new Vuetify(),
			propsData: {
				screenWidth: 0,
			},
		});
	});

	test('Component exists', () => {
		expect(WRAPPER.exists()).toBeTruthy();
	});

	test('Back test', async () => {
		WRAPPER.vm.back();
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.emitted()['back-event']).toBeTruthy();
	});
});
