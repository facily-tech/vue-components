<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    app
    expand-on-hover
    color="primary"
    class="menu"
  >
    <v-list-item style="height: 64px" class="px-2">
      <v-list-item-avatar style="border-radius: 0">
        <v-img :src="brand" :lazy-src="brand" style="cursor: pointer" width="15px" height="auto" />
      </v-list-item-avatar>

      <v-list-item-title>
        {{ title }}
      </v-list-item-title>

      <fy-button icon @click.stop="[(mini = !mini)]">
        <v-icon color="#ffffff"> mdi-chevron-left-circle </v-icon>
      </fy-button>
    </v-list-item>

    <v-divider></v-divider>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <div v-for="(item, key) in items" :key="key">
      <v-divider v-show="item.divider" />

      <v-list-item @click="navigateItem(item)" v-if="item.enable">
        <template v-if="!item.subItems">
          <div class="custom">
            <v-list-item-icon class="mr-3" color="white" :title="item.title">
              <v-icon v-text="item.icon" color="#ffffff" class="mr-0" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </div>
        </template>

        <template v-else>
          <v-list-group :value="!mini" :prepend-icon="item.icon" color="#ffffff" v-if="item.enable">
            <template v-slot:activator>
              <v-list-item-title v-text="item.title" no-action />
            </template>

            <v-list-item
              v-for="(subItem, key) in item.subItems"
              :key="key"
              @click="navigateSubitem(subItem)"
            >
              <template>
                <v-list-item-content>
                  <v-list-item-title>
                    <span>{{ subItem.title }}</span>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';

import { VNavigationDrawer } from 'vuetify/lib';

import { FyButton } from '@/index';

import { IDrawerItems, IDrawerSubItems } from './types';

const BaseDrawer = Vue.extend({ mixins: [VNavigationDrawer] });

interface BaseDrawerOptions extends InstanceType<typeof BaseDrawer> {
  items: IDrawerItems[];
  brand: string;
  title: string;
  componentNavigation: boolean;
}

export default BaseDrawer.extend<BaseDrawerOptions>().extend({
  name: 'fy-drawer',

  components: { FyButton },

  props: {
    items: { type: Array as () => IDrawerItems[], default: [] as IDrawerItems[] },
    brand: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true },
    componentNavigation: { type: Boolean, default: false },
  },

  data() {
    return {
      drawer: true,
      mini: true,
    };
  },

  methods: {
    navigate(link: string): void {
      if (this.componentNavigation) {
        this.$emit('changeComponent', link);
      } else {
        this.$router.currentRoute.path !== link && this.$router.push(link);
      }
    },

    navigateItem(item: IDrawerItems): void {
      if (item.title === 'Sair') {
        this.$emit('logoff');
      } else {
        item.link && this.navigate(item.link);
      }
    },

    navigateSubitem(subItem: IDrawerSubItems): void {
      subItem.link && this.navigate(subItem.link);
    },
  },
});
</script>

<style lang="scss" scoped>
.menu {
  min-height: 100vh;
  height: 100% !important;

  ::v-deep.v-list-item__icon {
    &:first-child {
      margin-right: 11px;
    }
  }

  ::v-deep.v-list-item {
    text-align: left;
    padding: 0;
    min-height: 20px;
  }
  /* ::v-deep.v-navigation-drawer__content > div:nth-last-child(-n + 2) .v-list-item {
    height: 38px;
  } */

  ::v-deep.v-icon {
    color: #fff;
  }

  ::v-deep.v-list-group {
    width: 100%;
  }

  ::v-deep.v-list-group__header {
    padding: 0 16px;

    .v-list-item__title {
      text-align: left;
      padding: 0;
      font-weight: 600;
      font-size: 14px;
      color: white;
    }
  }

  .custom {
    width: 100%;
    display: flex;
    padding: 0 16px;
  }
  ::v-deep.v-list-item__title {
    padding: 0 16px;
    font-weight: 600;
    font-size: 14px;
    color: white;
  }
  ::v-deep.v-divider {
    border-color: #ffffff;
  }
}
</style>
