<template>
  <v-card class="mb-5 filter-wrapper">
    <v-container fluid color="primary">
      <v-row class="mt-0">
        <v-col cols="12" md="8" class="d-flex justify-flex-start">
          <h2>Filtros ativos ({{ count }})</h2>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-end">
          <fy-button
            v-if="checkAllTags()"
            outlined
            color="primary"
            dark
            @click="$emit('clear-tags')"
          >
            <v-icon> mdi-delete </v-icon>
            <span style="text-transform: capitalize"> Limpar</span>
          </fy-button>
          <fy-button
            color="primary"
            class="ml-5"
            :disabled="!validForm"
            @click="$emit('click-filter')"
          >
            <v-icon>mdi-filter-variant</v-icon>
            <span style="text-transform: capitalize"> Filtrar </span>
          </fy-button>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="12">
          <ul class="d-flex no-wrap pa-0" style="list-style: none">
            <li v-for="(item, key) in allTags" :key="key">
              <v-chip
                v-if="item.enable"
                class="ml-0 ma-2"
                close
                color="primary"
                text-color="white"
                @click:close="$emit('remove-tag', item)"
              >
                {{ item.value }}
              </v-chip>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-card-text>
      <div class="text-left pa-2">
        <slot name="content"></slot>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import { FyButton } from '@/index';

import { IFiltersAllTags } from './types';

export default Vue.extend({
  name: 'fy-filter',

  components: { FyButton },

  props: {
    allTags: {
      type: Array as () => IFiltersAllTags[],
      default: [] as IFiltersAllTags[],
      required: true,
    },
    validForm: { type: Boolean, default: false, required: true },
  },

  data() {
    return {
      count: 0,
    };
  },

  watch: {
    allTags: {
      handler() {
        this.checkFilters();
      },
      deep: true,
    },
  },

  methods: {
    checkAllTags(): boolean {
      return this.allTags.some((item) => item.enable);
    },

    checkFilters(): void {
      this.count = 0;
      this.allTags.map((item) => {
        if (item.enable) this.count++;
      });
    },
  },
});
</script>
