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

          <fy-button-cancel>Delete</fy-button-cancel>
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
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </fy-user-label>
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

          <fy-dialog :dialog="dialog">
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
          </fy-dialog>

          <fy-dialog-delete
            :deleteModel="deleteModel"
            :item="item"
            @close-dialog="deleteModel = false"
            @confirm-dialog="deleteModel = false"
          ></fy-dialog-delete>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-5" cols="12">
        <div class="d-flex justify-center">
          <h2 class="headline font-weight-bold mb-3">Chats</h2>

          <v-col class="mb-5" cols="12">
            <fy-gauge-chart :percent="10"></fy-gauge-chart>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  FyButtonInfo,
  FyButtonWarning,
  FyButtonCancel,
  FyUserLabel,
  FyDialog,
  FyDialogDelete,
  FyGaugeChart,
} from './index';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyButtonInfo,
    FyButtonWarning,
    FyButtonCancel,
    FyUserLabel,
    FyDialog,
    FyDialogDelete,
    FyGaugeChart,
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
    deleteModel: false,
    dialog: false,
    item: {
      description: 'Produto',
      id: 1,
    },
  }),
});
</script>
