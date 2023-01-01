<script>
export default {
  name: 'Steppers',
  components: {
    SteppersEditable: () =>
      import('~/components/vuetifyComponents/steppers/SteppersEditable'),
    SteppersNonEditable: () =>
      import('~/components/vuetifyComponents/steppers/SteppersNonEditable'),
    SteppersOptional: () =>
      import('~/components/vuetifyComponents/steppers/SteppersOptional'),
    SteppersHorizontal: () =>
      import('~/components/vuetifyComponents/steppers/SteppersHorizontal'),
    SteppersVertical: () =>
      import('~/components/vuetifyComponents/steppers/SteppersVertical'),
    SteppersLinear: () =>
      import('~/components/vuetifyComponents/steppers/SteppersLinear'),
    SteppersNonLinear: () =>
      import('~/components/vuetifyComponents/steppers/SteppersNonLinear'),
    SteppersAlternateLabels: () =>
      import('~/components/vuetifyComponents/steppers/SteppersAlternateLabels'),
    SteppersMultilineErrorState: () =>
      import(
        '~/components/vuetifyComponents/steppers/SteppersMultilineErrorState'
      ),
    SteppersAlternateLabelsMultilineErrorState: () =>
      import(
        '~/components/vuetifyComponents/steppers/SteppersAlternateLabelsMultilineErrorState'
      ),
    SteppersVerticalMultilineErrorState: () =>
      import(
        '~/components/vuetifyComponents/steppers/SteppersVerticalMultilineErrorState'
      ),
    SteppersDynamic: () =>
      import('~/components/vuetifyComponents/steppers/SteppersDynamic'),
  },

  data: () => ({
    page: {
      title: 'Steppers',
    },
    breadcrumbs: [
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
    ],
  }),
}
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
