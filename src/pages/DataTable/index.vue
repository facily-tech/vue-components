<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Charts</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>GroupChart</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-data-table
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
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Usage</v-list-item-title>
                <v-list-item-subtitle class="pb-4 pt-2">
                  <v-row>
                    <pre>
                      {{ contentUsageDataTable }}
                    </pre>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Props</v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >Access the list of properties here (place link or list of
                  properties)</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { FyDataTable } from '@/components/DataTable';

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

const contentUsageDataTable = `
  <fy-gauge-chart :percent="33" />
`;

export default Vue.extend({
  name: 'PageDataTable',
  components: { FyDataTable },
  data() {
    return {
      contentUsageDataTable,
      deleteModel: false,
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
            phone: '11962224724',
            mail: 'silva@uol.com.br',
            cpf: '11525541262',
            role: 'XX',
          },
          {
            name: 'Maria do Socorro',
            phone: '11955887885',
            mail: 'maria.socorro@gmail.com',
            cpf: '52155521266',
            role: 'XX',
          },
          {
            name: 'Julia Teresa Cristina',
            phone: '21922951844',
            mail: 'jcristina@ig.com.br',
            cpf: '42212847802',
            role: 'XX',
          },
          {
            name: 'Rogerio Madureira',
            phone: '67954221789',
            mail: 'rmadureira@kfllx.com',
            cpf: '29522511445',
            role: 'XX',
          },
          {
            name: 'Bruna de Carvalho',
            phone: '33952115577',
            mail: 'bcarvalho@gmail.com',
            cpf: '35105856278',
            role: 'XX',
          },
          {
            name: 'Joana Dark',
            phone: '11922775877',
            mail: 'jdark@outlook.com',
            cpf: '63189711244',
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
  methods: {
    checkEdit(event: any): void {
      console.log('Check Edit > ', event);
    },
    checkDetails(event: any): void {
      console.log('CheckDetails > ', event);
    },
    controlChangesTable(): void {
      console.log('Change Table');
    },
    onActiveControl(event: any): void {
      console.log('Active Control > ', event);
    },
  },
});
</script>

<style></style>
