<script>
export default {
  name: 'Treeview',
  components: {
    TreeviewDenseMode: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewDenseMode'),
    TreeviewCheckboxColor: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewCheckboxColor'),
    TreeviewColor: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewColor'),
    TreeviewShaped: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewShaped'),
    TreeviewRounded: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewRounded'),
    TreeviewDisablingNodes: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewDisablingNodes'),
    TreeviewSelectionType: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewSelectionType'),
    TreeviewSelectable: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewSelectable'),
    TreeviewActivatable: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewActivatable'),
    TreeviewHoverable: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewHoverable'),
    TreeviewOpenall: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewOpenall'),
    TreeviewSlots: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewSlots'),
    TreeviewSearchingDirectory: () =>
      import(
        '~/components/vuetifyComponents/treeview/TreeviewSearchingDirectory'
      ),
    TreeviewAsyncItems: () =>
      import('~/components/vuetifyComponents/treeview/TreeviewAsyncItems'),
    TreeviewCustomSelectableicons: () =>
      import(
        '~/components/vuetifyComponents/treeview/TreeviewCustomSelectableicons'
      ),
  },

  data: () => ({
    page: {
      title: 'Treeview',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'Treeview',
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
        <BaseCard heading="Treeview - Dense mode">
          <TreeviewDenseMode />
        </BaseCard>

        <BaseCard heading="Treeview - Checkbox color">
          <TreeviewCheckboxColor />
        </BaseCard>

        <BaseCard heading="Treeview - Color">
          <TreeviewColor />
        </BaseCard>

        <BaseCard heading="Treeview - Shaped">
          <TreeviewShaped />
        </BaseCard>

        <BaseCard heading="Treeview - Rounded">
          <TreeviewRounded />
        </BaseCard>

        <BaseCard heading="Treeview - Disabling nodes">
          <TreeviewDisablingNodes />
        </BaseCard>

        <BaseCard heading="Treeview - Selection type">
          <TreeviewSelectionType />
        </BaseCard>

        <BaseCard heading="Treeview - Selectable">
          <TreeviewSelectable />
        </BaseCard>

        <BaseCard heading="Treeview - Activatable">
          <TreeviewActivatable />
        </BaseCard>

        <BaseCard heading="Treeview - Hoverable">
          <TreeviewHoverable />
        </BaseCard>

        <BaseCard heading="Treeview - Open-all">
          <TreeviewOpenall />
        </BaseCard>

        <BaseCard heading="Treeview - Slots">
          <TreeviewSlots />
        </BaseCard>

        <BaseCard heading="Treeview - Searching a directory">
          <TreeviewSearchingDirectory />
        </BaseCard>

        <BaseCard heading="Treeview - Async items">
          <TreeviewAsyncItems />
        </BaseCard>

        <BaseCard heading="Treeview - Custom selectable icons">
          <TreeviewCustomSelectableicons />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
