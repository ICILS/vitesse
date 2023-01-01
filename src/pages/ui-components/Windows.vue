<script>
export default {
  name: 'Window',
  components: {
    WindowsVertical: () =>
      import('~/components/vuetifyComponents/windows/WindowsVertical'),
    WindowsReverse: () =>
      import('~/components/vuetifyComponents/windows/WindowsReverse'),
    WindowsOnboarding: () =>
      import('~/components/vuetifyComponents/windows/WindowsOnboarding'),
    WindowsAccountCreation: () =>
      import('~/components/vuetifyComponents/windows/WindowsAccountCreation'),
  },

  data: () => ({
    page: {
      title: 'Windows',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Windows',
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
        <BaseCard heading="windows - Vertical">
          <WindowsVertical />
        </BaseCard>

        <BaseCard heading="windows - Reverse">
          <WindowsReverse />
        </BaseCard>

        <BaseCard heading="windows - Onboarding">
          <WindowsOnboarding />
        </BaseCard>

        <BaseCard heading="windows - Account creation">
          <WindowsAccountCreation />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
