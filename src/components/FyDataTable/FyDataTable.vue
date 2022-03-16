<template>
  <div class="custom-data-tables-wrapper">
    <fy-data-table-base
      :items="items"
      :headers="headers"
      :page.sync="pageTable"
      :items-per-page="pagination ? pagination.itemsPerPage : 9999"
      :loading="loading"
      class="elevation-1 custom-datatable"
      hide-default-footer
      loading-text="Carregando..."
      mobile-breakpoint="0"
      v-bind="propsAndAttrs"
      v-on="$listeners"
    >
      <template v-for="(header, headerKey) in headers" v-slot:[mountString(header)]="{ item }">
        <div class="d-flex justify-center" :key="headerKey" v-if="header.value === 'actions'">
          <div v-for="(action, actionKey) in item.actions" :key="actionKey">
            <p
              v-if="action.type === 'link'"
              class="mb-1 link"
              :style="[
                `color: ${action.color}`,
                action.havehover.key ? `hover: ${action.havehover.color}` : '',
              ]"
              @click="$emit(action.actionKey, item.cols)"
            >
              {{ action.label }}
            </p>
            <v-tooltip bottom v-else-if="action.type === 'icon-btn'">
              <template v-slot:activator="{ on, attrs }">
                <fy-button
                  class="mr-2"
                  text
                  icon
                  v-bind="attrs"
                  v-on="on"
                  :color="action.color"
                  @click="$emit(action.actionKey, item)"
                >
                  <v-icon>{{ action.icon }}</v-icon>
                </fy-button>
              </template>
              <span color="secundary"> {{ action.label }}</span>
            </v-tooltip>
          </div>
        </div>
        <div :key="headerKey" v-else-if="header.value === 'tax_id'">
          {{ fyFormatMaskTaxId(item.cols[header.value]) }}
        </div>
        <div :key="headerKey" v-else-if="header.value === 'price' || header.value === 'total'">
          {{ fyFormatMaskCurrency(item.cols[header.value]) }}
        </div>
        <div :key="headerKey" v-else-if="header.value === 'zipCode'">
          fyF{ forMaskmatZipCode(item.cols[header.value]) }}
        </div>
        <div :key="headerKey" v-else-if="header.value === 'phone'">
          {{ fyFormatMaskCellPhone(item.cols[header.value]) }}
        </div>
        <div :key="headerKey" v-else-if="header.value === 'radioOption'">
          <v-radio-group v-model="radioSelect">
            <v-radio
              :label="item.cols[header.value]"
              :value="item.cols[header.value]"
              color="primary"
            ></v-radio>
          </v-radio-group>
        </div>
        <div :key="headerKey" v-else-if="header.value === 'active'" style="cursor: pointer">
          <v-icon
            color="green"
            v-if="item.cols[header.value]"
            @click="$emit('active-control', { key: 'inactitve', value: item })"
          >
            mdi-eye-outline
          </v-icon>
          <v-icon
            color="red"
            v-if="!item.cols[header.value]"
            @click="$emit('active-control', { key: 'actitve', value: item })"
          >
            mdi-eye-off
          </v-icon>
        </div>
        <div
          :key="headerKey"
          v-else-if="
            header.value === 'data' ||
            header.value === 'valid_from' ||
            header.value === 'valid_until'
          "
        >
          <p class="mb-0">fyF{ formatDate(item.cols[header.value]) }}</p>
        </div>
        <div
          class="container-truncate"
          :key="headerKey"
          v-else-if="
            item.cols[header.value] !== null &&
            typeof item.cols[header.value] === 'object' &&
            !Array.isArray(item.cols[header.value])
          "
        >
          <template slot:item.cols[header.value]="{ item }">
            {{ item.cols[header.value].title }}
            <span class="d-block text-caption truncate">{{
              item.cols[header.value].subtitle
            }}</span>
          </template>
        </div>
        <div :key="headerKey" v-else-if="header.value === 'priority'">
          <div class="priority" :style="checkColor(item.cols[header.value])">
            <div class="mb-0 ml-7 priority-value">
              {{ item.cols[header.value] ? item.cols[header.value] : 'Indefinida' }}
            </div>
          </div>
        </div>
        <div :key="headerKey" v-else-if="!!$slots[header.value] || !!$scopedSlots[header.value]">
          <slot :name="header.value" v-bind="item.cols">
            <template slot:item.cols[header.value]="{ item }">
              {{ item.cols[header.value] }}
            </template>
          </slot>
        </div>
        <div :key="headerKey" v-else>
          <template slot:item.cols[header.value]="{ item }">
            {{ item.cols[header.value] }}
          </template>
        </div>
      </template>
      <template v-slot:no-data>
        <div class="pa-3 d-flex justify-center">
          <v-alert :value="true" color="primary" type="error" style="max-width: 320px">
            Não foram encontrados resultados
          </v-alert>
        </div>
      </template>
    </fy-data-table-base>
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
import { VDataTable } from 'vuetify/lib';

