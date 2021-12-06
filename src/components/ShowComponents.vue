<template>
  <v-app>
    <FyDrawer :items="items" :brand="brand" :title="'Facily'" />

    <FyToolbar :items="toolbar">
      <template v-slot:btn>
        <v-btn color="primary">
          <v-icon size="20" class="mr-2"> mdi-plus </v-icon>
          Teste
        </v-btn>
      </template>
    </FyToolbar>

    <v-main class="layout-wrapper">
      <!-- Provides the application the proper gutter -->
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-img
              :src="require('../assets/facily-logo-site.png')"
              class="my-3"
              contain
              height="150"
            />
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
          </v-col>
        </v-row>

        <v-row>
          <v-col class="mb-5" cols="12">
            <div class="d-flex justify-center">
              <h2 class="headline font-weight-bold mb-3">Dialog</h2>
            </div>

            <div class="d-flex justify-center">
              <v-btn color="info" class="mr-5" @click="dialog = true"> Dialog Template </v-btn>

              <v-btn color="info" @click="deleteModel = true"> Dialog Delete </v-btn>

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

        <v-row>
          <v-col>
            <FySnackbar :snackbar="snackbar" @snackbar-close="onSnackbarClose()" />
          </v-col>
        </v-row>
        <v-row>
          <h2 class="headline font-weight-bold mb-3">Inputs</h2>
        </v-row>
        <v-row>
          <fy-input-default
            label="Nome"
            v-model="name"
            @input="getName"
          ></fy-input-default> => {{ name }}
        </v-row>
        <v-row>
          <fy-input-cpf label="CPF" v-model="cpf" @input="getCpf"></fy-input-cpf>
          => {{ cpf }}
        </v-row>
        <v-row>
          <fy-input-cnpj label="CNPJ" v-model="cnpj" @input="getCnpj"></fy-input-cnpj>
          => {{ cnpj }}
        </v-row>
        <v-row>
          <fy-input-phone label="Telefone" v-model="phone" @input="getPhone"></fy-input-phone>
          => {{ phone }}
        </v-row>
        <v-row>
          <fy-input-cep label="Cep" v-model="cep" @input="getCep"></fy-input-cep>
          => {{ cep }}
        </v-row>
        <v-row>
          <fy-input-date label="Data" v-model="data" @input="getDate"></fy-input-date>
          => {{ data }}
        </v-row>
        <v-row>
          <fy-input-time label="Time" v-model="time" @input="getTime"></fy-input-time>
          => {{ time }}
        </v-row>
        <v-row>
          <fy-input-date-time
            label="Data Hora"
            v-model="dateTime"
            @input="getDateTime"
          ></fy-input-date-time>
          => {{ dateTime }}
        </v-row>
        <v-row>
          <fy-input-currency
            label="Moeda"
            v-model="currency"
            @input="getCurrency"
          ></fy-input-currency>
          => {{ currency }}
        </v-row>
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
	</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { FyButtonInfo, FyButtonWarning, FyButtonDelete } from './Buttons';
import { FyUserLabel } from './UserLabel';
import { FyDialog, FyDialogDelete } from './Dialogs';
import { FyDrawer } from './Drawer';
import { FySnackbar } from './Snackbar';
import { FyToolbar } from './Toolbar';
import brand from '../assets/icon-logo-white.png';

import {
  FyInputCpf,
  FyInputCnpj,
  FyInputPhone,
  FyInputCep,
  FyInputDefault,
  FyInputDate,
  FyInputTime,
  FyInputDateTime,
  FyInputCurrency,
} from './Inputs';

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyButtonInfo,
    FyButtonWarning,
    FyButtonDelete,
    FyInputCpf,
    FyInputCnpj,
    FyInputPhone,
    FyInputCep,
    FyInputDefault,
    FyInputDate,
    FyInputTime,
    FyInputDateTime,
    FyInputCurrency,
    FyUserLabel,
    FyDialog,
    FyDialogDelete,
    FyDrawer,
    FySnackbar,
    FyToolbar,
  },

  data: () => ({
    brand,
		toolbar: {
			title: 'Design System',
			icon: 'mdi-credit-card-search-outline',
		},
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
    phone: '11955002211',
    cpf: '294.573.708-64',
    cnpj: '22.045.555/0001-65',
    data: new Date().toISOString(),
    time: '16:54',
    dateTime: new Date().toISOString(),
    currency: '105.20',
    deleteModel: false,
    dialog: false,
    item: {
      description: 'Produto',
      id: 1,
    },
    items: [
      {
        title: 'Teste',
        icon: 'mdi-credit-card-search-outline',
        enable: true,
        id: 'Teste',
        subItems: [{ link: '/', title: 'teste' }],
      },
      {
        title: 'Sair',
        icon: 'mdi-exit-to-app',
        enable: true,
      },
    ],
    snackbar: {
      model: true,
      timeout: 5000,
      bgColor: '#2196f3',
      fontColor: '#ffffff',
      text: 'teste',
      type: null,
    },
  }),

  methods: {
		onSnackbarClose() {
      this.snackbar.model = false;
		},
    getName(value) {
      this.name = value;
    },
    getCep(value) {
      this.cep = value;
    },
    getPhone(value) {
      this.phone = value;
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
});
</script>
