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
                      <fy-input placeholder="Fy Input" />
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
          <v-subheader>CEP</v-subheader>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8">
                  <v-row align="center" justify="space-around">
                    <div>
                      <fy-input-cep v-model="cep" />
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
          <v-subheader>CNPJ</v-subheader>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8">
                  <v-row align="center" justify="space-around">
                    <fy-input-cnpj v-model="cnpj" placeholder="00.000.000/0000-00" />
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
          <v-subheader>Currency</v-subheader>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8">
                  <v-row align="center" justify="space-around">
                    <fy-input-currency v-model="currency" />
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

import { FyInput, FyInputCep, FyInputCpf, FyInputCnpj, FyInputCurrency } from '@/index';

export default Vue.extend({
  name: 'PageButtons',
  components: {
    FyInput,
    FyInputCep,
    FyInputCpf,
    FyInputCnpj,
    FyInputCurrency,
  },
  data() {
    return {
      cep: '',
      cpf: '',
      cnpj: '',
      currency: '0',
    };
  },
  watch: {
    cep: function (value) {
      console.log('pages input ', value);
    },
  },
});
</script>

<style></style>
