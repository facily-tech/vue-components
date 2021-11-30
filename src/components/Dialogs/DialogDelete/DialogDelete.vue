<template>
  <FyDialog
    :dialog="deleteModel"
    :config="{
      fullscreen: false,
      hideOverlay: false,
      scrollable: true
    }"
    :size="'580px'"
  >
    <template v-slot:content>
      <v-card>
        <div class="delete-wrapper">
          <v-card tile>
            <v-toolbar flat light color="primary">
              <v-toolbar-title style="color: white">
                {{ title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="close()">
                <v-icon color="#ffffff"> mdi-close </v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text class="pa-10">
              <div class="delete-ilustra d-flex justify-center pt-5">
                <v-img
                  lazy-src="@/assets/delete.svg"
                  max-height="212"
                  max-width="212"
                  src="@/assets/delete.svg"
                ></v-img>
              </div>

              <div class="dtext-center pt-10">
                <h2 class="headline">
                  Tem certeza que deseja excluir <strong>"{{ item.description }}"</strong>?
                </h2>
              </div>

              <div class="justify-center d-flex mt-10">
                <v-btn color="primary" :loading="loading" x-large @click="submit()">
                  Excluir
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-card>
    </template>
  </FyDialog>
</template>

<script lang="js">
import { FyDialog } from '../index';

export default {
  name: 'FyDialogDelete',

  data() {
    return {
      loading: false
    };
  },

  components: {
    FyDialog
  },

  props: {
    item: {
      type: Object,
      default: () => {
        console.log('');
      },
      require: true
    },

    deleteModel: {
      type: Boolean,
      default: false,
      require: true
    },

    title: {
      type: String,
      default: 'Excluir'
    }
  },

  methods: {
    close() {
      this.$emit('close-dialog');
    },

    async submit() {
      this.$emit('close-dialog');
      this.$emit('confirm-dialog');
    }
  }
};
</script>

<style lang="scss"></style>
