<template>
  <v-app>
    <fy-drawer
      :items="items"
      :brand="require('../assets/icon-logo-white.png')"
      :title="'Facily'"
      componentNavigation
      v-on:logoff="logoff"
      v-on:changeComponent="changeComponent"
    />
    <fy-toolbar :items="toolbar" />

    <component :is="currentComponent" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { FyDrawer, FyToolbar } from '@/components';

import PageHome from '@/pages/Home/index.vue';
import PageHowToCreate from '@/pages/HowToCreate/index.vue';
import PageButtons from '@/pages/Buttons/index.vue';
import PageInputs from '@/pages/Inputs/index.vue';
import PageCharts from '@/pages/Charts/index.vue';
import PageDataTable from '@/pages/DataTable/index.vue';
import PageDialogs from '@/pages/Dialogs/index.vue';

import { IItemsDrawer } from './Drawer/types';
import { IItemsToolbar } from './Toolbar/types';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyDrawer,
    FyToolbar,
    PageHome,
    PageHowToCreate,
    PageButtons,
    PageCharts,
    PageDataTable,
    PageDialogs,
    PageInputs,
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
          title: 'Inputs',
          icon: 'mdi-alpha-t-box-outline',
          enable: true,
          id: 'PageInputs',
          link: 'page-inputs',
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
      ] as IItemsDrawer[],
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
