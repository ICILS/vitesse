<script>
export default {
  name: 'Textfields',
  components: {
    TextfieldSingleline: () => import('~/components/vuetifyComponents/textfields/TextfieldSingleline'),
    TextfieldShaped: () => import('~/components/vuetifyComponents/textfields/TextfieldShaped'),
    TextfieldDisabledReadonly: () => import('~/components/vuetifyComponents/textfields/TextfieldDisabledReadonly'),
    TextfieldDense: () => import('~/components/vuetifyComponents/textfields/TextfieldDense'),
    TextfieldIcons: () => import('~/components/vuetifyComponents/textfields/TextfieldIcons'),
    TextfieldPasswordInput: () => import('~/components/vuetifyComponents/textfields/TextfieldPasswordInput'),
    TextfieldClearable: () => import('~/components/vuetifyComponents/textfields/TextfieldClearable'),
    TextfieldCharacterCounter: () => import('~/components/vuetifyComponents/textfields/TextfieldCharacterCounter'),
    TextfieldAutohideDetails: () => import('~/components/vuetifyComponents/textfields/TextfieldAutohideDetails'),
    TextfieldBoxStyle: () => import('~/components/vuetifyComponents/textfields/TextfieldBoxStyle'),
    TextfieldSoloStyle: () => import('~/components/vuetifyComponents/textfields/TextfieldSoloStyle'),
    TextfieldOutlineStyle: () => import('~/components/vuetifyComponents/textfields/TextfieldOutlineStyle'),
    TextfieldCustomColors: () => import('~/components/vuetifyComponents/textfields/TextfieldCustomColors'),
    TextfieldMask: () => import('~/components/vuetifyComponents/textfields/TextfieldMask'),
    TextfieldHintText: () => import('~/components/vuetifyComponents/textfields/TextfieldHintText'),
    TextfieldPrefixesSuffixes: () => import('~/components/vuetifyComponents/textfields/TextfieldPrefixesSuffixes'),
    TextfieldIconEvents: () => import('~/components/vuetifyComponents/textfields/TextfieldIconEvents'),
    TextfieldIconSlots: () => import('~/components/vuetifyComponents/textfields/TextfieldIconSlots'),
    TextfieldLabelSlots: () => import('~/components/vuetifyComponents/textfields/TextfieldLabelSlots'),
    TextfieldValidation: () => import('~/components/vuetifyComponents/textfields/TextfieldValidation'),
    TextfieldFullwidthCharahterCounter: () => import('~/components/vuetifyComponents/textfields/TextfieldFullwidthCharahterCounter'),
    TextfieldProgressbar: () => import('~/components/vuetifyComponents/textfields/TextfieldProgressbar'),
    TextfieldCustomValidation: () => import('~/components/vuetifyComponents/textfields/TextfieldCustomValidation'),
  },

  data: () => ({
  }),
}
</script>

<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Textfields - Single line">
          <TextfieldSingleline />
        </BaseCard>

        <BaseCard heading="Textfields - Shaped">
          <TextfieldShaped />
        </BaseCard>

        <BaseCard heading="Textfields - Disabled and readonly">
          <TextfieldDisabledReadonly />
        </BaseCard>

        <BaseCard heading="Textfields - Dense">
          <TextfieldDense />
        </BaseCard>

        <BaseCard heading="Textfields - Icons">
          <TextfieldIcons />
        </BaseCard>

        <BaseCard heading="Textfields - Clearable">
          <TextfieldClearable />
        </BaseCard>

        <BaseCard heading="Textfields - Character counter">
          <TextfieldCharacterCounter />
        </BaseCard>

        <BaseCard heading="Textfields - Auto hiding details">
          <TextfieldAutohideDetails />
        </BaseCard>

        <BaseCard heading="Textfields - Password input">
          <TextfieldPasswordInput />
        </BaseCard>

        <BaseCard heading="Textfields - Box style">
          <TextfieldBoxStyle />
        </BaseCard>

        <BaseCard heading="Textfields - Solo style">
          <TextfieldSoloStyle />
        </BaseCard>

        <BaseCard heading="Textfields - Outlined style">
          <TextfieldOutlineStyle />
        </BaseCard>

        <BaseCard heading="Textfields - Custom colors">
          <TextfieldCustomColors />
        </BaseCard>

        <BaseCard heading="Textfields - Masks (using vue-the-mask)">
          <TextfieldMask />
        </BaseCard>

        <BaseCard heading="Textfields - Hint text">
          <TextfieldHintText />
        </BaseCard>

        <BaseCard heading="Textfields - Prefixes & suffixes">
          <TextfieldPrefixesSuffixes />
        </BaseCard>

        <BaseCard heading="Textfields - Icon events">
          <TextfieldIconEvents />
        </BaseCard>

        <BaseCard heading="Textfields - Icon slots">
          <TextfieldIconSlots />
        </BaseCard>

        <BaseCard heading="Textfields - Label slot">
          <TextfieldLabelSlots />
        </BaseCard>

        <BaseCard heading="Textfields - Validation">
          <TextfieldValidation />
        </BaseCard>

        <BaseCard heading="Textfields - Full-width text field with character counter">
          <TextfieldFullwidthCharahterCounter />
        </BaseCard>

        <BaseCard heading="Textfields - Progress bar">
          <TextfieldProgressbar />
        </BaseCard>

        <BaseCard heading="Textfields - Custom validation">
          <TextfieldCustomValidation />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
