import Vue from 'vue';
import Vuetify from 'vuetify';
import FyDataTable from '../FyDataTable.vue';
import { IDataTableHeaders, IDataTablePagination } from '../types';
import { shallowMount, Wrapper } from '@vue/test-utils';

Vue.use(Vuetify);

describe('FyDataTable.ts', () => {
	// eslint-disable-next-line
  let WRAPPER: Wrapper<any>;
  beforeEach(() => {
    WRAPPER = shallowMount(FyDataTable, {
      vuetify: new Vuetify(),
      propsData: {
        selectItems: [5, 10, 25, 50, 100],
        radioSelect: null,
        pageTable: null,
        pagination: {
          page: 1,
          itemsPerPage: 50,
          totalItems: 10,
          totalPages: 0,
        } as IDataTablePagination,
        headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'name',
          },
          {
            text: 'Telefone',
            align: 'start',
            value: 'phone',
            sortable: false,
          },
          {
            text: 'E-mail',
            align: 'start',
            value: 'mail',
          },
          {
            text: 'CPF',
            align: 'start',
            value: 'cpf',
            sortable: false,
          },
          {
            text: 'Role',
            align: 'start',
            value: 'role',
            sortable: false,
          },
          {
            text: 'Ações',
            align: 'center',
            value: 'actions',
            sortable: false,
          },
        ] as IDataTableHeaders[],
        items: [],
        loading: true,
        fyFormatMaskTaxId: jest.fn(),
        fyFormatMaskCurrency: jest.fn(),
        fyFormatMaskZipCode: jest.fn(),
        fyFormatMaskCellPhone: jest.fn(),
        fyFormatDate: jest.fn(),
      },
    });
  });

  test('Component exists', () => {
    expect(WRAPPER.exists()).toBeTruthy();
  });

  test('Test Pagination set', async () => {
    WRAPPER.vm.pagination.page = 2;
    WRAPPER.vm.pageTable = WRAPPER.vm.pagination.page ? WRAPPER.vm.pagination.page : 1;
    await WRAPPER.vm.$nextTick();
    expect(WRAPPER.vm.pageTable).toBe(2);
  });

  test('Test radioSelect set', async () => {
    WRAPPER.vm.radioSelect = true;
    await WRAPPER.vm.$nextTick();
    expect(WRAPPER.vm.radioSelect).toBe(true);
  });

  test('Check Color Case Alta', async () => {
    const color = WRAPPER.vm.checkColor('Alta');
    await WRAPPER.vm.$nextTick();
    expect(color).toBe('background-color: red;');
  });

  test('Check Color Case Média', async () => {
    const color = WRAPPER.vm.checkColor('Média');
    await WRAPPER.vm.$nextTick();
    expect(color).toBe('background-color: yellow;');
  });

  test('Check Color Case Baixa', async () => {
    const color = WRAPPER.vm.checkColor('Baixa');
    await WRAPPER.vm.$nextTick();
    expect(color).toBe('background-color: green;');
  });

  test('Check Color Case Null', async () => {
    const color = WRAPPER.vm.checkColor();
    await WRAPPER.vm.$nextTick();
    expect(color).toBe('background-color: gray;');
  });
});
