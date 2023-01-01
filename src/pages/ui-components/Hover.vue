<script>
export default {
  name: 'Hover',
  components: {
    HoverDisabled: () =>
      import('~/components/vuetifyComponents/hover/HoverDisabled'),
    HoverOpenClose: () =>
      import('~/components/vuetifyComponents/hover/HoverOpenClose'),
    HoverList: () => import('~/components/vuetifyComponents/hover/HoverList'),
    HoverTransitions: () =>
      import('~/components/vuetifyComponents/hover/HoverTransitions'),
  },

  data: () => ({
    page: {
      title: 'Hover',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Hover',
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
        <BaseCard heading="Hover - Disabled">
          <HoverDisabled />
        </BaseCard>

        <BaseCard heading="Hover - Open/Close Delay">
          <HoverOpenClose />
        </BaseCard>

        <BaseCard heading="Hover - Hover list">
          <HoverList />
        </BaseCard>

        <BaseCard heading="Hover - Transitions">
          <HoverTransitions />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
