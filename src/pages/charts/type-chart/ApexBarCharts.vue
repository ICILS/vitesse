<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import { barChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Bar Chart">
    <client-only>
      <apexchart type="bar" height="350" :options="barChart.chartOptions" :series="barChart.series" />
    </client-only>
  </BaseCard>
</template>
