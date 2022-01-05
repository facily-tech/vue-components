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

import PageButtons from '@/pages/Buttons/index.vue';
import PageInputs from '@/pages/Inputs/index.vue';

import { IItems } from './Drawer/Drawer.vue';
import { IItemsToolbar } from './Toolbar/Toolbar.vue';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyDrawer,
    FyToolbar,
    PageButtons,
    PageInputs,
  },
  data() {
    return {
      currentComponent: 'page-buttons',
      items: [
        {
          title: 'Buttons',
          icon: 'mdi-cursor-default-click-outline',
          enable: true,
          id: 'PageButtons',
          link: 'page-buttons',
        },
        {
          title: 'Inputs',
          icon: 'mdi-alpha-t-box-outline',
          enable: true,
          id: 'PageInputs',
          link: 'page-inputs',
        },
        {
          title: 'Sair',
          icon: 'mdi-exit-to-app',
          enable: true,
        },
      ] as IItems[],
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
