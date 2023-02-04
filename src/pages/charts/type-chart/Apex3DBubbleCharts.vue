<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { bubbleChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
const BubbleChart = bubbleChart
const ApexChart = VueApexCharts
</script>

<template>
  <BaseCard heading="Bar Chart">
    <ClientOnly>
      <ApexChart type="bubble" height="350" :options="BubbleChart.chartOptions" :series="BubbleChart.series" />
    </ClientOnly>
  </BaseCard>
</template>
