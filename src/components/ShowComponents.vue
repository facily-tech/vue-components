<template>
  <v-app>
    <FyDrawer :items="items" :brand="require('../assets/icon-logo-white.png')" :title="'Facily'" />
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
        <v-row class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">Notificação</h2>
        </v-row>
        <v-row>
          <FyNoticationBar
            numUnread="2"
            :list="listNotification"
            @clickItem="clickNotif"
            @clickSeeAll="clickAllNotif"
          />
        </v-row>
        <v-row>
          <h2 class="headline font-weight-bold mb-3">Inputs</h2>
        </v-row>
        <v-row>
          <fy-input-default label="Nome" v-model="name" @input="getName"></fy-input-default>
          => {{ name }}
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
          <h2 class="headline font-weight-bold mb-6 text-center">User Label</h2>
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
        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-6 text-center">Info Card</h2>
          <v-row justify="center">
            <fy-info-card
              title="Enhance your Campaign for better outreach"
              caption="Upgrade Account"
              img="facily-logo-site.png"
            >
            </fy-info-card>
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
        <v-row>
          <v-col class="mb-5" cols="12">
            <fy-filter-data
              :validForm="true"
              :allTags="allTags"
              @clear-tags="onClearTags()"
              @remove-tag="onRemoveTag($event)"
              @click-filter="controlFilters()"
            >
              <template v-slot:content>
                <v-form
                  ref="form"
                >
                  <v-row>
                    <v-col cols="12" md="3" xl="2">
                      <fy-input-default
                       label="Filtro 01"
                       v-model="filters.filter1"
                       outlined
                      ref="filter1"
                       @input="getFilter1"
                      ></fy-input-default>
                    </v-col>
                    <v-col cols="12" md="3" xl="2">
                      <fy-input-cpf
                        label="CPF"
                        v-model="filters.filterCpf"
                        outlined
                        ref="filterCpf"
                        @input="getFilterCpf"
                      ></fy-input-cpf>
                    </v-col>
                    <v-col cols="12" md="3" xl="2">
                      <fy-input-default
                        label="Nome"
                        v-model="filters.nameFilter"
                        outlined
                        ref="nameFiler"
                        @input="getFilterName"
                      ></fy-input-default>
                    </v-col>
                    <v-col cols="12" md="3" xl="2">
                      <fy-input-phone
                        label="Telefone"
                        v-model="filters.filterPhone"
                        outlined
                        ref="filterPhone"
                        @input="getFilterPhone"
                      ></fy-input-phone>
                    </v-col>
                  </v-row>
                </v-form>
              </template>
            </fy-filter-data>
          </v-col>
          </v-row>
        <v-row>
          <v-col class="mb-5" cols="12">
            <FyDataTable
              :items="tableItems"
              :headers="table.headers"
              :pagination="pagination"
              :loading="false"
              @details="checkDetails($event)"
              @edit="checkEdit($event)"
              @change-table="controlChangesTable"
              @delete="deleteModel = true"
              @active-control="onActiveControl($event)"
            />
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
		</v-container>
	</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { FyButtonInfo, FyButtonWarning, FyButtonDelete } from './Buttons';
import { FyNoticationBar } from './NotificationBar';
import { FyUserLabel } from './UserLabel';
import { FyInfoCard } from './InfoCard';
import { FyDialog, FyDialogDelete } from './Dialogs';
import { FyDrawer } from './Drawer';
import { FySnackbar } from './Snackbar';
import { FyToolbar } from './Toolbar';
import { FyFilterData } from './Filters'
// import brand from '../assets/icon-logo-white.png';
import { FyDataTable } from './DataTable';

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

interface Users {
  name: string;
  phone: string;
  mail: string;
  cpf: string;
  role: string;
  actions: Array<Actions>;
}
interface Actions {
  type: string;
  color: string;
  actionKey: string;
  icon: string;
  label: string;
}

