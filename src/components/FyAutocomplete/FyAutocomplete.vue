<template>
  <v-autocomplete dense outlined v-bind="$attrs" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </v-autocomplete>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FyAutocomplete',
});
</script>
