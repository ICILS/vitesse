<script setup lang="ts">
import { lineAreaChartSpline } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Line Area Chart">
    <client-only>
    <apexchart
      type="area"
      height="350"
      :options="lineAreaChartSpline.chartOptions"
      :series="lineAreaChartSpline.series"
    />
</client-only>
  </BaseCard>
</template>
