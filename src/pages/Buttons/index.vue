<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Buttos</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-subheader>Info</v-subheader>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8">
                  <v-row align="center" justify="space-around">
                    <fy-button-info>Info</fy-button-info>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';

import { FyButtonInfo } from '@/components/Buttons';

export default Vue.extend({
  name: 'PageButtons',
  components: { FyButtonInfo },
});
</script>

<style></style>
