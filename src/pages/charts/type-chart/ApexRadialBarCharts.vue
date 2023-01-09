<script setup lang="ts">
import { radialBarChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Radial Chart">
    <client-only>
    <apexchart
      type="radialBar"
      height="350"
      :options="radialBarChart.chartOptions"
      :series="radialBarChart.series"
    />
</client-only>
  </BaseCard>
</template>
