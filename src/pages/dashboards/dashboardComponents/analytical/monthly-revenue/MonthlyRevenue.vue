<script setup lang="ts">
import apexchart from 'vue3-apexcharts'
import { onMounted, ref } from 'vue'
import { MonthlyRevenueData } from './MonthlyRevenueData'
const elementVisible = ref(false)

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10)
})
</script>

<template>
  <!-- ------------------------------------ -->
  <!-- html -->
  <!-- ------------------------------------ -->
  <v-card class="overflow-hidden w-100">
    <v-card-text class="pa-7">
      <div class="d-flex align-start">
        <div>
          <span class="text-subtitle-1 text-grey-darken-1 font-weight-medium">Monthly revenue</span>
          <h2 class="title font-weight-medium">
            3246
          </h2>
        </div>
        <v-spacer />
        <div class="ml-auto">
          <v-btn icon class="btn-custom-sm" color="secondary" fab small>
            <vue-feather type="shopping-bag" class="white--text" />
          </v-btn>
        </div>
      </div>
    </v-card-text>
    <div v-show="elementVisible">
      <client-only>
      <apexchart
        type="area"
        height="75px"
        :options="MonthlyRevenueData.chartOptions"
        :series="MonthlyRevenueData.series"
      />
</client-only>
    </div>
  </v-card>
</template>
