<script setup lang="ts">
import { ref } from 'vue'
import BaseBreadcrumb from '~/components/BaseBreadcrumb.vue'
import BaseCard from '~/components/BaseCard.vue'
import SelectionControlsChkBoolean from '~/components/vuetifyComponents/selection-controls/SelectionControlsChkBoolean.vue'
import SelectionControlsChkArray from '~/components/vuetifyComponents/selection-controls/SelectionControlsChkArray.vue'
import SelectionControlsChkStates from '~/components/vuetifyComponents/selection-controls/SelectionControlsChkStates.vue'
import SelectionControlsChkColors from '~/components/vuetifyComponents/selection-controls/SelectionControlsChkColors.vue'
import SelectionControlsChkInlinetextfield from '~/components/vuetifyComponents/selection-controls/SelectionControlsChkInlinetextfield.vue'
import SelectionControlsRadioDefault from '~/components/vuetifyComponents/selection-controls/SelectionControlsRadioDefault.vue'
import SelectionControlsRadioDirection from '~/components/vuetifyComponents/selection-controls/SelectionControlsRadioDirection.vue'
import SelectionControlsRadioColors from '~/components/vuetifyComponents/selection-controls/SelectionControlsRadioColors.vue'
import SelectionControlsSwitchBoolean from '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchBoolean.vue'
import SelectionControlsSwitchArray from '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchArray.vue'
import SelectionControlsSwitchStates from '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchStates.vue'
import SelectionControlsSwitchColors from '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchColors.vue'
import SelectionControlsSwitchFlat from '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchFlat.vue'
import SelectionControlsSwitchInset from '~/components/vuetifyComponents/selection-controls/SelectionControlsSwitchInset.vue'
import SelectionControlsLblSlot from '~/components/vuetifyComponents/selection-controls/SelectionControlsLblSlot.vue'

const page = ref({ title: 'Selection Control' })
const breadcrumbs = ref([
  {
    text: 'Form Elements',
    disabled: false,
    to: '#',
  },
  {
    text: 'Selection Control',
    disabled: true,
  },
])
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  />
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
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selection Controls - Checkboxes - Colors">
        <SelectionControlsChkColors />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard
        heading="Selection Controls - Checkboxes - Inline with a textfield"
      >
        <SelectionControlsChkInlinetextfield />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selection Controls - Radios - Default">
        <SelectionControlsRadioDefault />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selection Controls - Radios - Direction">
        <SelectionControlsRadioDirection />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selection Controls - Radios - Colors">
        <SelectionControlsRadioColors />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selection Controls - Switches - Boolean">
        <SelectionControlsSwitchBoolean />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selection Controls - Switches - Array">
        <SelectionControlsSwitchArray />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
      <BaseCard heading="Selection Controls - Switches - States">
        <SelectionControlsSwitchStates />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12">
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
</template>
