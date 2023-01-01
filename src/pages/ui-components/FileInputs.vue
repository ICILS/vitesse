<script>
export default {
  name: 'FileInputs',
  components: {
    FileInputsMultiple: () => import('~/components/vuetifyComponents/file-inputs/FileInputsMultiple'),
    FileInputsAcceptFormats: () => import('~/components/vuetifyComponents/file-inputs/FileInputsAcceptFormats'),
    FileInputsChips: () => import('~/components/vuetifyComponents/file-inputs/FileInputsChips'),
    FileInputsSize: () => import('~/components/vuetifyComponents/file-inputs/FileInputsSize'),
    FileInputsCounter: () => import('~/components/vuetifyComponents/file-inputs/FileInputsCounter'),
    FileInputsCustomIcon: () => import('~/components/vuetifyComponents/file-inputs/FileInputsCustomIcon'),
    FileInputsDense: () => import('~/components/vuetifyComponents/file-inputs/FileInputsDense'),
    FileInputsSelectionSlot: () => import('~/components/vuetifyComponents/file-inputs/FileInputsSelectionSlot'),
    FileInputsValidation: () => import('~/components/vuetifyComponents/file-inputs/FileInputsValidation'),
    FileInputsComplexSlots: () => import('~/components/vuetifyComponents/file-inputs/FileInputsComplexSlots'),
  },

  data: () => ({
  }),
}
</script>

<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="File inputs - Multiple">
          <FileInputsMultiple />
        </BaseCard>

        <BaseCard heading="File inputs - Accept formats">
          <FileInputsAcceptFormats />
        </BaseCard>

        <BaseCard heading="File inputs - With chips">
          <FileInputsChips />
        </BaseCard>

        <BaseCard heading="File inputs - Size displaying">
          <FileInputsSize />
        </BaseCard>

        <BaseCard heading="File inputs - Counter">
          <FileInputsCounter />
        </BaseCard>

        <BaseCard heading="File inputs - Custom icons">
          <FileInputsCustomIcon />
        </BaseCard>

        <BaseCard heading="File inputs - Dense">
          <FileInputsDense />
        </BaseCard>

        <BaseCard heading="File inputs - Selection slot">
          <FileInputsSelectionSlot />
        </BaseCard>

        <BaseCard heading="File inputs - Validation">
          <FileInputsValidation />
        </BaseCard>

        <BaseCard heading="File inputs - Complex selection slots">
          <FileInputsComplexSlots />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
