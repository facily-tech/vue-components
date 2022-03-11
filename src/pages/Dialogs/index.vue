<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Dialogs</h2>
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
                    <fy-button color="info" class="mr-5" @click="dialog = true">
                      Dialog Template
                    </fy-button>
                    <fy-dialog :dialog="dialog">
                      <template v-slot:content>
                        <v-card tile>
                          <v-toolbar flat light color="primary">
                            <v-toolbar-title style="color: white"> Title </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <fy-button icon @click="dialog = false">
                              <v-icon color="#ffffff"> mdi-close </v-icon>
                            </fy-button>
                          </v-toolbar>
                          <v-card-text class="pa-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto
                            voluptate repudiandae ex voluptates recusandae!
                          </v-card-text>
                        </v-card>
                      </template>
                    </fy-dialog>
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
                      {{ contentUsageDialog }}
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
          <v-card-title>Delete</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-button color="info" @click="deleteModel = true"> Dialog Delete </fy-button>
                    <fy-dialog-delete
                      :deleteModel="deleteModel"
                      :item="item"
                      @close-dialog="deleteModel = false"
                      @confirm-dialog="deleteModel = false"
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
                      {{ contentUsageDialogDelete }}
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

import { FyButton, FyDialog, FyDialogDelete } from '@/index';
import { IDialogDeleteItem } from '@/components/FyDialog/types';

const contentUsageDialog = `
  <fy-dialog :dialog="dialog">
    <template v-slot:content>
      <v-card tile>
        <v-toolbar flat light color="primary">
          <v-toolbar-title style="color: white"> Title </v-toolbar-title>
          <v-spacer></v-spacer>
          <fy-button icon @click="dialog = false">
            <v-icon color="#ffffff"> mdi-close </v-icon>
          </fy-button>
        </v-toolbar>
        <v-card-text class="pa-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iusto
          voluptate repudiandae ex voluptates recusandae!
        </v-card-text>
      </v-card>
    </template>
  </fy-dialog>
`;

const contentUsageDialogDelete = `
  <fy-dialog-delete
    :deleteModel="deleteModel"
    :item="item"
    @close-dialog="deleteModel = false"
    @confirm-dialog="deleteModel = false"
  />
`;

export default Vue.extend({
  name: 'PageDialogs',
  components: { FyButton, FyDialog, FyDialogDelete },
  data() {
    return {
      contentUsageDialog,
      contentUsageDialogDelete,
      dialog: false,
      deleteModel: false,
      item: {
        description: 'Produto',
        id: '1',
      } as IDialogDeleteItem,
    };
  },
});
</script>

<style></style>
