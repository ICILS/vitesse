<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import { bubbleChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Bar Chart">
    <ClientOnly>
      <apexchart type="bubble" height="350" :options="bubbleChart.chartOptions" :series="bubbleChart.series" />
    </ClientOnly>
  </BaseCard>
</template>
