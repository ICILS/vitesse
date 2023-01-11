<script setup lang="ts">
defineProps({
  title: String,
  breadcrumbs: Array as any,
  icon: String,
  hidden: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <v-row v-if="!$props.hidden" class="page-breadcrumb mb-0">
    <v-col cols="12" sm="12">
      <v-toolbar flat class="pa-1">
        <div>
          <h2 class="text-base pa-1">
            {{ title }}
          </h2>
          <v-breadcrumbs :icon="icon" :items="breadcrumbs" class="pa-1">
            <template v-if="breadcrumbs" #divider>
              <v-icon icon="i-mdi-chevron-right" />
            </template>
          </v-breadcrumbs>
        </div>
        <slot />
        <!-- <v-spacer /> -->
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>
