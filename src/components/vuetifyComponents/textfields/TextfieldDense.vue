<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const onClick = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldDense -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>density</code> prop decreases the height of the text field based upon
      1 of 3 levels of density; <code>default</code>, <code>comfortable</code>, and <code>compact</code>.

      When <code>clearable</code>, you can customize the clear icon with
      <code>clear-icon</code>.
    </p>
    <div class="mt-4">
      <v-card
        class="mx-auto"
        color="grey-lighten-3"
        max-width="400"
      >
        <v-card-text>
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search templates"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
