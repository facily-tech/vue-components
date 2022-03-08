<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Snackbar</h2>
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
                    <fy-button color="info" @click="snackbar.model = true">Click me!</fy-button>
                    <fy-snackbar :snackbar="snackbar" @snackbar-close="onSnackbarClose()" />
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
                        {{ contentUsageSnackbar }}
                      </pre>
                    </v-tab-item>

                    <v-tab-item value="script">
                      <pre>
                        {{ contentUsageSnackbarScript }}
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

import { FySnackbar, FyButton } from '@/index';

const contentUsageSnackbar = `
  <fy-snackbar :snackbar="snackbar" @snackbar-close="onSnackbarClose()" />
`;

const contentUsageSnackbarScript = `
  export default Vue.extend({
    name: 'DataTable',
    data() {
      return {
        snackbar: {
          model: true,
          timeout: 5000,
          bgColor: '#2196f3',
          fontColor: '#ffffff',
          text: 'teste',
          type: null,
        },
      };
    },
    methods: {
      onSnackbarClose(): void {
        this.snackbar.model = false;
      },
    },
  });
`;

export default Vue.extend({
  name: 'PageSnackbar',
  components: { FySnackbar, FyButton },
  data() {
    return {
      contentUsageSnackbar,
      contentUsageSnackbarScript,
      tab: '0',
      snackbar: {
        model: false,
        timeout: 5000,
        bgColor: '#2196f3',
        fontColor: '#ffffff',
        text: 'teste',
        type: null,
      },
    };
  },

  methods: {
    onSnackbarClose(): void {
      this.snackbar.model = false;
    },
  },
});
</script>

<style></style>
