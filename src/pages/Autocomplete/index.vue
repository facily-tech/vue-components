<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Autocomplet</h2>
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
                    <fy-autocomplete
                      :items="items"
                      item-text="name"
                      item-value="id"
                      label="Colors"
                      v-model="colors"
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
                        {{ contentUsageAutocomplete }}
                      </pre>
                    </v-tab-item>

                    <v-tab-item value="script">
                      <pre>
                        {{ contentUsageAutocompleteScript }}
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

import { FyAutocomplete } from '@/components/Autocomplete';

const contentUsageAutocomplete = `
  <fy-autocomplete
    :items="items"
    item-text="name"
    item-value="id"
    label="Colors"
    v-model="colors"
  />
`;

const contentUsageAutocompleteScript = `
  export default Vue.extend({
    name: 'Autocomplete',
    data() {
      return {
        colors: '',
        items: [
          {
            name: 'Blue',
            id: 'blue',
          },
          {
            name: 'Red',
            id: 'red',
          },
        ],
      };
    },
  });
`;

export default Vue.extend({
  name: 'PageAutocomplete',
  components: { FyAutocomplete },
  data() {
    return {
      contentUsageAutocomplete,
      contentUsageAutocompleteScript,
      tab: '0',
      colors: '',
      items: [
        {
          name: 'Blue',
          id: 'blue',
        },
        {
          name: 'Red',
          id: 'red',
        },
      ],
    };
  },
});
</script>

<style></style>
