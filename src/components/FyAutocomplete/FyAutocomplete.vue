<template>
  <v-autocomplete
    class="fy-autocomplete"
    dense
    outlined
    :no-data-text="noData"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    <template #item="{ item, parent }">
      <v-list-item-content>
        <v-list-item-title v-if="!!$slots['item-data'] || !!$scopedSlots['item-data']">
          <slot name="item-data" v-bind="{ item, parent }" />
        </v-list-item-title>
        <v-list-item-title
          v-else-if="!!$attrs['item-text']"
          v-html="parent.genFilteredText(item[$attrs['item-text']])"
        ></v-list-item-title>
        <v-list-item-title v-else v-html="parent.genFilteredText(item)"></v-list-item-title>
      </v-list-item-content>
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
