<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Inputs</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-subheader>Default</v-subheader>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8">
                  <v-row align="center" justify="space-around">
                    <div>
                      <fy-input placeholder="Fy Input" :rules="rules" />
                    </div>
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
          <v-subheader>CPF</v-subheader>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8">
                  <v-row align="center" justify="space-around">
                    <fy-input-cpf v-model="cpf" placeholder="000.000.000-00" />
                    <fy-input-currency v-model.lazy="currency" />
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

import { FyInput, FyInputCpf, FyInputCurrency } from '@/components/Inputs';

export default Vue.extend({
  name: 'PageButtons',
  components: { FyInput, FyInputCpf, FyInputCurrency },
  data() {
    return {
      cpf: '',
      currency: '0',
      rules: [(v) => v.length <= 25 || 'Max 25 characters'],
    };
  },
});
</script>

<style></style>
