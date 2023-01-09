<script setup lang="ts">
import { mixedChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Mixed Chart">
    <client-only>
    <apexchart
      type="line"
      height="350"
      :options="mixedChart.chartOptions"
      :series="mixedChart.series"
    />
</client-only>
  </BaseCard>
</template>
