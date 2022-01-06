<template>
  <div class="gauge-chart d-flex align-end justify-center">
    <svg :height="radius * 1.1" :width="radius * 2">
      <circle
        class="gauge-base"
        :cx="radius"
        :cy="radius"
        fill="transparent"
        :r="innerRadius()"
        :stroke="baseColor"
        :stroke-dasharray="dashArray()"
        stroke-linecap="round"
        :stroke-width="strokeWidth()"
        :transform="transform()"
      />
      <circle
        class="gauge-percent"
        :cx="radius"
        :cy="radius"
        fill="transparent"
        :r="innerRadius()"
        :stroke="percentColor"
        :stroke-dasharray="dashArray()"
        :stroke-dashoffset="offset()"
        stroke-linecap="round"
        :stroke-width="strokeWidth()"
        :transform="transform()"
        style="transition: 'stroke-dashoffset 0.3s'"
      />
    </svg>
    <p class="percent text-h4 font-weight-bold" :style="fontScale()">{{ percent }}%</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FyGaugeChart extends Vue {
  @Prop({ type: Number, default: 100 }) radius!: number;

  @Prop({ type: Number, default: 0 }) percent!: number;

  @Prop({ type: String, default: 'rgb(229, 229, 229)' }) baseColor!: string;

  @Prop({ type: String, default: '#2047f4' }) percentColor!: string;

  strokeWidth(): number {
    return this.radius * 0.2;
  }
  innerRadius(): number {
    return this.radius - this.strokeWidth() / 2;
  }
  circumference(): number {
    return this.innerRadius() * 2 * Math.PI;
  }
  arc(): number {
    return this.circumference() * (180 / 360);
  }
  dashArray(): string {
    return `${this.arc()} ${this.circumference()}`;
  }
  transform(): string {
    return `rotate(180, ${this.radius}, ${this.radius})`;
  }
  percentNormalized(): number {
    return Math.min(Math.max(this.percent, 0), 100);
  }
  offset(): number {
    return this.arc() - (this.percentNormalized() / 100) * this.arc();
  }
  fontScale(): string {
    return `font-size: ${this.radius / 50} + rem !important`;
  }
}
</script>

<style lang="scss">
.gauge-chart {
  position: relative;
  p {
    position: absolute;
    margin: 0 !important;
    line-height: normal !important;
    bottom: 0;
  }
}
</style>
