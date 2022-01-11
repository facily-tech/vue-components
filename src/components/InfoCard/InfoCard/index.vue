<template>
  <div class="fy-info-card d-flex align-center justify-center info px-5 py-5">
    <img :src="require(`@/assets/${img}`)" alt="John" height="50" />

    <div class="flex-column justify-space-between ml-5 text-right">
      <div class="text-h5 font-weight-medium white--text mb-5">{{ title }}</div>

      <fy-button-info>{{ caption }}</fy-button-info>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';

import { FyButtonInfo } from '@/components/Buttons';

@Component({
  components: {
    FyButtonInfo,
  },
})
export default class FyInfoCard extends Vue {
  @Prop({ type: String, default: '' }) img!: string;

  @Prop({ type: String, default: '' }) title!: string;

  @Prop({ type: String, default: '' }) caption!: string;
}
</script>

<style lang="scss" scoped>
.fy-info-card {
  width: 420px;
  height: 240px;
  border-radius: 4px;
}
</style>
