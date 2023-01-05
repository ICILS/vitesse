<script setup lang="ts">
import SparklineFill from '~/components/vuetifyComponents/sparkline/SparklineFill.vue'
import SparklineTakeBreak from '~/components/vuetifyComponents/sparkline/SparklineTakeBreak.vue'
import SparklineDashboardCard from '~/components/vuetifyComponents/sparkline/SparklineDashboardCard.vue'
import SparklineCustomLabels from '~/components/vuetifyComponents/sparkline/SparklineCustomLabels.vue'

const page = ref({ title: 'Sparkline' })
const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Sparkline',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Fill">
          <SparklineFill />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Take a break">
          <SparklineTakeBreak />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Dashboard card">
          <SparklineDashboardCard />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Custom labels">
          <SparklineCustomLabels />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
