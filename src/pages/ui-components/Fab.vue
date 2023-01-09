<script setup lang="ts">
const page = {
  title: 'Fab',
  icon: 'mdi-apps',
}

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Fab',
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
        <BaseCard heading="FAB - Small variant">
          <FabSmall />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="FAB - Display animation">
          <FabDisplayAnimation />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="FAB - FAB with speed-dial">
          <FabSpeedDial />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="FAB - Lateral screens">
          <FabLateralScreen />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
