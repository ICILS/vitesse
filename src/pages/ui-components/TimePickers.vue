<script setup lang="ts">
const page = {
  title: 'TimePickers',
}

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'TimePickers',
    disabled: true,
    href: '#',
  },
]
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Time Pickers - Colors">
          <TimePickerColors />
        </BaseCard>

        <BaseCard heading="Time Pickers - Disabled">
          <TimePickerDisabled />
        </BaseCard>

        <BaseCard heading="Time Pickers - Read-only">
          <TimePickerReadonly />
        </BaseCard>

        <BaseCard heading="Time Pickers - 24h format">
          <TimePicker24hFormat />
        </BaseCard>

        <BaseCard heading="Time Pickers - Allowed times">
          <TimePickerAllowedTimes />
        </BaseCard>

        <BaseCard heading="Time Pickers - Setting picker width">
          <TimePickerSettingPickerWidth />
        </BaseCard>

        <BaseCard heading="Time Pickers - AM/PM switch in title">
          <TimePickerAmPmSwitchinTitle />
        </BaseCard>

        <BaseCard heading="Time Pickers - No title">
          <TimePickerNoTitle />
        </BaseCard>

        <BaseCard heading="Time Pickers - With seconds">
          <TimePickerWithSeconds />
        </BaseCard>

        <BaseCard heading="Time Pickers - Scrollable">
          <TimePickerScrollable />
        </BaseCard>

        <BaseCard heading="Time Pickers - In dialog and menu">
          <TimePickerInDialogMenu />
        </BaseCard>

        <BaseCard heading="Time Pickers - Range">
          <TimePickerInRange />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
