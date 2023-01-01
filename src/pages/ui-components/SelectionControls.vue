<script>
export default {
  name: 'SelectionControls',
  components: {
    SelectionControlsChkBoolean: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsChkBoolean'
      ),
    SelectionControlsChkArray: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsChkArray'
      ),
    SelectionControlsChkStates: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsChkStates'
      ),
    SelectionControlsChkColors: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsChkColors'
      ),
    SelectionControlsChkInlinetextfield: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsChkInlinetextfield'
      ),
    SelectionControlsRadioDefault: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsRadioDefault'
      ),
    SelectionControlsRadioDirection: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsRadioDirection'
      ),
    SelectionControlsRadioColors: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsRadioColors'
      ),
    SelectionControlsSwitchBoolean: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchBoolean'
      ),
    SelectionControlsSwitchArray: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchArray'
      ),
    SelectionControlsSwitchStates: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchStates'
      ),
    SelectionControlsSwitchColors: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchColors'
      ),
    SelectionControlsSwitchFlat: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchFlat'
      ),
    SelectionControlsSwitchInset: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchInset'
      ),
    SelectionControlsLblSlot: () =>
      import(
        '~/components/vuetifyComponents/selection-controls/SelectionControlsLblSlot'
      ),
  },

  data: () => ({}),
}
</script>

<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Selection Controls - Checkboxes - Boolean">
          <SelectionControlsChkBoolean />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Selection Controls - Checkboxes - Array">
          <SelectionControlsChkArray />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Selection Controls - Checkboxes - States">
          <SelectionControlsChkStates />
        </BaseCard>

        <BaseCard heading="Selection Controls - Checkboxes - Colors">
          <SelectionControlsChkColors />
        </BaseCard>

        <BaseCard heading="Selection Controls - Checkboxes - Inline with a textfield">
          <SelectionControlsChkInlinetextfield />
        </BaseCard>

        <BaseCard heading="Selection Controls - Radios - Default">
          <SelectionControlsRadioDefault />
        </BaseCard>

        <BaseCard heading="Selection Controls - Radios - Direction">
          <SelectionControlsRadioDirection />
        </BaseCard>

        <BaseCard heading="Selection Controls - Radios - Colors">
          <SelectionControlsRadioColors />
        </BaseCard>

        <BaseCard heading="Selection Controls - Switches - Boolean">
          <SelectionControlsSwitchBoolean />
        </BaseCard>

        <BaseCard heading="Selection Controls - Switches - Array">
          <SelectionControlsSwitchArray />
        </BaseCard>

        <BaseCard heading="Selection Controls - Switches - States">
          <SelectionControlsSwitchStates />
        </BaseCard>

        <BaseCard heading="Selection Controls - Switches - Colors">
          <SelectionControlsSwitchColors />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Selection Controls - Switches - Flat">
          <SelectionControlsSwitchFlat />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Selection Controls - Switches - inset">
          <SelectionControlsSwitchInset />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="Selection Controls - Label slot">
          <SelectionControlsLblSlot />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
