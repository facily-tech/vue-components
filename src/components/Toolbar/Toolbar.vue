<template>
  <v-app-bar app color="transparent" elevation="1">
    <v-toolbar elevation="0">
      <v-icon class="mr-2" color="primary">
        {{ items.icon }}
      </v-icon>
      <v-toolbar-title v-if="screenWidth > 768">
        {{ items.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mr-2">
        <slot name="btn"></slot>
      </div>

      <v-btn v-if="backButton" @click="back" class="pa-3" elevation="0" outlined>
        <v-icon> mdi-arrow-left </v-icon>
        Voltar
      </v-btn>

      <v-menu offset-y v-if="items.options">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="primary" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(option, index) in items.options" :key="index">
            <v-list-item-title>
              {{ option.label }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { IItemsToolbar } from './types';

@Component
export default class FyToolbar extends Vue {
  screenWidth = 0;

  @Prop({
    type: Object as () => IItemsToolbar,
    default: {} as IItemsToolbar,
    required: true,
  })
  items!: IItemsToolbar;

  @Prop({ type: Boolean, default: false }) backButton!: boolean;

  created(): void {
    this.changeScreen();
    window.addEventListener('resize', () => {
      this.changeScreen();
    });
  }

  back(): void {
    this.$emit('back-event');
  }
  changeScreen(): void {
    this.screenWidth = window.screen.width;
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  ::v-deep.v-toolbar__title {
    color: #282b4a;
  }
}
</style>
