import Vue from 'vue';
import Vuetify from 'vuetify';
import FyDialogDelete from '../FyDialogDelete.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import { IDialogDeleteItem } from '../types';

Vue.use(Vuetify);

describe('FyDialogDelete.ts', () => {
	let WRAPPER: Wrapper<any>;
	beforeEach(() => {
		WRAPPER = shallowMount(FyDialogDelete, {
			vuetify: new Vuetify(),
			propsData: {
				item: {} as IDialogDeleteItem,
				deleteModel: true,
				title: '',
				loading: false,
			},
		});
	});

	test('Component exists', () => {
		expect(WRAPPER.exists()).toBeTruthy();
	});

	test('Test close', async () => {
		WRAPPER.vm.close();
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.emitted()['close-dialog']).toBeTruthy();
	});

	test('Test submit', async () => {
		WRAPPER.vm.submit();
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.emitted()['close-dialog']).toBeTruthy();
		expect(WRAPPER.emitted()['confirm-dialog']).toBeTruthy();
	});
});
