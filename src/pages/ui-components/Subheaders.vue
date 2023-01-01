<script>
export default {
  name: 'Subheaders',
  components: {
    SubheadersInset: () =>
      import('~/components/vuetifyComponents/subheaders/SubheadersInset'),
    SubheadersGrid: () =>
      import('~/components/vuetifyComponents/subheaders/SubheadersGrid'),
    SubheadersMenu: () =>
      import('~/components/vuetifyComponents/subheaders/SubheadersMenu'),
    SubheadersSocialMedia: () =>
      import('~/components/vuetifyComponents/subheaders/SubheadersSocialMedia'),
  },

  data: () => ({
    page: {
      title: 'Subheaders',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Subheaders',
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
        <BaseCard heading="Subheaders - Inset subheaders">
          <SubheadersInset />
        </BaseCard>

        <BaseCard heading="Subheaders - Grid subheaders">
          <SubheadersGrid />
        </BaseCard>

        <BaseCard heading="Subheaders - Menu subheaders">
          <SubheadersMenu />
        </BaseCard>

        <BaseCard heading="Subheaders - Subheaders with social media">
          <SubheadersSocialMedia />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
