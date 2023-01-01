<script>
export default {
  name: 'DatePickers',
  components: {
    DatePickersColors: () =>
      import('~/components/vuetifyComponents/date-pickers/DatePickersColors'),
    DatePickersAllowedDates: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersAllowedDates'
      ),
    DatePickersSettingPickerWidth: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersSettingPickerWidth'
      ),
    DatePickersReactMonthYearChange: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersReactMonthYearChange'
      ),
    DatePickersInternationalization: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersInternationalization'
      ),
    DatePickersIcons: () =>
      import('~/components/vuetifyComponents/date-pickers/DatePickersIcons'),
    DatePickersReadOnly: () =>
      import('~/components/vuetifyComponents/date-pickers/DatePickersReadOnly'),
    DatePickersCurrentDateIndicator: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersCurrentDateIndicator'
      ),
    DatePickersMonthPickers: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickers'
      ),
    DatePickersMonthPickersColors: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersColors'
      ),
    DatePickersMonthPickersAllowedMonth: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersAllowedMonth'
      ),
    DatePickersMonthPickersMultiple: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersMultiple'
      ),
    DatePickersMonthPickersSettingPickersWidth: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersSettingPickersWidth'
      ),
    DatePickersMonthPickersInternationalization: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersInternationalization'
      ),
    DatePickersMonthPickersIcons: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersIcons'
      ),
    DatePickersMonthPickersReadOnly: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersReadOnly'
      ),
    DatePickersMonthPickersCurrentMonthIndicator: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersCurrentMonthIndicator'
      ),
    DatePickersInDialogMenu: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersInDialogMenu'
      ),
    DatePickersInFormattingDate: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersInFormattingDate'
      ),
    DatePickersInFormattingDateExternalLibs: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersInFormattingDateExternalLibs'
      ),
    DatePickersMultiple: () =>
      import('~/components/vuetifyComponents/date-pickers/DatePickersMultiple'),
    DatePickersRange: () =>
      import('~/components/vuetifyComponents/date-pickers/DatePickersRange'),
    DatePickersBirthdayPicker: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersBirthdayPicker'
      ),
    DatePickersEvents: () =>
      import('~/components/vuetifyComponents/date-pickers/DatePickersEvents'),
    DatePickersMonthPickersInDialogMenu: () =>
      import(
        '~/components/vuetifyComponents/date-pickers/DatePickersMonthPickersInDialogMenu'
      ),
  },

  data: () => ({
    page: {
      title: 'DatePickers',
    },
    breadcrumbs: [
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
    ],
  }),
}
</script>

<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
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
