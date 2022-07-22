<template>
  <fy-card-form class="fy-status">
    <template #title>
      {{ title }}
    </template>
    <v-card-text>
      <v-row>
        <v-col md="10" cols="12">
          <div class="subtitle-1 font-weight-black">
            {{ value ? active : inactive }}
          </div>
          <div v-if="description">
            {{ description }}
          </div>
        </v-col>
        <v-col md="2" cols="12" class="d-flex justify-end">
          <v-switch v-model="model" inset data-test="select-status" :disabled="disabled" />
        </v-col>
      </v-row>
    </v-card-text>
  </fy-card-form>
</template>

<script lang="ts">
import Vue from 'vue';
import FyCardForm from '../FyCard/FyCardForm.vue';

export default Vue.extend({
  components: { FyCardForm },
  name: 'FyStatus',

  props: {
    value: {
      type: Boolean,
      required: true,
    },

    title: {
      type: String,
      default: 'Status',
    },

    description: {
      type: String,
    },

    active: {
      type: String,
      default: 'Ativo',
    },

    inactive: {
      type: String,
      default: 'Inativo',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    model: {
      get(): boolean {
        return this.value;
      },

      set(value: boolean) {
        this.$emit('input', value);
      },
    },
  },
});
</script>
