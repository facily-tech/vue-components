<template>
  <fy-dialog
    :dialog="deleteModel"
    :config="{
      fullscreen: false,
      hideOverlay: false,
      scrollable: true,
    }"
    :max-width="'580px'"
  >
    <template v-slot:content>
      <v-card>
        <div class="delete-wrapper" data-test="dialog-delete">
          <v-card tile>
            <v-toolbar flat light color="primary">
              <v-toolbar-title style="color: white">
                {{ title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <fy-button icon @click="close()">
                <v-icon color="#ffffff"> mdi-close </v-icon>
              </fy-button>
            </v-toolbar>
            <v-card-text class="pa-10">
              <div class="dtext-center pt-5">
                <slot name="content">
                  <h2 class="headline">
                    Tem certeza que deseja excluir <strong>"{{ item.description }}"</strong>?
                  </h2>
                </slot>
              </div>

              <div class="justify-center d-flex mt-10">
                <fy-button
                  color="primary"
                  :loading="loading"
                  large
                  @click="submit()"
                  data-test="btn-submit"
                  class="ml-3"
                >
                  Excluir
                </fy-button>
                <fy-button large @click="close()" data-test="btn-close" class="ml-3">
                  Cancelar
                </fy-button>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-card>
    </template>
  </fy-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { FyDialog } from './index';

import FyButton from '@/components/FyButton';

import { IDialogDeleteItem } from './types';

export default Vue.extend({
  name: 'fy-dialog-delete',

  components: { FyButton, FyDialog },

  props: {
    item: {
      type: Object as PropType<IDialogDeleteItem>,
      default: {} as IDialogDeleteItem,
      required: true,
    },

    deleteModel: { type: Boolean, default: false, required: true },

    title: { type: String, default: 'Excluir' },
  },

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    close(): void {
      this.$emit('close-dialog');
    },

    async submit(): Promise<void> {
      this.$emit('close-dialog');
      this.$emit('confirm-dialog', this.item);
    },
  },
});
</script>
