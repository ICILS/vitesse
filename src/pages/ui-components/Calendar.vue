<script>
export default {
  name: 'Calendar',
  components: {
    CalendarWeekly: () =>
      import('~/components/vuetifyComponents/calendar/CalendarWeekly'),
    CalendarDaily: () =>
      import('~/components/vuetifyComponents/calendar/CalendarDaily'),
    CalendarEvents: () =>
      import('~/components/vuetifyComponents/calendar/CalendarEvents'),
    CalendarSlots: () =>
      import('~/components/vuetifyComponents/calendar/CalendarSlots'),
  },

  data: () => ({
    page: {
      title: 'Calendar',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Calendar',
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
        <BaseCard heading="Calendar - Weekly">
          <CalendarWeekly />
        </BaseCard>

        <BaseCard heading="Calendar - Daily">
          <CalendarDaily />
        </BaseCard>

        <BaseCard heading="Calendar - Slots">
          <CalendarSlots />
        </BaseCard>

        <BaseCard heading="Calendar - Events">
          <CalendarEvents />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
