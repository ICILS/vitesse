<script>
export default {
  name: 'ColorPickers',
  components: {
    ColorPickersModel: () =>
      import('~/components/vuetifyComponents/color-pickers/ColorPickersModel'),
    ColorPickersSwatches: () =>
      import(
        '~/components/vuetifyComponents/color-pickers/ColorPickersSwatches'
      ),
    ColorPickersInputs: () =>
      import('~/components/vuetifyComponents/color-pickers/ColorPickersInputs'),
    ColorPickersCanvas: () =>
      import('~/components/vuetifyComponents/color-pickers/ColorPickersCanvas'),
  },

  data: () => ({
    page: {
      title: 'Color Pickers',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Color Pickers',
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
        <BaseCard heading="Color Pickers - Model">
          <ColorPickersModel />
        </BaseCard>

        <BaseCard heading="Color Pickers - Swatches">
          <ColorPickersSwatches />
        </BaseCard>

        <BaseCard heading="Color Pickers - Inputs">
          <ColorPickersInputs />
        </BaseCard>

        <BaseCard heading="Color Pickers - Canvas">
          <ColorPickersCanvas />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
