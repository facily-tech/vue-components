<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <div v-html="markdownHome" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { marked } from 'marked';

import InstructionsMarkdown from './instructions.md';

export default Vue.extend({
  name: 'PageHome',
  computed: {
    markdownHome: function () {
      return marked(InstructionsMarkdown, { sanitize: true });
    },
  },
});
</script>

<style></style>
