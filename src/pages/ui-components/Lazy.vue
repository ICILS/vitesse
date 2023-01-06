<script setup lang="ts">
import Lazy from '~/components/vuetifyComponents/lazy/ComponentLazy.vue'

const page = ref({ title: 'Lazy', icon: 'mdi-image-filter-center-focus-weak' })

const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Lazy',
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
        <BaseCard heading="Lazy">
          <Lazy />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
