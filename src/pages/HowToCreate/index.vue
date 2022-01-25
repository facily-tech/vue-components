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

import HowToCreateMarkdown from './how-to-create.md';

export default Vue.extend({
  name: 'PageHowToCreate',
  computed: {
    markdownHome: function () {
      return marked(HowToCreateMarkdown, { sanitize: true });
    },
  },
});
</script>

<style></style>
