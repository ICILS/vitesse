<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import { columnChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Column Chart">
<client-only>
    <apexchart
      type="bar"
      height="350"
      :options="columnChart.chartOptions"
      :series="columnChart.series"
    />
    </client-only>
  </BaseCard>
</template>
