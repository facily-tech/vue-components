<template>
  <v-card class="filter-wrapper" elevation="0">
    <v-card-text v-if="checkAllTags()">
      <v-row dense>
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
    </v-card-text>
    <v-card-text>
      <v-row dense>
        <v-col md="9" class="text-left">
          <slot name="content"></slot>
        </v-col>
        <v-col md="3" class="text-right">
          <fy-button
            v-if="checkAllTags()"
            outlined
            color="primary"
            dark
            @click="$emit('clear-tags')"
            data-test="btn-clear-filter"
          >
            <v-icon> mdi-filter-off </v-icon>
            <span style="text-transform: capitalize"> Limpar</span>
          </fy-button>
          <fy-button
            color="primary"
            outlined
            class="ml-5"
            :disabled="!validForm"
            @click="$emit('click-filter')"
            data-test="btn-filter"
          >
            <v-icon>mdi-filter</v-icon>
            <span style="text-transform: capitalize"> Filtrar </span>
          </fy-button>
        </v-col>
      </v-row>
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
      return this.allTags?.some((item) => item.enable);
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
