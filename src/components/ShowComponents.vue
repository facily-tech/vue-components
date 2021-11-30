<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/facily-logo-site.png')" class="my-3" contain height="150" />
      </v-col>

      <v-col class="mb-4">
        <h2 class="display-1 font-weight-bold mb-3">Welcome to Facily components gallery</h2>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Buttons</h2>

        <v-row justify="center">
          <fy-button-info>info</fy-button-info>

          <fy-button-warning class="mx-3">warning</fy-button-warning>

          <fy-button-delete>Deletar</fy-button-delete>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-6">User Label</h2>

        <v-row justify="center">
          <fy-user-label color="primary" label="Texto" caption="Texto">
            <span class="white--text">FA</span>
          </fy-user-label>

          <fy-user-label class="mx-10" color="green" label="Ícone" caption="Ícone">
            <v-icon dark>mdi-account-circle</v-icon>
          </fy-user-label>

          <fy-user-label color="red" label="Imagem" caption="Imagem">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </fy-user-label>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { FyButtonInfo, FyButtonWarning, FyButtonDelete } from './Buttons';
import { FyUserLabel } from './UserLabel';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyButtonInfo,
    FyButtonWarning,
    FyButtonDelete,
    FyUserLabel,
  },

  data() {
    return {
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    };
  },
});
</script>
