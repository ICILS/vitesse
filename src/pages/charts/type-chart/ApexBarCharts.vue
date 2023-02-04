<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { barChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Bar Chart">
    <ClientOnly>
      <VueApexCharts id="vuechart-example" type="bar" height="350" :options="barChart.chartOptions" :series="barChart.series" />
    </ClientOnly>
  </BaseCard>
</template>
