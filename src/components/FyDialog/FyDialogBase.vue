<template>
  <v-dialog v-bind="$attrs" v-on="$listeners" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FyDialogBase',
});
</script>
