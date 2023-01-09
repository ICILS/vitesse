<script setup lang="ts">
import { lineChartSimple } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Line Chart">
    <client-only>
<client-only>
    <apexchart
      type="line"
      height="350"
      :options="lineChartSimple.chartOptions"
      :series="lineChartSimple.series"
    />
    </client-only>
  </client-only>
  </BaseCard>
</template>
