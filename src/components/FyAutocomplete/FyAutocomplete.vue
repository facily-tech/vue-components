<template>
  <v-autocomplete dense outlined :no-data-text="noData" v-bind="$attrs" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    <template #item="{ item }">
      <slot name="item-data" v-bind="item" />
    </template>
  </v-autocomplete>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FyAutocomplete',

  props: {
    noData: {
      type: String,
      default: 'Nenhum item encontrado',
    },
  },
});
</script>
