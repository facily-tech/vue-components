import Vue from 'vue';
import Vuetify from 'vuetify';
import FyDrawer from '../FyDrawer.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyDrawer.ts', () => {
	let WRAPPER: Wrapper<any>;
	const $router = {
		push: jest.fn(),
		currentRoute: {
			path: '/rota',
		},
	};
	beforeEach(() => {
		WRAPPER = shallowMount(FyDrawer, {
			vuetify: new Vuetify(),
			propsData: {
				drawer: true,
				mini: true,
				items: [],
				brand: '',
				title: '',
				componentNavigation: true,
			},
			mocks: {
				$router,
			}
		});
	});

	test('Component exists', () => {
		expect(WRAPPER.exists()).toBeTruthy();
	});

	test('Test navigate', async () => {
		const item = '/teste'
		WRAPPER.vm.navigate(item);
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.emitted()['changeComponent']).toBeTruthy();
	});

	test('Test navigate else block', async () => {
		WRAPPER.vm.componentNavigation = false;
		const item = '/teste'
		WRAPPER.vm.navigate(item);
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.vm.$router.push).toHaveBeenCalledWith(item);
	});

	test('Test navigateItem', async () => {
		const item = {
			title: 'Sair',
			link: '/teste',
		};
		WRAPPER.vm.navigateItem(item);
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.emitted()['logoff']).toBeTruthy();
	});

	test('Test navigateItem else block', async () => {
		const item = {
			title: 'Teste',
			link: '/teste',
		};
		WRAPPER.vm.navigateItem(item);
		await WRAPPER.vm.$nextTick();
		expect(WRAPPER.vm.$router.push).toHaveBeenCalledWith(item.link);
	});

	test('Test navigateSubitem', async () => {
		const item = {
			title: 'teste',
			link: '/teste',
		};
		WRAPPER.vm.navigateSubitem(item);
		await WRAPPER.vm.$nextTick();
	});
});