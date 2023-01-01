<script>
export default {
  name: 'Parallex',
  components: {
    ParallexContent: () =>
      import('~/components/vuetifyComponents/parallex/ParallexContent'),
    ParallexCustomHeight: () =>
      import('~/components/vuetifyComponents/parallex/ParallexCustomHeight'),
  },

  data: () => ({
    page: {
      title: 'Parallex',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Parallex',
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
      <v-col cols="12" sm="12">
        <BaseCard heading="Parallex - With content">
          <ParallexContent />
        </BaseCard>

        <BaseCard heading="Parallex - Custom height">
          <ParallexCustomHeight />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
