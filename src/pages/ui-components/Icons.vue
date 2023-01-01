<script>
export default {
  name: 'Icons',
  components: {
    IconsMaterial: () =>
      import('~/components/vuetifyComponents/icons/IconsMaterial'),
    IconFontawesome: () =>
      import('~/components/vuetifyComponents/icons/IconFontawesome'),
    IconColors: () => import('~/components/vuetifyComponents/icons/IconColors'),
    IconButtons: () =>
      import('~/components/vuetifyComponents/icons/IconButtons'),
    IconClickable: () =>
      import('~/components/vuetifyComponents/icons/IconClickable'),
    IconMdiSvg: () => import('~/components/vuetifyComponents/icons/IconMdiSvg'),
  },

  data: () => ({
    page: {
      title: 'Icons',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Icons',
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
        <BaseCard heading="Icons - Material Design">
          <IconsMaterial />
        </BaseCard>

        <BaseCard heading="Icons - Font Awesome">
          <IconFontawesome />
        </BaseCard>

        <BaseCard heading="Icons - Color">
          <IconColors />
        </BaseCard>

        <BaseCard heading="Icons - Buttons">
          <IconButtons />
        </BaseCard>

        <BaseCard heading="Icons - Clickable">
          <IconClickable />
        </BaseCard>

        <BaseCard heading="Icons - MDI SVG">
          <IconMdiSvg />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