export default Vue.extend({
  name: 'ShowComponents',

  components: {
    FyButtonInfo,
    FyButtonWarning,
    FyButtonDelete,
    FyNoticationBar,
    FyUserLabel,
    FyInfoCard,
    FyInputCpf,
    FyInputCnpj,
    FyInputPhone,
    FyInputCep,
    FyInputDefault,
    FyInputDate,
    FyInputTime,
    FyInputDateTime,
    FyInputCurrency,
    FyDialog,
    FyDialogDelete,
    FyDrawer,
    FySnackbar,
    FyToolbar,
    FyFilterData,
    FyDataTable,
  },
  computed: {
    tableItems(): Users[] {
      const nItems = [...this.table.items];
      return nItems.map((item) => {
        return {
          ...item,
          actions: this.table.actions,
        };
      });
    },
  },
  data() {
    return {
      // brand,
      count: 0,
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
      listNotification: [
        {
          text: 'Real-Time Yes Bla vcf ccas',
          time: '2 minutos atrás',
          icon: 'mdi-clock',
          iconBg: 'blue',
          isRead: false,
        },
        {
          text: 'Audience',
          time: '35 minutos atrás',
          icon: 'mdi-account',
          iconBg: 'amber',
          isRead: false,
        },
        {
          text: 'Conversions',
          time: '5 dias atrás',
          icon: 'mdi-flag',
          iconBg: 'red',
          isRead: true,
        },
      ],
      filters: {
        filter1: '',
        filterCpf: '',
        filterPhone: '',
        nameFilter: ''
      },
      allTags: [
        {
          key: 0,
          value: 'Filtro1',
          enable: false,
          type: 'filter1',
        },
        {
          key: 1,
          value: 'CPF',
          enable: false,
          type: 'filterCpf',
        },
        {
          key: 2,
          value: 'Nome',
          enable: false,
          type: 'nameFilter',
        },
        {
          key: 3,
          value: 'Telefone',
          enable: false,
          type: 'filterPhone',
        },
      ],
      table: {
        actions: [
          {
            type: 'icon-btn',
            color: 'purple lighten-2',
            actionKey: 'details',
            icon: 'mdi-eye',
            label: 'Detalhes',
          },
          {
            type: 'icon-btn',
            color: 'orange lighten-2',
            actionKey: 'edit',
            icon: 'mdi-pencil',
            label: 'Editar',
          },
          {
            type: 'icon-btn',
            color: 'red lighten-2',
            actionKey: 'delete',
            icon: 'mdi-delete-forever',
            label: 'Excluir',
          },
        ],
        headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'name',
          },
          {
            text: 'Telefone',
            align: 'start',
            value: 'phone',
            sortable: false,
          },
          {
            text: 'E-mail',
            align: 'start',
            value: 'mail',
          },
          {
            text: 'CPF',
            align: 'start',
            value: 'cpf',
            sortable: false,
          },
          {
            text: 'Role',
            align: 'start',
            value: 'role',
            sortable: false,
          },
          {
            text: 'Ações',
            align: 'center',
            value: 'actions',
            sortable: false,
          },
        ],
        items: [
          {
            name: 'Alberto da Silva',
            phone: '(11)96222-4724',
            mail: 'silva@uol.com.br',
            cpf: '115.255.412-62',
            role: 'XX',
          },
          {
            name: 'Maria do Socorro',
            phone: '(11)95588-7885',
            mail: 'maria.socorro@gmail.com',
            cpf: '521.555.212-66',
            role: 'XX',
          },
          {
            name: 'Julia Teresa Cristina',
            phone: '(21)92295-1844',
            mail: 'jcristina@ig.com.br',
            cpf: '422.128.478-02',
            role: 'XX',
          },
          {
            name: 'Rogerio Madureira',
            phone: '(67)95422-1789',
            mail: 'rmadureira@kfllx.com',
            cpf: '295.225.114-45',
            role: 'XX',
          },
          {
            name: 'Bruna de Carvalho',
            phone: '(33)95211-5577',
            mail: 'bcarvalho@gmail.com',
            cpf: '351.058.562-78',
            role: 'XX',
          },
          {
            name: 'Joana Dark',
            phone: '(11)92277-5877',
            mail: 'jdark@outlook.com',
            cpf: '631.897.112-44',
            role: 'XX',
          },
        ],
      },
      pagination: {
        page: 1,
        itemsPerPage: 50,
        totalItems: 10,
        totalPages: 0,
      },
    };
  },
  methods: {
    onSnackbarClose() {
      this.snackbar.model = false;
    },
    getName(value): void {
      this.name = value;
    },
    getCep(value): void {
      this.cep = value;
    },
    getPhone(value): void {
      this.phone = value;
    },
    getCpf(value): void {
      this.cpf = value;
    },
    getCnpj(value): void {
      this.cnpj = value;
    },
    getDate(value): void {
      this.data = value;
    },
    getTime(value): void {
      this.time = value;
    },
    getDateTime(value): void {
      this.dateTime = value;
    },
    getCurrency(value): void {
      this.currency = value;
    },
    clickNotif(item): void {
      console.log(item);
    },
    clickAllNotif(): void {
      console.log('click in All Notification');
    },
    checkEdit(): void {
      console.log('Check Edit');
    },
    checkDetails(): void {
      console.log('CheckDetails');
    },
    onActiveControl(): void {
      console.log('Active Control');
    },
    controlChangesTable(): void {
      console.log('Change Table');
    },
    getFilter1(value): void {
      console.log(value);
    },
    getFilterCpf(value): void {
      console.log(value);
    },
    getFilterPhone(value): void {
      console.log(value);
    },
    getFilterName(value):void {
      console.log(value)
    },
    controlFilters() {
      this.enableTag();
    },

    enableTag() {
      this.allTags.map((item) => {
        item.enable = this.filters[item.type].length ? true : false;
      });
    },
    onRemoveTag($event) {
      this.pagination.page = 1;
      this.allTags.map((item) => {
        if (item.key === $event.key) {
          item.enable = false;
          this.filters[item.type] = '';
        }
      });
      this.controlChangesTable();
    },
  },
});
</script>
