<script>
export default {
  name: 'ListItemGroups',
  components: {
    GrpListItemDeemphasizedSelections: () =>
      import(
        '~/components/vuetifyComponents/listitem-group/GrpListItemDeemphasizedSelections'
      ),
    GrpListItemSelectMultiple: () =>
      import(
        '~/components/vuetifyComponents/listitem-group/GrpListItemSelectMultiple'
      ),
    GrpListItemMandatory: () =>
      import(
        '~/components/vuetifyComponents/listitem-group/GrpListItemMandatory'
      ),
    GrpListItemCustomActiveClass: () =>
      import(
        '~/components/vuetifyComponents/listitem-group/GrpListItemCustomActiveClass'
      ),
    GrpListItemSelectionControls: () =>
      import(
        '~/components/vuetifyComponents/listitem-group/GrpListItemSelectionControls'
      ),
  },

  data: () => ({
    page: {
      title: 'List Item Groups',
    },
    breadcrumbs: [
      {
        text: 'UI Components',
        disabled: false,
        href: '#',
      },
      {
        text: 'List Item Groups',
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
        <BaseCard heading="List Item Groups - De-emphasized selections">
          <GrpListItemDeemphasizedSelections />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="List Item Groups - Select multiple items">
          <GrpListItemSelectMultiple />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="List Item Groups - Mandatory">
          <GrpListItemMandatory />
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12">
        <BaseCard heading="List Item Groups - Custom active class">
          <GrpListItemCustomActiveClass />
        </BaseCard>

        <BaseCard heading="List Item Groups - Selection controls">
          <GrpListItemSelectionControls />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
