<template>
  <v-toolbar color="transparent" v-bind="propsAndAttrs" :flat="flat" class="mb-4">
    <v-toolbar-title class="headline font-weight-medium" v-if="screenWidth > 768">
      {{ items.title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <fy-button v-if="backButton" @click="back" class="pa-3" outlined color="primary">
      <v-icon> mdi-arrow-left </v-icon>
      Voltar
    </fy-button>
    <div class="ml-2">
      <slot name="btn"></slot>
    </div>
    <v-menu offset-y v-if="items.options">
      <template v-slot:activator="{ on, attrs }">
        <fy-button icon color="primary" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </fy-button>
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
</template>

<script lang="ts">
import Vue from 'vue';
import { IItemsToolbar } from './types';
import FyButton from '@/components/FyButton/FyButton.vue';

export default Vue.extend({
  name: 'fy-toolbar',

  components: { FyButton },

  props: {
    items: {
      type: Object as () => IItemsToolbar,
      default: {} as IItemsToolbar,
      required: true,
    },
    backButton: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      screenWidth: 0,
    };
  },

  created(): void {
    this.changeScreen();
    window.addEventListener('resize', () => {
      this.changeScreen();
    });
  },

  computed: {
    propsAndAttrs(): Record<string, unknown> {
      return {
        ...this.$attrs,
        ...this.$props,
      };
    },
  },

  methods: {
    back(): void {
      this.$emit('back-event');
    },
    changeScreen(): void {
      this.screenWidth = window.screen.width;
    },
  },
});
</script>
