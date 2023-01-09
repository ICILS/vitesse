<script setup lang="ts">
import { radarChart } from '../ApexChartsData'
import BaseCard from '~/components/BaseCard.vue'
</script>

<template>
  <BaseCard heading="Radar Chart">
    <client-only>
    <apexchart
      type="radar"
      height="300"
      :options="radarChart.chartOptions"
      :series="radarChart.series"
    />
</client-only>
  </BaseCard>
</template>
