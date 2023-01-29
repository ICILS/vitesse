<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import { scatterChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Column Chart">
    <client-only>
    <apexchart
      type="scatter"
      height="350"
      :options="scatterChart.chartOptions"
      :series="scatterChart.series"
    />
</client-only>
  </BaseCard>
</template>
