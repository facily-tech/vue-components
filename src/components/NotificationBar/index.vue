<template>
  <div class="fy-notication-bar">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon primary v-on="on">
          <v-icon v-if="numUnread">mdi-bell-badge</v-icon>
          <v-icon v-else>mdi-bell</v-icon>
        </v-btn>
      </template>
      <v-card max-width="400">
        <div>
          <v-card-title class="primary darken-1 title-card">
            <span class="text-h5 white--text">Notificações</span>
            <v-badge v-if="numUnread" color="green" :content="numUnread"></v-badge>
          </v-card-title>
        </div>
        <v-list v-if="list">
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in list"
              :key="i"
              @click="$emit('clickItem', item)"
              :class="{ selected: !item.isRead }"
            >
              <v-list-item-avatar>
                <v-icon :class="item.iconBg" dark v-text="item.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
                <v-list-item-subtitle v-text="item.time"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-center" @click="$emit('clickSeeAll')">
                  Veja todas notificações
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'FyNoticationBar',
  props: {
    numUnread: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>
.title-card {
  gap: 0.5rem;
}
.selected {
  background-color: rgba(0, 0, 0, 0.06);
}
</style>
