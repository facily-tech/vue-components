<template>
  <div class="custom-data-tables-wrapper">
    <v-card elevation="0" class="pa-2">
      <slot name="top"></slot>
      <v-data-table
        :items="items"
        :headers="headers"
        :page.sync="pageTable"
        :items-per-page="pagination ? pagination.itemsPerPage : 9999"
        :loading="loading"
        class="custom-datatable"
        hide-default-footer
        loading-text="Carregando..."
        mobile-breakpoint="768"
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
                    <v-icon v-if="!action.loading">{{ action.icon }}</v-icon>
                    <v-progress-circular
                      v-else
                      indeterminate
                      :size="20"
                      :width="3"
                      disabled
                      @click.stop
                    />
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
          <div :key="headerKey" v-else-if="header.value === 'active'">
            <fy-button-status
              :item="item"
              :status="item.cols[header.value]"
              @active-control="$emit('active-control', $event)"
            />
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
          <slot name="no-data">
            <div class="pa-3 d-flex justify-center text-h5">Não foram encontrados resultados</div>
          </slot>
        </template>
      </v-data-table>
    </v-card>
    <v-row v-if="pagination" class="mt-2">
      <v-col cols="12" md="6">
        <div class="d-flex justify-md-start justify-center align-baseline">
          <span class="subtitle-2 mr-1">Exibindo</span>
          <v-select
            outlined
            v-model="pagination.itemsPerPage"
            :items="selectItems"
            type="number"
            dense
            style="max-width: 100px"
          />
          <div class="subtitle-2 ml-4" v-if="pagination.totalItems">
            Exibindo {{ pagination.itemsPerPage }} de {{ pagination.totalItems }} items
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-md-end justify-center">
        <v-pagination
          v-model="pagination.page"
          :length="pagination.totalPages || 0"
          :total-visible="10"
          class="fy-pagination"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FyButton, FyButtonStatus } from '@/components/FyButton';

import {
  fyFormatMaskTaxId,
  fyFormatMaskCurrency,
  fyFormatMaskZipCode,
  fyFormatMaskCellPhone,
  fyFormatDate,
} from '@/utils';
import { IDataTableHeaders, IDataTableRows, IDataTablePagination } from './types';

export default Vue.extend({
  name: 'fy-data-table',

  components: { FyButton, FyButtonStatus },

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
  .v-data-table-header {
    th {
      span {
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

.fy-pagination {
  .v-pagination__item,
  .v-pagination__navigation {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  .v-pagination__item--active.primary {
    background-color: #c5e0fe !important;
    color: #032dac !important;
  }
}

.fy-pagination-per-page {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
</style>
