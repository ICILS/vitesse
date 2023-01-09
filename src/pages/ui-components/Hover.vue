<script setup lang="ts">
const page = {
  title: 'Hover',
  icon: 'mdi mdi-compass-outline',
}

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Hover',
    disabled: true,
    href: '#',
  },
]

</script>


<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Hover - Disabled">
          <HoverDisabled />
        </BaseCard>

        <BaseCard heading="Hover - Open/Close Delay">
          <HoverOpenClose />
        </BaseCard>

        <BaseCard heading="Hover - Hover list">
          <HoverList />
        </BaseCard>

        <BaseCard heading="Hover - Transitions">
          <HoverTransitions />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
