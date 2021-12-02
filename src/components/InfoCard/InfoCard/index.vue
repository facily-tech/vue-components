<template>
  <div class="fy-info-card d-flex align-center justify-center info px-5 py-5">
    <img :src="require(`@/assets/${img}`)" alt="John" height="50">

    <div class="flex-column justify-space-between ml-5 text-right">
      <div class="text-h5 font-weight-medium white--text mb-5">{{title}}</div>

      <fy-button-info>{{caption}}</fy-button-info>
    </div>
  </div>
</template>

<script>
import { FyButtonInfo } from '@/components/Buttons';

export default {
  name: 'FyInfoCard',
  components: {
    FyButtonInfo,
  },
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.fy-info-card {
  width: 420px;
  height: 240px;
  border-radius: 4px;
}
</style>
