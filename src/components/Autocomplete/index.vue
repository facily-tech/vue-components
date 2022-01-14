<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    class="mx-4"
    flat
    hide-no-data
    hide-details
    label="What state are you from?"
    solo-inverted
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { VAutocomplete } from 'vuetify/lib';

const BaseAutocomplete = Vue.extend(VAutocomplete);

@Component
export default class FyAutocomplete extends BaseAutocomplete {
  @Prop({ type: Boolean, default: false }) loading!: boolean;
}
</script>

<style></style>
