<script setup lang="ts">
import { ref } from 'vue'

const items = ref(['Foo', 'Bar', 'Fizz', 'Buzz'])
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You cannot use disabled <code>v-select</code>.
    </p>
    <div class="mt-4">
      <v-select :items="items" disabled label="Disabled" />
    </div>
  </div>
</template>
