<template>
  <v-app>
    <fy-drawer
      :items="items"
      :brand="require('../assets/icon-logo-white.png')"
      :title="'Facily'"
      :component-navigation="true"
      v-on:logoff="logoff"
      v-on:changeComponent="changeComponent"
    />
    <fy-toolbar :items="toolbar" :back-button="true" />

    <component :is="currentComponent" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { FyDrawer, FyToolbar } from '@/index';

import PageHome from '@/pages/Home/index.vue';
import PageHowToCreate from '@/pages/HowToCreate/index.vue';
import PageAutocomplete from '@/pages/Autocomplete/index.vue';
import PageButtons from '@/pages/Buttons/index.vue';
import PageInputs from '@/pages/Inputs/index.vue';
import PageCharts from '@/pages/Charts/index.vue';
import PageDataTable from '@/pages/DataTable/index.vue';
import PageDialogs from '@/pages/Dialogs/index.vue';
import PageDrawer from '@/pages/Drawer/index.vue';
import PageFilters from '@/pages/Filters/index.vue';
import PageInfoCard from '@/pages/InfoCard/index.vue';
import PageSnackbar from '@/pages/Snackbar/index.vue';

import { IDrawerItems } from './FyDrawer/types';
import { IItemsToolbar } from './FyToolbar/types';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyDrawer,
    FyToolbar,
    PageHome,
    PageHowToCreate,
    PageAutocomplete,
    PageButtons,
    PageCharts,
    PageDataTable,
    PageDialogs,
    PageDrawer,
    PageFilters,
    PageInfoCard,
    PageInputs,
    PageSnackbar,
  },
  data() {
    return {
      currentComponent: 'page-home',
      items: [
        {
          title: 'Home',
          icon: 'mdi-home-outline',
          enable: true,
          id: 'PageHome',
          link: 'page-home',
        },
        {
          title: 'Autocomplete',
          icon: 'mdi-card-search-outline',
          enable: true,
          id: 'PageAutocomplete',
          link: 'page-autocomplete',
        },
        {
          title: 'Buttons',
          icon: 'mdi-cursor-default-click-outline',
          enable: true,
          id: 'PageButtons',
          link: 'page-buttons',
        },
        {
          title: 'Charts',
          icon: 'mdi-chart-line',
          enable: true,
          id: 'PageCharts',
          link: 'page-charts',
        },
        {
          title: 'DataTable',
          icon: 'mdi-table-large',
          enable: true,
          id: 'PageDataTable',
          link: 'page-data-table',
        },
        {
          title: 'Dialogs',
          icon: 'mdi-card-bulleted-outline',
          enable: true,
          id: 'PageDialogs',
          link: 'page-dialogs',
        },
        {
          title: 'Drawer',
          icon: 'mdi-menu',
          enable: true,
          id: 'PageDrawer',
          link: 'page-drawer',
        },
        {
          title: 'Filters',
          icon: 'mdi-filter-outline',
          enable: true,
          id: 'PageFilters',
          link: 'page-filters',
        },
        {
          title: 'InfoCard',
          icon: 'mdi-card-bulleted-outline',
          enable: true,
          id: 'PageInfoCard',
          link: 'page-info-card',
        },
        {
          title: 'Inputs',
          icon: 'mdi-alpha-t-box-outline',
          enable: true,
          id: 'PageInputs',
          link: 'page-inputs',
        },
        {
          title: 'Snackbar',
          icon: 'mdi-alpha-t-box-outline',
          enable: true,
          id: 'PageSnackbar',
          link: 'page-snackbar',
        },
        {
          title: 'How to create',
          icon: 'mdi-lightbulb-outline',
          enable: true,
          link: 'page-how-to-create',
          divider: true,
        },
        {
          title: 'Logoff',
          icon: 'mdi-exit-to-app',
          enable: true,
        },
      ] as IDrawerItems[],
      toolbar: {
        title: 'Welcome to Facily components gallery',
      } as IItemsToolbar,
    };
  },
  methods: {
    changeComponent(value: string) {
      this.currentComponent = value;
    },
    logoff() {
      console.log('logoff');
    },
  },
});
</script>
