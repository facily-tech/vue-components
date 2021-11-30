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
        <v-row>
          <h2 class="headline font-weight-bold mb-3">Inputs</h2>
        </v-row>
        <v-row>
          <FyInputDefault solo label="Nome" />
        </v-row>
        <v-row>
          <FyInputCpf label="CPF" @input="getCpf" />
        </v-row>
        <v-row>
          <FyInputCnpj label="CNPJ" />
        </v-row>
        <v-row>
          <FyInputTel label="Telefone" />
        </v-row>
        <v-row>
          <FyInputCep label="Cep" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { FyButtonInfo, FyButtonWarning, FyButtonDelete } from './Buttons';
import {
  FyInputCpf, FyInputCnpj, FyInputTel, FyInputCep, FyInputDefault,
}
  from './Inputs';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyButtonInfo,
    FyButtonWarning,
    FyButtonDelete,
    FyInputCpf,
    FyInputCnpj,
    FyInputTel,
    FyInputCep,
    FyInputDefault,
  },

  data: () => ({
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
  }),
  methods: {
    getCpf(value) {
      console.log(value);
    },
  },
});
</script>