import FyButton from '@/components/FyButton';

import FyDataTableBase from './FyDataTableBase';

import {
  fyFormatMaskTaxId,
  fyFormatMaskCurrency,
  fyFormatMaskZipCode,
  fyFormatMaskCellPhone,
  fyFormatDate,
} from '@/utils';
import { IDataTableHeaders, IDataTableRows, IDataTablePagination } from './types';

interface BaseDataTableOptions extends InstanceType<typeof BaseDataTable> {
  headers: IDataTableHeaders[];
  items: IDataTableRows[];
  pagination: IDataTablePagination | null;
  loading: boolean;
}

const BaseDataTable = Vue.extend({ mixins: [VDataTable] });

export default BaseDataTable.extend<BaseDataTableOptions>().extend({
  name: 'fy-data-table',

  components: { FyButton, FyDataTableBase },

  props: {
    headers: {
      type: Array as () => IDataTableHeaders[],
      default: [] as IDataTableHeaders[],
      required: true,
    },
    items: {
      type: Array as () => IDataTableRows[],
      default: [] as IDataTableRows[],
      required: true,
    },
    pagination: {
      type: Object as () => IDataTablePagination | null,
      default: null,
      required: true,
    },
    loading: { type: Boolean, default: false, required: true },
  },

  data() {
    return {
      selectItems: [5, 10, 25, 50, 100],
      radioSelect: null as string | boolean | number | null,

      pageTable: this.pagination ? this.pagination.page : 1,

      fyFormatMaskTaxId,
      fyFormatMaskCurrency,
      fyFormatMaskZipCode,
      fyFormatMaskCellPhone,
      fyFormatDate,
    };
  },

  watch: {
    pagination: {
      handler(value: IDataTablePagination | null): void {
        this.$emit('change-table', value);
      },
      deep: true,
    },

    radioSelect: {
      handler(): void {
        this.$emit('radio-select', this.radioSelect);
      },
    },
  },

  computed: {
    propsAndAttrs(): Record<string, unknown> {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { pagination, ...rest } = this.$props;

      return {
        ...this.$attrs,
        ...rest,
      };
    },
  },

  methods: {
    mountString(header: IDataTableHeaders): string {
      return `item.${header.value}`;
    },

    checkColor($event: string): string {
      const expr = $event;
      switch (expr) {
        case 'Alta':
          return `background-color: red;`;
        case 'Média':
          return `background-color: yellow;`;
        case 'Baixa':
          return `background-color: green;`;
        default:
          return `background-color: gray;`;
      }
    },
  },
});
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
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
      }
    }
  }

  tbody tr {
    td {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      & .container-truncate {
        width: 90%;
        display: grid;
        & .truncate {
          font-size: 0.8rem;
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }

  .link {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }

  .priority {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0;

    & .priority-value {
      width: max-content;
    }
  }
}
</style>
