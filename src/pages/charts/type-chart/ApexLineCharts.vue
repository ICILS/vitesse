<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import VueApexCharts from 'vue3-apexcharts'
import { lineChartSimple } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Line Chart">
    <client-only>
<client-only>
    <VueApexCharts
      type="line"
      height="350"
      :options="lineChartSimple.chartOptions"
      :series="lineChartSimple.series"
    />
    </client-only>
  </client-only>
  </BaseCard>
</template>
