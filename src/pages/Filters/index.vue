<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Filters</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Default</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-filter
                      :validForm="true"
                      :allTags="allTags"
                      @clear-tags="onClearTags()"
                      @remove-tag="onRemoveTag($event)"
                      @click-filter="controlFilters()"
                    >
                      <template v-slot:content>
                        <v-form ref="form">
                          <v-row>
                            <v-col cols="12" md="3" xl="2">
                              <fy-input
                                label="Filtro 01"
                                v-model="filters.filter1"
                                outlined
                                ref="filter1"
                                @input="getFilter1"
                              ></fy-input>
                            </v-col>
                            <v-col cols="12" md="3" xl="2">
                              <fy-input-cpf
                                label="CPF"
                                v-model="filters.filterCpf"
                                outlined
                                ref="filterCpf"
                                @input="getFilterCpf"
                              ></fy-input-cpf>
                            </v-col>
                            <v-col cols="12" md="3" xl="2">
                              <fy-input
                                label="Nome"
                                v-model="filters.nameFilter"
                                outlined
                                ref="nameFiler"
                                @input="getFilterName"
                              ></fy-input>
                            </v-col>
                            <v-col cols="12" md="3" xl="2">
                              <fy-input-phone
                                label="Telefone"
                                v-model="filters.filterPhone"
                                outlined
                                ref="filterPhone"
                                @input="getFilterPhone"
                              ></fy-input-phone>
                            </v-col>
                          </v-row>
                        </v-form>
                      </template>
                    </fy-filter>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Usage</v-list-item-title>
                <v-list-item-subtitle class="pb-4 pt-2">
                  <v-row>
                    <pre>
                      {{ contentUsageFilters }}
                    </pre>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Props</v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >Access the list of properties here (place link or list of
                  properties)</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { FyFilter, FyInput, FyInputCpf, FyInputPhone } from '@/index';

const contentUsageFilters = `
  <fy-filter
    :validForm="true"
    :allTags="allTags"
    @clear-tags="onClearTags()"
    @remove-tag="onRemoveTag($event)"
    @click-filter="controlFilters()"
  >
    <template v-slot:content>
      <v-form ref="form">
        <v-row>
          <v-col cols="12" md="3" xl="2">
            <fy-input
              label="Filtro 01"
              v-model="filters.filter1"
              outlined
              ref="filter1"
              @input="getFilter1"
            ></fy-input>
          </v-col>
          <v-col cols="12" md="3" xl="2">
            <fy-input-cpf
              label="CPF"
              v-model="filters.filterCpf"
              outlined
              ref="filterCpf"
              @input="getFilterCpf"
            ></fy-input-cpf>
          </v-col>
          <v-col cols="12" md="3" xl="2">
            <fy-input
              label="Nome"
              v-model="filters.nameFilter"
              outlined
              ref="nameFiler"
              @input="getFilterName"
            ></fy-input>
          </v-col>
          <v-col cols="12" md="3" xl="2">
            <fy-input-phone
              label="Telefone"
              v-model="filters.filterPhone"
              outlined
              ref="filterPhone"
              @input="getFilterPhone"
            ></fy-input-phone>
          </v-col>
        </v-row>
      </v-form>
    </template>
  </fy-filter>
`;

export default Vue.extend({
  name: 'PageFilters',
  components: { FyFilter, FyInput, FyInputCpf, FyInputPhone },
  data() {
    return {
      contentUsageFilters,
      allTags: [
        {
          key: 0,
          value: 'Filtro1',
          enable: false,
          type: 'filter1',
        },
        {
          key: 1,
          value: 'CPF',
          enable: false,
          type: 'filterCpf',
        },
        {
          key: 2,
          value: 'Nome',
          enable: false,
          type: 'nameFilter',
        },
        {
          key: 3,
          value: 'Telefone',
          enable: false,
          type: 'filterPhone',
        },
      ],
      filters: {
        filter1: '',
        filterCpf: '',
        filterPhone: '',
        nameFilter: '',
      },
      pagination: {
        page: 1,
        itemsPerPage: 50,
        totalItems: 10,
        totalPages: 0,
      },
    };
  },
  methods: {
    controlChangesTable(): void {
      // console.log('Change Table');
    },
    onClearTags(): void {
      // console.log('on Clear Tags ');
    },
    getFilter1(value): void {
      // console.log(value);
    },
    getFilterCpf(value): void {
      // console.log(value);
    },
    getFilterPhone(value): void {
      // console.log(value);
    },
    getFilterName(value): void {
      // console.log(value);
    },
    controlFilters() {
      this.enableTag();
    },

    enableTag() {
      this.allTags.map((item) => {
        item.enable = this.filters[item.type].length ? true : false;
      });
    },
    onRemoveTag($event) {
      this.pagination.page = 1;
      this.allTags.map((item) => {
        if (item.key === $event.key) {
          item.enable = false;
          this.filters[item.type] = '';
        }
      });
      this.controlChangesTable();
    },
  },
});
</script>

<style></style>
