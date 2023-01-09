<script setup lang="ts">
const page = reactive({
  title: 'DatePickers',
  icon: 'mdi-calendar',
})

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'DatePickers',
    disabled: true,
    href: '#',
  },
]
</script>



<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />
    <v-row>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Date pickers - Colors">
          <DatePickersColors />
        </BaseCard>

        <BaseCard heading="Date pickers - Allowed dates">
          <DatePickersAllowedDates />
        </BaseCard>

        <BaseCard heading="Date pickers - Setting picker width">
          <DatePickersSettingPickerWidth />
        </BaseCard>

        <BaseCard heading="Date pickers - react to displayed month/year change">
          <DatePickersReactMonthYearChange />
        </BaseCard>

        <BaseCard heading="Date pickers - Internationalization">
          <DatePickersInternationalization />
        </BaseCard>

        <BaseCard heading="Date pickers - icons">
          <DatePickersIcons />
        </BaseCard>

        <BaseCard heading="Date pickers - read only">
          <DatePickersReadOnly />
        </BaseCard>

        <BaseCard heading="Date pickers - current date indicator">
          <DatePickersCurrentDateIndicator />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers">
          <DatePickersMonthPickers />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - Colors">
          <DatePickersMonthPickersColors />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - Allowed months">
          <DatePickersMonthPickersAllowedMonth />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - Multiple">
          <DatePickersMonthPickersMultiple />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - Setting picker width">
          <DatePickersMonthPickersSettingPickersWidth />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - Internationalization">
          <DatePickersMonthPickersInternationalization />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - icons">
          <DatePickersMonthPickersIcons />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - read only">
          <DatePickersMonthPickersReadOnly />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - current month indicator">
          <DatePickersMonthPickersCurrentMonthIndicator />
        </BaseCard>

        <BaseCard heading="Date Pickers - In dialog and menu">
          <DatePickersInDialogMenu />
        </BaseCard>

        <BaseCard heading="Date Pickers - formatting date">
          <DatePickersInFormattingDate />
        </BaseCard>

        <BaseCard heading="Date Pickers - formatting date using external libs">
          <DatePickersInFormattingDateExternalLibs />
        </BaseCard>

        <BaseCard heading="Date Pickers - Multiple">
          <DatePickersMultiple />
        </BaseCard>

        <BaseCard heading="Date Pickers - Range">
          <DatePickersRange />
        </BaseCard>

        <BaseCard heading="Date Pickers - birthday picker">
          <DatePickersBirthdayPicker />
        </BaseCard>

        <BaseCard heading="Date Pickers - Events">
          <DatePickersEvents />
        </BaseCard>

        <BaseCard heading="Date Pickers - Month pickers - In dialog and menu">
          <DatePickersMonthPickersInDialogMenu />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
