<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import { heatMapChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Heat Map Chart">
<client-only>
    <apexchart
      type="heatmap"
      height="350"
      :options="heatMapChart.chartOptions"
      :series="heatMapChart.series"
    />
    </client-only>
  </BaseCard>
</template>
