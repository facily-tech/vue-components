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

          <fy-button-delete>Delete</fy-button-delete>
        </v-row>
        <v-row>
          <h2 class="headline font-weight-bold mb-3">Inputs</h2>
        </v-row>
        <v-row>
          <FyInputDefault label="Nome" v-model="name" @input="getName"/> => {{name}}
        </v-row>
        <v-row>
          <FyInputCpf label="CPF" v-model="cpf" @input="getCpf" /> => {{cpf}}
        </v-row>
        <v-row>
          <FyInputCnpj label="CNPJ" v-model="cnpj" @input="getCnpj" /> => {{cnpj}}
        </v-row>
        <v-row>
          <FyInputTel label="Telefone" v-model="tel" @input="getTel" /> => {{tel}}
        </v-row>
        <v-row>
          <FyInputCep label="Cep"  v-model="cep" @input="getCep" /> => {{cep}}
        </v-row>
        <v-row>
          <FyInputDate label="Data" v-model="data" @input="getDate" /> => {{data}}
        </v-row>
        <v-row>
          <FyInputTime label="Time" v-model="time" @input="getTime" /> => {{time}}
        </v-row>
         <v-row>
          <FyInputDateTime label="Data Hora" v-model="dateTime" @input="getDateTime" />
          => {{dateTime}}
        </v-row>
        <v-row>
          <FyInputCurrency  label="Moeda" v-model="currency" @input="getCurrency" /> => {{currency}}
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-5" cols="12">
        <div class="d-flex justify-center">
          <h2 class="headline font-weight-bold mb-3">Dialog</h2>
        </div>

        <div class="d-flex justify-center">
          <v-btn color="primary" class="mr-5" @click="dialog = true"> Dialog Template </v-btn>

          <v-btn color="primary" @click="deleteModel = true"> Dialog Delete </v-btn>

          <FyDialog :dialog="dialog">
            <template v-slot:content>
              <v-card tile>
                <v-toolbar flat light color="primary">
                  <v-toolbar-title style="color: white"> Title </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="dialog = false">
                    <v-icon color="#ffffff"> mdi-close </v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text class="pa-10"> </v-card-text>
              </v-card>
            </template>
          </FyDialog>

          <FyDialogDelete
            :deleteModel="deleteModel"
            :item="item"
            @close-dialog="deleteModel = false"
            @confirm-dialog="deleteModel = false"
          ></FyDialogDelete>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { FyButtonInfo, FyButtonWarning, FyButtonDelete } from './Buttons';
import { FyDialog, FyDialogDelete } from './Dialogs';

import {
  FyInputCpf,
  FyInputCnpj,
  FyInputTel,
  FyInputCep,
  FyInputDefault,
  FyInputDate,
  FyInputTime,
  FyInputDateTime,
  FyInputCurrency,
}
  from './Inputs';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyButtonInfo,
    FyButtonWarning,
    FyButtonDelete,
<<<<<<< HEAD
    FyInputCpf,
    FyInputCnpj,
    FyInputTel,
    FyInputCep,
    FyInputDefault,
    FyInputDate,
    FyInputTime,
    FyInputDateTime,
    FyInputCurrency,
=======
    FyDialog,
    FyDialogDelete
>>>>>>> df898540a5e3c16439b652d6efd9a8989703c5f5
  },

  data: () => ({
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ],
<<<<<<< HEAD
    name: 'Fred',
    cep: '05050-112',
    tel: '11955002211',
    cpf: '294.573.708-64',
    cnpj: '22.045.555/0001-65',
    data: new Date().toISOString(),
    time: '16:54',
    dateTime: new Date().toISOString(),
    currency: '105.20',
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
    getCurrency(value) {
      this.currency = value;
    },
  },
=======
    deleteModel: false,
    dialog: false,
    item: {
      description: 'Produto',
      id: 1
    }
  })
>>>>>>> df898540a5e3c16439b652d6efd9a8989703c5f5
});
</script>
