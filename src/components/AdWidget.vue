<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div
    class="v-sheet v-theme--light bg-grey-lighten-4 v-sheet--border v-sheet--rounded v-app-ad d-inline-flex flex-child-1 grow-shrink-0 v-vuetify mb-4 mb-6"
    style="min-height: 74px; width: 100%;"
  >
    <a
      class="v-list-item v-list-item--link v-theme--light v-list-item--density-default v-list-item--variant-text text-decoration-none"
      to="https://vuejobs.com/?utm_source=vuetifyads&amp;utm_medium=docs&amp;ref=vuetify" tabindex="0"
      rel="noopener" target="_blank" style="width: 100%; min-height: inherit;"
    ><span
       class="v-list-item__overlay"
     /><span class="v-list-item__underlay" />
      <div class="v-list-item__prepend">
        <div
          class="v-avatar v-theme--light v-avatar--density-default v-avatar--size-default v-avatar--variant-flat"
        >
          <div class="v-responsive v-img" aria-label="">
            <div class="v-responsive__sizer" style="padding-bottom: 100%;" /><img
              class="v-img__img v-img__img--cover"
              src="https://cdn.cosmicjs.com/c79275e0-82fb-11ed-a98f-051589794d26-vuejobs-logo-light-sm.png" alt=""
              style=""
            ><!----><!----><!----><!----><!---->
          </div><!----><span class="v-avatar__underlay" />
        </div><!----><!---->
      </div>
      <div class="v-list-item__content" data-no-activator="">
        <div class="v-list-item-title">Vuetify - Vue Jobs</div>
        <div class="v-list-item-subtitle">
          <div class="v-markdown text-caption">
            <p>Sign up and post a job or create your personalized developer profile at <a
              to="http://vuejobs.com"
            >vuejobs.com</a>.</p>
          </div>
        </div><!---->
      </div>
      <div class="v-list-item__append"><!----><i
        class="mdi-open-in-new mdi v-icon notranslate v-theme--light v-icon--size-default"
        aria-hidden="true"
      /><!----></div>
    </a>
  </div>
</template>
