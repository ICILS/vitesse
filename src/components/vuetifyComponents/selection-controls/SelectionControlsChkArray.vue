<script setup lang="ts">
import { computed, ref } from 'vue'
const selected = ref(['John'])
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsChkArray -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div>
      <div class="d-flex align-items-center">
        <div>
          <v-checkbox v-model="selected" label="John" value="John" />
          <v-checkbox
            v-model="selected"
            label="Jacob"
            value="Jacob"
          />
        </div>

        <div class="ml-auto">
          <p>{{ selected }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
