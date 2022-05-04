<template>
  <v-autocomplete dense outlined :no-data-text="noData" v-bind="$attrs" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    <template #item="{ item }">
      <slot
        name="item-data"
        v-if="!!$slots['item-data'] || !!$scopedSlots['item-data']"
        v-bind="item"
      />
      <v-list-item-content v-else-if="!!$attrs['item-text']">
        {{ item[$attrs['item-text']] }}
      </v-list-item-content>
      <v-list-item-content v-else>
        {{ item }}
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
