<script setup lang="ts">
import { computed, ref } from 'vue'
const rules = ref([
  (value: any) => !!value || 'Required.',
  (value: string | any[]) => (value && value.length >= 3) || 'Min 3 characters',
  (value: any) => (value || '').length <= 20 || 'Max 20 characters',
  (value: string) => {
    const pattern
      = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
])
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Rules -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can add custom validation rules to <code>v-input</code>, add them as
      functions returning <code>true</code>/error message. Note:
      <code>v-text-field</code> is used just for example.
    </p>
    <div class="mt-4">
      <v-text-field :rules="rules" />
    </div>
    <p class="text-subtitle-1 text-grey-darken-1">
      When <code>hide-details</code> is set to <code>auto</code> messages will
      be rendered only if there's a message (hint, error message etc) to
      display.
    </p>
    <div class="mt-4">
      <div>
        <v-text-field
          label="Main input"
          :rules="rules"
          hide-details="auto"
        />
        <v-text-field label="Another input" />
      </div>
    </div>
  </div>
</template>
