<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    app
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

      <v-btn icon @click.stop="[(mini = !mini)]">
        <v-icon color="#ffffff"> mdi-chevron-left-circle </v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <div v-for="(item, key) in items" :key="key">
      <v-list-item @click="navigate(item)" v-if="item.enable">
        <template v-if="!item.subItems">
          <div class="custom">
            <v-list-item-icon class="mr-3" color="white">
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
              @click="navigate(subItem)"
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

<script>
export default {
  name: 'FyDrawer',

  data() {
    return {
      drawer: true,
      mini: true,
    };
  },

  props: {
    items: {
      default: () => [],
      type: Array,
      require: true,
    },

    brand: {
      default: () => '',
      type: String,
      require: true,
    },

    title: {
      default: () => '',
      type: String,
      require: true,
    },
  },

  methods: {
    navigate(item) {
      if (item.title === 'Sair') {
        this.$emit('logoff');
      } else if (this.$router.currentRoute.path !== item.link) {
        this.$router.push(item.link);
      }
    },
  },

  watch: {
    $route() {
      this.mini = true;
    },
  },
};
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
