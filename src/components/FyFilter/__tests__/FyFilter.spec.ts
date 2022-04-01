import Vue from 'vue';
import Vuetify from 'vuetify';
import FyFilter from '../FyFilter.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyFilter.ts', () => {
	let WRAPPER: Wrapper<Vue>;
	beforeEach(() => {
		WRAPPER = shallowMount(FyFilter, {
			vuetify: new Vuetify(),
			propsData: {
				count: 0,
				allTags: [
					{
						key: 0,
						value: 'Nome',
						enable: true,
						type: 'q',
					},
				],
				validForm: true,
			},
		});
	});

	test('Component exists', () => {
		expect(WRAPPER.exists()).toBeTruthy();
	});

	test('checkAllTags test', async () => {
		WRAPPER.vm.checkAllTags();
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.vm.allTags[0].enable).toBeTruthy();
	});

	test('checkFilters test', async () => {
		WRAPPER.vm.count = 0;
		WRAPPER.vm.checkFilters();
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.vm.count).toBe(1);
	});

	test('checkFilters test else block', async () => {
		WRAPPER.vm.count = 0;
		WRAPPER.vm.allTags = [
			{
				key: 0,
				value: 'Nome',
				enable: false,
				type: 'q',
			},
		];
		WRAPPER.vm.checkFilters();
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.vm.count).toBe(0);
	});
});
