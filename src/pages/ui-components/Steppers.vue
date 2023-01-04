<script setup lang="ts">
import BaseBreadcrumb from '~/components/base/BaseBreadcrumb.vue'
import BaseCard from '~/components/base/BaseCard.vue'
import SteppersEditable from '~/components/vuetifyComponents/steppers/SteppersEditable.vue'
import SteppersNonEditable from '~/components/vuetifyComponents/steppers/SteppersNonEditable.vue'
import SteppersOptional from '~/components/vuetifyComponents/steppers/SteppersOptional.vue'
import SteppersHorizontal from '~/components/vuetifyComponents/steppers/SteppersHorizontal.vue'
import SteppersVertical from '~/components/vuetifyComponents/steppers/SteppersVertical.vue'
import SteppersLinear from '~/components/vuetifyComponents/steppers/SteppersLinear.vue'
import SteppersNonLinear from '~/components/vuetifyComponents/steppers/SteppersNonLinear.vue'
import SteppersAlternateLabels from '~/components/vuetifyComponents/steppers/SteppersAlternateLabels.vue'
import SteppersMultilineErrorState from '~/components/vuetifyComponents/steppers/SteppersMultilineErrorState.vue'
import SteppersAlternateLabelsMultilineErrorState from '~/components/vuetifyComponents/steppers/SteppersAlternateLabelsMultilineErrorState.vue'
import SteppersVerticalMultilineErrorState from '~/components/vuetifyComponents/steppers/SteppersVerticalMultilineErrorState.vue'
import SteppersDynamic from '~/components/vuetifyComponents/steppers/SteppersDynamic.vue'

const page = {
  title: 'Steppers',
  icon: 'mdi-chart-bubble',
}

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Steppers',
    disabled: true,
    href: '#',
  },
]
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Steppers - Editable steps">
          <SteppersEditable />
        </BaseCard>

        <BaseCard heading="Steppers - Non-editable steps">
          <SteppersNonEditable />
        </BaseCard>

        <BaseCard heading="Steppers - Optional steps">
          <SteppersOptional />
        </BaseCard>

        <BaseCard heading="Steppers - Horizontal steps">
          <SteppersHorizontal />
        </BaseCard>

        <BaseCard heading="Steppers - Vertical steppers">
          <SteppersVertical />
        </BaseCard>

        <BaseCard heading="Steppers - Linear steppers">
          <SteppersLinear />
        </BaseCard>

        <BaseCard heading="Steppers - Non-linear steppers">
          <SteppersNonLinear />
        </BaseCard>

        <BaseCard heading="Steppers - Alternate labels">
          <SteppersAlternateLabels />
        </BaseCard>

        <BaseCard heading="Steppers - Multi-line error state">
          <SteppersMultilineErrorState />
        </BaseCard>

        <BaseCard heading="Steppers - Alternative label multi-line error state">
          <SteppersAlternateLabelsMultilineErrorState />
        </BaseCard>

        <BaseCard heading="Steppers - Vertical multi-line error state">
          <SteppersVerticalMultilineErrorState />
        </BaseCard>

        <BaseCard heading="Steppers - Dynamic steps">
          <SteppersDynamic />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
