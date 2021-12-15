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
      <template v-for="(k, key) in headers" v-slot:[mountString(k)]="{ item }">
        <div class="d-flex justify-center" :key="key" v-if="k.value === 'actions'">
          <div v-for="(x, key) in item.actions" :key="key">
            <p
              v-if="x.type === 'link'"
              class="mb-1 link"
              :style="[`color: ${x.color}`, x.havehover.key ? `hover: ${x.havehover.color}` : '']"
              @click="$emit(x.actionKey, item)"
            >
              {{ x.label }}
            </p>
            <v-tooltip bottom v-else-if="x.type === 'icon-btn'">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mr-2"
                  text
                  icon
                  v-bind="attrs"
                  v-on="on"
                  :color="x.color"
                  @click="$emit(x.actionKey, item)"
                >
                  <v-icon>{{ x.icon }}</v-icon>
                </v-btn>
              </template>
              <span color="secundary"> {{ x.label }}</span>
            </v-tooltip>
          </div>
        </div>
        <div :key="key" v-else-if="k.value === 'price' || k.value === 'total'">
          {{ formatCurrency(item[k.value]) }}
        </div>
        <div :key="key" v-else-if="k.value === 'zipCode'">
          {{ formatZipCode(item[k.value]) }}
        </div>
        <div :key="key" v-else-if="k.value === 'phone'">
          {{ formatCellPhone(item[k.value]) }}
        </div>
        <div :key="key" v-else-if="k.value === 'cpf'">
          {{ formatCpf(item[k.value]) }}
        </div>
        <div :key="key" v-else-if="k.value === 'radioOption'">
          <v-radio-group v-model="radioSelect">
            <v-radio :label="item[k.value]" :value="item[k.value]" color="primary"></v-radio>
          </v-radio-group>
        </div>
        <div :key="key" v-else-if="k.value === 'active'" style="cursor: pointer">
          <v-icon
            color="green"
            v-if="item[k.value]"
            @click="
              $emit('active-control', {
                key: 'inactitve',
                value: item,
              })
            "
          >
            mdi-eye-outline
          </v-icon>
          <v-icon
            color="red"
            v-if="!item[k.value]"
            @click="
              $emit('active-control', {
                key: 'actitve',
                value: item,
              })
            "
          >
            mdi-eye-off
          </v-icon>
        </div>
        <div
          :key="key"
          v-else-if="k.value === 'data' || k.value === 'valid_from' || k.value === 'valid_until'"
        >
          <p class="mb-0">
            {{ formatDate(item[k.value]) }}
          </p>
        </div>
        <div :key="key" v-else>
          <template slot:item[k.value]="{ item }">
            {{ item[k.value] }}
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

<script>
import { FormatCurrency, formatZipCode, formatCellPhone, formatDate, formatCpf } from '@/utils/format.utils';

export default {
  name: 'FyDataTable',

  data() {
    return {
      selectItems: [5, 10, 25, 50, 100],
      FormatCurrency,
      formatZipCode,
      formatCellPhone,
      formatDate,
      formatCpf,
      radioSelect: null,
      page: this.pagination ? this.pagination.page : 1,
    };
  },
  props: {
    headers: {
      type: Array,
      require: true,
      default: () => [],
    },
    items: {
      type: Array,
      require: true,
      default: () => [],
    },
    pagination: {
      type: Object,
      require: true,
      default: null,
    },
    loading: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  methods: {
    mountString(k) {
      return `item.${k.value}`;
    },
  },
  watch: {
    pagination: {
      handler(value) {
        this.$emit('change-table', value);
      },
      deep: true,
    },
    radioSelect() {
      this.$emit('radio-select', this.radioSelect);
    },
  },
};
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
        color: #000v-data-table-header;
        font-weight: 700;
        font-size: 16px;
        spacing: normal;
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
