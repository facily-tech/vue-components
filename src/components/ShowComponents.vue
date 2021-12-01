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
          <FyInputDefault label="Nome" v-model="name" @input="getName"/> - {{name}}
        </v-row>
        <v-row>
          <FyInputCpf label="CPF" v-model="cpf" @input="getCpf" /> {{cpf}}
        </v-row>
        <v-row>
          <FyInputCnpj label="CNPJ" v-model="cnpj" @input="getCnpj" /> - {{cnpj}}
        </v-row>
        <v-row>
          <FyInputTel label="Telefone" v-model="tel" @input="getTel" /> - {{tel}}
        </v-row>
        <v-row>
          <FyInputCep label="Cep"  v-model="cep" @input="getCep" /> - {{cep}}
        </v-row>
        <v-row>
          <FyInputDate label="Data" v-model="data" @input="getDate" /> - {{data}}
        </v-row>
        <v-row>
          <FyInputTime label="Time" v-model="time" @input="getTime" /> - {{time}}
        </v-row>
         <v-row>
          <FyInputDateTime label="Data Hora" v-model="dateTime" @input="getDateTime" />
          - {{dateTime}}
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { FyButtonInfo, FyButtonWarning, FyButtonDelete } from './Buttons';

import {
  FyInputCpf,
  FyInputCnpj,
  FyInputTel,
  FyInputCep,
  FyInputDefault,
  FyInputDate,
  FyInputTime,
  FyInputDateTime,
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
    FyInputDate,
    FyInputTime,
    FyInputDateTime,
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
    name: 'Fred',
    cep: '05050-112',
    tel: '11955002211',
    cpf: '294.573.708-64',
    cnpj: '22.045.555/0001-65',
    data: new Date().toISOString(),
    time: '16:54',
    dateTime: new Date().toISOString(),
  }),
  methods: {
    getName(value) {
      this.name = value;
    },
    getCep(value) {
      this.cep = value;
    },
    getTel(value) {
      this.tel = value;
    },
    getCpf(value) {
      this.cpf = value;
    },
    getCnpj(value) {
      this.cnpj = value;
    },
    getDate(value) {
      this.data = value;
    },
    getTime(value) {
      this.time = value;
    },
    getDateTime(value) {
      this.dateTime = value;
    },
  },
});
</script>
