<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NewsletterChart } from './NewsletterData'

const select = ref('March')
const items = ref(['March', 'April', 'May', 'June'])

const elementVisible = ref(false)

onMounted(() => {
  setTimeout(() => (elementVisible.value = true), 10)
})
</script>

<template>
  <v-card>
    <v-card-text>
      <div class="d-sm-flex align-start">
        <div>
          <h2 class="title text-h6 font-weight-medium">
            Newsletter Campaign
          </h2>
          <h5 class="subtitle">
            Overview of Newsletter Campaign
          </h5>
        </div>
        <v-spacer />
        <div class="ml-auto">
          <div class="ml-auto">
            <div class="d-flex align-center">
              <div class="d-flex align-center px-2">
                <span class="text-primary">
                  <span class="text-overline">
                    <i class="i-mdi-brightness-1 mx-1" />
                  </span>
                  <span class="font-weight-regular">Earning</span>
                </span>
              </div>
              <div class="d-flex align-center px-2">
                <span class="text-secondary">
                  <span class="text-overline">
                    <i class="i-mdi-brightness-1 mx-1" />
                  </span>
                  <span class="font-weight-regular">Expense</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="elementVisible" class="mt-6">
        <apexchart
          height="380px"
          :options="NewsletterChart.chartOptions"
          :series="NewsletterChart.series"
        />
      </div>
      <div class="d-flex justify-center">
        <div class="d-flex align-center text-primary px-2">
          <span class="text-overline">
            <i class="mdi i-mdi-brightness-1 mx-1" />
          </span>
          <span class="font-weight-regular">Earnings</span>
        </div>
        <div class="d-flex align-center px-2 text-secondary">
          <span class="text-overline">
            <i class="mdi i-mdi-brightness-1 mx-1" />
          </span>
          <span class="font-weight-regular">Expense</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
