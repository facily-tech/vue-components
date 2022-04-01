import Vue from 'vue';
import Vuetify from 'vuetify';
import FyInputDateTime from '../FyInputDateTime.vue';
import { mount, Wrapper } from '@vue/test-utils';
import moment from 'moment';

Vue.use(Vuetify);

describe('FyInputDateTime.ts', () => {
	// eslint-disable-next-line
	let WRAPPER: Wrapper<any>;
	beforeEach(() => {
		WRAPPER = mount(FyInputDateTime, {
			vuetify: new Vuetify(),
			propsData: {
				value: '2022-03-31T18:10:13',
				text: '',
				mask: '##/##/#### ##:##',
			},
		});
	});

	test('Component exists', () => {
		expect(WRAPPER.exists()).toBeTruthy();
	});

	test('getStringToDate test', async () => {
		const date = WRAPPER.vm.getStringToDate(WRAPPER.vm.value);
		const formate = moment(date).format('DD/MM/YYYY HH:mm');
		await WRAPPER.vm.$nextTick();
		expect(date).toBe(formate);
	});

	test('getStringToDate test else block', async () => {
		WRAPPER.vm.value = false;
		const date = WRAPPER.vm.getStringToDate(WRAPPER.vm.value);
		await WRAPPER.vm.$nextTick();
		expect(date).toBe('');
	});

	test('getDateToString test', async () => {
		// console.log(WRAPPER.vm.value);
		await WRAPPER.vm.$nextTick();
	});

	test('getDateToString test else block', async () => {
		WRAPPER.vm.value = false;
		const date = WRAPPER.vm.getDateToString(WRAPPER.vm.value);
		await WRAPPER.vm.$nextTick();
		expect(date).toBe('');
	});
});