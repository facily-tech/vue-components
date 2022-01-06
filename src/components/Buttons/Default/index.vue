<template>
  <v-btn v-bind.sync="$props" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { VBtn } from 'vuetify/lib';

const BaseVBtn = Vue.extend(VBtn);

@Component
export default class FyButton extends BaseVBtn {}
</script>

<style></style>
