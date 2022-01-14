<template>
  <div class="custom-data-tables-wrapper">
    <v-data-table
      :items="items"
      :headers="headers"
      :page.sync="page"
      :items-per-page="pagination ? pagination.itemsPerPage : 9999"
      :loading="loading"
      class="elevation-1 custom-datatable"
      hide-default-footer
      loading-text="Carregando..."
      mobile-breakpoint="0"
    >
      <template v-for="(header, headerKey) in headers" v-slot:[mountString(header)]="{ item }">
        <div class="d-flex justify-center" :key="headerKey" v-if="header.value === 'actions'">
          <div v-for="(action, actionKey) in item.actions" :key="actionKey">
            <p>
              {{ action.actionKey }}
            </p>
          </div>
        </div>
        <div v-else :key="headerKey">{{ item[header.value] }}</div>
      </template>
      <template v-slot:no-data>
        <div class="pa-3 d-flex justify-center">
          <v-alert :value="true" color="primary" type="error" style="max-width: 320px">
            Não foram encontrados resultados
          </v-alert>
        </div>
      </template>
    </v-data-table>
    <div v-if="pagination" class="text-center mt-8 d-md-flex justify-space-between align-md-center">
      <v-select
        outlined
        v-model="pagination.itemsPerPage"
        :items="selectItems"
        label="Itens por página"
        type="number"
        style="max-width: 150px"
        class="mt-0"
      ></v-select>
      <v-pagination
        v-model="pagination.page"
        :length="pagination.totalPages"
        :total-visible="10"
      ></v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { VDataTable } from 'vuetify/lib';

import { formatCurrency, formatZipCode, formatCellPhone, formatDate } from '@/utils/format.utils';
import { IDataTableHeaders, IDataTableRows, IDataTablePagination } from './types';

const BaseDataTable = Vue.extend(VDataTable);

@Component
export default class FyDataTable extends BaseDataTable {
  @Prop({
    type: Array as () => IDataTableHeaders[],
    default: [] as IDataTableHeaders[],
    required: true,
  })
  headers!: IDataTableHeaders[];

  @Prop({ type: Array as () => IDataTableRows[], default: [] as IDataTableRows[], required: true })
  items!: IDataTableRows[];

  @Prop({ type: Object as () => IDataTablePagination | null, default: null, required: true })
  pagination!: IDataTablePagination | null;

  @Prop({ type: Boolean, default: false, required: true }) loading!: boolean;

  selectItems = [5, 10, 25, 50, 100];
  radioSelect: string | boolean | number | null = null;

  page = this.pagination ? this.pagination.page : 1;

  formatCurrency = formatCurrency;
  formatZipCode = formatZipCode;
  formatCellPhone = formatCellPhone;
  formatDate = formatDate;

  @Watch('pagination', { deep: true })
  onChangePagination(value: IDataTablePagination | null): void {
    this.$emit('change-table', value);
  }

  @Watch('radioSelect')
  onChangeRadioSelect(): void {
    this.$emit('radio-select', this.radioSelect);
  }

  mountString(header: IDataTableHeaders): string {
    console.log('mount string ', header);
    return `item.${header.value}`;
  }
}
</script>
<style lang="scss">
.custom-datatable {
  .v-data-table__wrapper {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .v-data-table-header {
    th {
      span {
        color: #000;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
      }
    }
  }

  tbody tr {
    &:hover {
      background: #2047e0 !important;
      border-radius: 0 !important;

      td {
        color: white !important;
      }
    }

    td {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
    }
  }

  .link {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
