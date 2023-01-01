<script>
export default {
  name: 'Snackbar',
  components: {
    SnackbarMultiline: () =>
      import('~/components/vuetifyComponents/snackbar/SnackbarMultiline'),
    SnackbarTimeout: () =>
      import('~/components/vuetifyComponents/snackbar/SnackbarTimeout'),
    SnackbarVertical: () =>
      import('~/components/vuetifyComponents/snackbar/SnackbarVertical'),
  },

  data: () => ({
    page: {
      title: 'Snackbar',
    },
    breadcrumbs: [
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
    ],
  }),
}
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />
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
