<template>
  <v-text-field v-bind="$attrs" v-on="$listeners" dense outlined>
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </v-text-field>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FyInput',
});
</script>
