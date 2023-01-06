<script setup lang="ts">
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'
import BaseCard from '~/components/BaseCard.vue'
import OverlayBasic from '~/components/vuetifyComponents/overlay/OverlayBasic.vue'
import OverlayContained from '~/components/vuetifyComponents/overlay/OverlayContained.vue'
import OverlayAdvanced from '~/components/vuetifyComponents/overlay/OverlayAdvanced.vue'
import OverlayLoader from '~/components/vuetifyComponents/overlay/OverlayLoader.vue'

const page = ref({ title: 'Overlay', icon: 'mdi-image-filter-center-focus-weak' })
const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Overlay',
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
        <BaseCard heading="Overlay - Basic">
          <OverlayBasic />
        </BaseCard>

        <BaseCard heading="Overlay - Contained">
          <OverlayContained />
        </BaseCard>

        <BaseCard heading="Overlay - Advanced">
          <OverlayAdvanced />
        </BaseCard>

        <BaseCard heading="Overlay - Loader">
          <OverlayLoader />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
