<script setup lang="ts">
defineProps<{
  modelValue?: boolean
  to: string
  tabindex?: string
  contentTitle: string
  contentSubtitle: string
}>()
</script>

<template>
  <div class="v-col-sm-4 v-col-12" xs="6">
    <RouterLink
      :to="to" :tabindex="tabindex" :model-value="modelValue"
      class="v-list-item v-list-item--link v-theme--light v-list-item--border v-list-item--density-default v-list-item--two-line v-list-item--rounded v-list-item--variant-text"
    >
      <span class="v-list-item__overlay" /> <span class="v-list-item__underlay" />
      <div class="v-list-item__prepend">
        <div class="v-avatar v-theme--light v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
          <i
            class="mdi-view-dashboard-outline mdi v-icon notranslate v-theme--light v-icon--size-default text-indigo-darken-1"
            aria-hidden="true"
          />
          <span class="v-avatar__underlay" />
        </div>
      </div>
      <div class="v-list-item__content" data-no-activator="">
        <div class="v-list-item-title">
          {{ contentTitle }}
        </div>
        <div class="v-list-item-subtitle">
          {{ contentSubtitle }}
        </div>
      </div>
    </RouterLink>
  </div>
</template>
