<template>
  <v-dialog v-bind="$attrs" v-on="$listeners">
    <slot name="content"></slot>
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FyDialogBase',
});
</script>
