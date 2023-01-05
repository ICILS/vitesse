<script setup lang="ts">
defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div>
    <section id="ready-for-more" class="mt-12">
      <h2 class="v-heading text-h4 text-sm-h4 mb-4 mt-4">
        <!-- v-if -->Ready for more?
      </h2><!-- https://vue-i18n.intlify.dev/guide/advanced/component.html#scope-resolving -->
      <div class="mb-3">
        Continue your learning with related content selected by the ICILS Team or move between pages by using the
        navigation links below.
      </div>
      <div class="v-row v-row--dense">
        <CardLink to="/ui-components/images/" tabindex="0" content-title="Aspect ratio" content-subtitle="UI Components" />

        <CardLink to="/ui-components/cards/" tabindex="1" content-title="Cards" content-subtitle="UI Components" />

        <CardLink to="/ui-components/images/" tabindex="1" content-title="Images" content-subtitle="UI Components" />
      </div>
      <hr class="v-divider v-theme--light my-6 mt-7 mb-5" aria-orientation="horizontal" role="separator">
      <div id="up-next" class="d-flex mb-4">
        <RouterLink to="/en/components/paginations/" class="text-decoration-none text-body-1 d-inline-flex align-center">
          <i
            class="mdi-chevron-left mdi v-icon notranslate v-theme--light v-icon--size-default text-primary me-1"
            aria-hidden="true"
          />
          <span class="text-primary">Pagination</span>
        </RouterLink>
        <div class="flex-grow-1" />
      </div>

      <div>
        <span class="font-600 mr-1 text-medium-emphasis">Edit this page on</span><a
          class="app-link text-decoration-none text-primary font-weight-medium d-inline-flex align-center"
          to="https://github.com/vuetifyjs/vuetify/tree/next/packages/docs/src/pages/en/components/parallax.md"
          target="_blank" rel="noopener"
        ><!-- v-if -->GitHub<i
          class="mdi-open-in-new mdi v-icon notranslate v-theme--light text-primary ml-1" aria-hidden="true"
          style="font-size: 0.875rem; height: 0.875rem; width: 0.875rem;"
        /></a>
      </div>
    </section>
    <slot />
  </div>
</template>
