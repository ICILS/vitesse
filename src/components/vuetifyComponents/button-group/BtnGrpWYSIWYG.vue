<script setup lang="ts">
import { ref } from 'vue'

const alignment = ref(1)
const formatting = ref([])
const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
const letters = ref('qwertyuiop'.split(''))
const value = ref(
  'Toggle button requirements.\r\rHave at least three toggle buttons in a group\rLabel buttons with text, an icon, or',
)
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- WYSIWYG -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Group similar actions and design your own WYSIWYG component.
  </p>
  <v-card class="mt-6">
    <div class="d-flex justify-space-between pa-4 pb-0">
      <v-btn-toggle v-model="formatting" multiple variant="outlined" divided>
        <v-btn>
          <v-icon icon="i-mdi-format-italic" />
        </v-btn>

        <v-btn>
          <v-icon icon="i-mdi-format-bold" />
        </v-btn>

        <v-btn>
          <v-icon icon="i-mdi-format-underline" />
        </v-btn>

        <v-btn>
          <div class="d-flex align-center flex-column justify-center">
            <v-icon icon="i-mdi-format-color-text" />

            <v-sheet tile height="4" width="26" color="purple" />
          </div>
        </v-btn>
      </v-btn-toggle>

      <v-btn-toggle v-model="alignment" variant="outlined" divided>
        <v-btn>
          <v-icon icon="i-mdi-format-align-center" />
        </v-btn>

        <v-btn>
          <v-icon icon="i-mdi-format-align-left" />
        </v-btn>

        <v-btn>
          <v-icon icon="i-mdi-format-align-right" />
        </v-btn>
      </v-btn-toggle>
    </div>

    <v-sheet class="pa-4 text-center">
      <v-textarea
        v-model="value"
        variant="outlined"
        auto-grow
        full-width
        rows="2"
        hide-details
      />
    </v-sheet>
  </v-card>
</template>
