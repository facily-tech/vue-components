<template>
  <v-text-field v-bind="$attrs" v-on="$listeners" dense outlined />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FyInput',
})
</script>
