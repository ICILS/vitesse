<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import { candlestickChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Candle Chart">
<client-only>
    <apexchart
      type="candlestick"
      height="350"
      :options="candlestickChart.chartOptions"
      :series="candlestickChart.series"
    />
    </client-only>
  </BaseCard>
</template>
