<script setup lang="ts">
const page = {
  title: 'Color Pickers',
  icon: 'mdi-palette',
}

const breadcrumbs = [
  {
    text: 'UI Components',
    disabled: false,
    href: '#',
  },
  {
    text: 'Color Pickers',
    disabled: true,
    href: '#',
  },
]
</script>



<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs" />

    <v-row>
      <v-col cols="12" sm="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard heading="Color Pickers - Usage">
          <ColorPickerUsage />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard heading="Color Pickers - Canvas">
          <ColorPickerCanvas />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard heading="Color Pickers - Elevation">
          <ColorPickerElevation />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard heading="Color Pickers - Mode">
          <ColorPickerMode />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard heading="Color Pickers - Model">
          <ColorPickerModel />
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="12" class="d-flex align-items-stretch">
        <BaseCard heading="Color Pickers - Swatches">
          <ColorPickerSwatches />
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>
