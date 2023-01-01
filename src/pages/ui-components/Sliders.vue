<script>
export default {
  name: 'Sliders',
  components: {
    SlidersMinMax: () => import('~/components/vuetifyComponents/sliders/SlidersMinMax'),
    SlidersDisabled: () => import('~/components/vuetifyComponents/sliders/SlidersDisabled'),
    SlidersReadonly: () => import('~/components/vuetifyComponents/sliders/SlidersReadonly'),
    SlidersIcons: () => import('~/components/vuetifyComponents/sliders/SlidersIcons'),
    SlidersVertical: () => import('~/components/vuetifyComponents/sliders/SlidersVertical'),
    SlidersThumb: () => import('~/components/vuetifyComponents/sliders/SlidersThumb'),
    SlidersInverseLabel: () => import('~/components/vuetifyComponents/sliders/SlidersInverseLabel'),
    SlidersCustomRange: () => import('~/components/vuetifyComponents/sliders/SlidersCustomRange'),
    SlidersTicks: () => import('~/components/vuetifyComponents/sliders/SlidersTicks'),
    SlidersCustomcolors: () => import('~/components/vuetifyComponents/sliders/SlidersCustomcolors'),
    SlidersRange: () => import('~/components/vuetifyComponents/sliders/SlidersRange'),
    SlidersValidation: () => import('~/components/vuetifyComponents/sliders/SlidersValidation'),
    SlidersSlots: () => import('~/components/vuetifyComponents/sliders/SlidersSlots'),
  },

  data: () => ({
  }),
}
</script>

<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sliders - Min & Max values">
          <SlidersMinMax />
        </BaseCard>

        <BaseCard heading="Sliders - Disabled">
          <SlidersDisabled />
        </BaseCard>

        <BaseCard heading="Sliders - Readonly">
          <SlidersReadonly />
        </BaseCard>

        <BaseCard heading="Sliders - Icons">
          <SlidersIcons />
        </BaseCard>

        <BaseCard heading="Sliders - Vertical sliders">
          <SlidersVertical />
        </BaseCard>

        <BaseCard heading="Sliders - Thumb">
          <SlidersThumb />
        </BaseCard>

        <BaseCard heading="Sliders - Inverse label">
          <SlidersInverseLabel />
        </BaseCard>

        <BaseCard heading="Sliders - Custom Range slider">
          <SlidersCustomRange />
        </BaseCard>

        <BaseCard heading="Sliders - Ticks">
          <SlidersTicks />
        </BaseCard>

        <BaseCard heading="Sliders - Custom colors">
          <SlidersCustomcolors />
        </BaseCard>

        <BaseCard heading="Sliders - Range">
          <SlidersRange />
        </BaseCard>

        <BaseCard heading="Sliders - Validation">
          <SlidersValidation />
        </BaseCard>

        <BaseCard heading="Sliders - Slots">
          <SlidersSlots />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
