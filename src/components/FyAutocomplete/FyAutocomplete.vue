<template>
  <v-autocomplete dense outlined v-bind="$attrs" v-on="$listeners" />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FyAutocomplete',
});
</script>
