<script setup lang="ts">
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'
import BaseCard from '~/components/BaseCard.vue'
import SheetElevation from '~/components/vuetifyComponents/sheet/SheetElevation.vue'
import SheetRounded from '~/components/vuetifyComponents/sheet/SheetRounded.vue'
import SheetColorSize from '~/components/vuetifyComponents/sheet/SheetColorSize.vue'

const page = ref({ title: 'Sheet' })
const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Sheet',
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
        <BaseCard heading="Sheet - Using elevation">
          <SheetElevation />
        </BaseCard>

        <BaseCard heading="Sheet - Rounded">
          <SheetRounded />
        </BaseCard>

        <BaseCard heading="Sheet - Colors & sizes">
          <SheetColorSize />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
