<script setup lang="ts">
import SnackbarMultiline from '~/components/vuetifyComponents/snackbar/SnackbarMultiline.vue'
import SnackbarTimeout from '~/components/vuetifyComponents/snackbar/SnackbarTimeout.vue'
import SnackbarVertical from '~/components/vuetifyComponents/snackbar/SnackbarVertical.vue'

const page = ref({ title: 'Snackbar' })
const breadcrumbs = ref([
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Snackbar',
    disabled: true,
    href: '#',
  },
])
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Multi Line">
          <SnackbarMultiline />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Timeout">
          <SnackbarTimeout />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Vertical">
          <SnackbarVertical />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
