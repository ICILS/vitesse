<script>
export default {
  name: 'OverflowButtons',
  components: {
    OverflowButtonsCounter: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsCounter'
      ),
    OverflowButtonsDisabled: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsDisabled'
      ),
    OverflowButtonsDense: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsDense'
      ),
    OverflowButtonsEditable: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsEditable'
      ),
    OverflowButtonsFilled: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsFilled'
      ),
    OverflowButtonsHint: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsHint'
      ),
    OverflowButtonsLoading: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsLoading'
      ),
    OverflowButtonsMenuProps: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsMenuProps'
      ),
    OverflowButtonsReadonly: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsReadonly'
      ),
    OverflowButtonsSegmented: () =>
      import(
        '~/components/vuetifyComponents/overflow-buttons/OverflowButtonsSegmented'
      ),
  },

  data: () => ({
    page: {
      title: 'Overflow Buttons',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Overflow Buttons',
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
        <BaseCard heading="Overflow buttons - Counter">
          <OverflowButtonsCounter />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Disabled">
          <OverflowButtonsDisabled />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Dense">
          <OverflowButtonsDense />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Editable">
          <OverflowButtonsEditable />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Filled">
          <OverflowButtonsFilled />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Hint">
          <OverflowButtonsHint />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Loading">
          <OverflowButtonsLoading />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Menu props">
          <OverflowButtonsMenuProps />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Read-only">
          <OverflowButtonsReadonly />
        </BaseCard>

        <BaseCard heading="Overflow buttons - Segmented">
          <OverflowButtonsSegmented />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
