<script>
export default {
  name: 'Overlay',
  components: {
    OverlayAbsolute: () =>
      import('~/components/vuetifyComponents/overlay/OverlayAbsolute'),
    OverlayOpacity: () =>
      import('~/components/vuetifyComponents/overlay/OverlayOpacity'),
    OverlayZindex: () =>
      import('~/components/vuetifyComponents/overlay/OverlayZindex'),
    OverlayLoader: () =>
      import('~/components/vuetifyComponents/overlay/OverlayLoader'),
    OverlayAdvanced: () =>
      import('~/components/vuetifyComponents/overlay/OverlayAdvanced'),
  },

  data: () => ({
    page: {
      title: 'Overlay',
    },
    breadcrumbs: [
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
    ],
  }),
}
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Overlay - Absolute">
          <OverlayAbsolute />
        </BaseCard>

        <BaseCard heading="Overlay - Opacity">
          <OverlayOpacity />
        </BaseCard>

        <BaseCard heading="Overlay - ZIndex">
          <OverlayZindex />
        </BaseCard>

        <BaseCard heading="Overlay - Loader">
          <OverlayLoader />
        </BaseCard>

        <BaseCard heading="Overlay - Advanced">
          <OverlayAdvanced />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
