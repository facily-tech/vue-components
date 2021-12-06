<template>
  <div>
    <v-snackbar
      v-if="snackbar"
      v-model="snackbar.model"
      :timeout="snackbar.timeout"
      :color="snackbar.bgColor"
    >
      <p :style="`color: ${snackbar.fontColor}`" class="mb-0">{{ snackbar.text }}</p>

      <template v-slot:action="{ attrs }">
        <v-btn color="#ffffff" text v-bind="attrs" @click="snackbarClose" icon>
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'FySnackbar',

  props: {
    snackbar: {
      require: true,
      type: Object,
      default: () => {
        const obj = {};
        return obj;
      },
    },
  },

  methods: {
    snackbarClose() {
      this.$emit('snackbar-close');
    },
  },
};
</script>

<style lang="scss"></style>
