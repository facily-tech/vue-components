<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Data Tables</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Default</v-card-title>

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
                  <v-tabs v-model="tab">
                    <v-tab href="#template">Template</v-tab>
                    <v-tab href="#script">Script</v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item value="template">
                      <pre>
                        {{ contentUsageDataTable }}
                      </pre>
                    </v-tab-item>

                    <v-tab-item value="script">
                      <pre>
                        {{ contentUsageDataTableScript }}
                      </pre>
                    </v-tab-item>
                  </v-tabs-items>
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

import { FyDataTable } from '@/index';
import { IDataTableRows } from '@/components/FyDataTable/types';

const contentUsageDataTable = `
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
`;

const contentUsageDataTableScript = `
  export default Vue.extend({
    name: 'DataTable',
    data() {
      return {
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
              tax_id: '11525541262',
              role: 'XX',
            },
            ...
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
      tableItems(): IFyDataTableRows[] {
        const nItems = [...this.table.items];
        return nItems.map((item) => {
          return {
            cols: item,
            actions: this.table.actions,
          } as IFyDataTableRows;
        });
      },
    },
  });
`;

export default Vue.extend({
  name: 'PageDataTable',
  components: { FyDataTable },
  data() {
    return {
      contentUsageDataTable,
      contentUsageDataTableScript,
      deleteModel: false,
      tab: '0',
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
            text: 'Prioridade',
            align: 'start',
            value: 'priority',
          },
          {
            text: 'CPF',
            align: 'start',
            value: 'tax_id',
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
            name: {
              title: 'Alberto da Silva',
              subtitle: 'Subtitle of name Alberto da Silva text extra large ',
            },
            phone: '11962224724',
            mail: 'silva@uol.com.br',
            tax_id: '00000000000100',
            role: 'XX',
            priority: 'Alta',
          },
          {
            name: 'Maria do Socorro',
            phone: '11955887885',
            mail: 'maria.socorro@gmail.com',
            tax_id: '52155521266',
            role: 'XX',
            priority: 'Média',
          },
          {
            name: 'Julia Teresa Cristina',
            phone: '21922951844',
            mail: 'jcristina@ig.com.br',
            tax_id: '42212847802',
            role: 'XX',
            priority: 'Baixa',
          },
          {
            name: 'Rogerio Madureira',
            phone: '67954221789',
            mail: 'rmadureira@kfllx.com',
            tax_id: '29522511445',
            role: 'XX',
          },
          {
            name: 'Bruna de Carvalho',
            phone: '33952115577',
            mail: 'bcarvalho@gmail.com',
            tax_id: '35105856278',
            role: 'XX',
          },
          {
            name: 'Joana Dark',
            phone: '11922775877',
            mail: 'jdark@outlook.com',
            tax_id: '63189711244',
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
    tableItems(): IDataTableRows[] {
      const nItems = [...this.table.items];
      return nItems.map((item) => {
        return {
          cols: item,
          actions: this.table.actions,
        } as IDataTableRows;
      });
    },
  },
  methods: {
    checkEdit(event: Event): void {
      console.log('Check Edit > ', event);
    },
    checkDetails(event: Event): void {
      console.log('CheckDetails > ', event);
    },
    controlChangesTable(): void {
      console.log('Change Table');
    },
    onActiveControl(event: Event): void {
      console.log('Active Control > ', event);
    },
  },
});
</script>

<style></style>
