<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Drawer</h2>
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
                    <v-card height="400" width="256">
                      <v-navigation-drawer
                        v-model="drawer"
                        permanent
                        color="primary"
                        class="menuDrawer"
                      >
                        <v-list-item style="height: 64px" class="px-2">
                          <v-list-item-avatar style="border-radius: 0">
                            <v-img
                              :src="require('../../assets/icon-logo-white.png')"
                              :lazy-src="require('../../assets/icon-logo-white.png')"
                              style="cursor: pointer"
                              width="15px"
                              height="auto"
                            />
                          </v-list-item-avatar>

                          <v-list-item-title> Facily </v-list-item-title>

                          <v-btn icon>
                            <v-icon color="#ffffff"> mdi-chevron-left-circle </v-icon>
                          </v-btn>
                        </v-list-item>

                        <v-divider></v-divider>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>Facily</v-list-item-title>
                          </v-list-item-content>
                        </template>

                        <div v-for="(item, key) in items" :key="key">
                          <v-divider v-show="item.divider" />

                          <v-list-item v-if="item.enable">
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
                              <v-list-group
                                :value="!mini"
                                :prepend-icon="item.icon"
                                color="#ffffff"
                                v-if="item.enable"
                              >
                                <template v-slot:activator>
                                  <v-list-item-title v-text="item.title" no-action />
                                </template>

                                <v-list-item v-for="(subItem, key) in item.subItems" :key="key">
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
                    </v-card>
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
                  <v-tabs v-model="tab">
                    <v-tab href="#template">Template</v-tab>
                    <v-tab href="#script">Script</v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item value="template">
                      <pre>
                        {{ contentUsageDrawer }}
                      </pre>
                    </v-tab-item>

                    <v-tab-item value="script">
                      <pre>
                        {{ contentUsageDrawerScript }}
                      </pre>
                    </v-tab-item>
                  </v-tabs-items>
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
import { IItemsDrawer } from '@/components/Drawer/types';
import Vue from 'vue';

// import { FyDrawer } from '@/components/Drawer';

const contentUsageDrawer = `
  <fy-drawer
    :items="items"
    :brand="require('../assets/icon-logo-white.png')"
    :title="'Facily'"
    permanent
  />
`;

const contentUsageDrawerScript = `
  export default Vue.extend({
    name: 'Drawer',
    data() {
      return {
        items: [
          {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard-outline',
            enable: true,
            id: 'PageHome',
            link: '/',
          },
          {
            title: 'Home',
            icon: 'mdi-home-outline',
            enable: true,
            id: 'PageHome',
            link: '/home',
          },
          {
            title: 'Users',
            icon: 'mdi-account',
            enable: true,
            id: 'Users',
            subItems: [
              {
                title: 'Administrator',
                link: '/users/administrator',
              }
            ],
          },
        ],
      };
    },
  });
`;

export default Vue.extend({
  name: 'PageDrawer',
  data() {
    return {
      contentUsageDrawer,
      contentUsageDrawerScript,
      tab: '0',
      drawer: true,
      mini: true,
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard-outline',
          enable: true,
          id: 'PageHome',
          link: '/',
        },
        {
          title: 'Home',
          icon: 'mdi-home-outline',
          enable: true,
          id: 'PageHome',
          link: '/home',
        },
        {
          title: 'Users',
          icon: 'mdi-account',
          enable: true,
          id: 'Users',
          subItems: [
            {
              title: 'Administrator',
              link: '/users/administrator',
            },
          ],
        },
      ] as IItemsDrawer[],
    };
  },
});
</script>

<style lang="scss" scoped>
.menuDrawer {
  min-height: 380px;
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
