<script setup lang="ts">
import BaseCard from '~/components/BaseCard.vue'
import SlidersMinMax from '~/components/vuetifyComponents/sliders/SlidersMinMax.vue'
import SlidersDisabled from '~/components/vuetifyComponents/sliders/SlidersDisabled.vue'
import SlidersReadonly from '~/components/vuetifyComponents/sliders/SlidersReadonly.vue'
import SlidersIcons from '~/components/vuetifyComponents/sliders/SlidersIcons.vue'
import SlidersVertical from '~/components/vuetifyComponents/sliders/SlidersVertical.vue'
import SlidersThumb from '~/components/vuetifyComponents/sliders/SlidersThumb.vue'
import SlidersInverseLabel from '~/components/vuetifyComponents/sliders/SlidersInverseLabel.vue'
import SlidersCustomRange from '~/components/vuetifyComponents/sliders/SlidersCustomRange.vue'
import SlidersTicks from '~/components/vuetifyComponents/sliders/SlidersTicks.vue'
import SlidersCustomcolors from '~/components/vuetifyComponents/sliders/SlidersCustomcolors.vue'
import SlidersRange from '~/components/vuetifyComponents/sliders/SlidersRange.vue'
import SlidersValidation from '~/components/vuetifyComponents/sliders/SlidersValidation.vue'
import SlidersSlots from '~/components/vuetifyComponents/sliders/SlidersSlots.vue'
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
