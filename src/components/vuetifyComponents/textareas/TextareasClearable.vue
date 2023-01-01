<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasClearable -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can clear the text from a <code>v-textarea</code> by using the
      <code>clearable</code> prop, and customize the icon used with the
      <code>clearable-icon</code> prop.
    </p>
    <div class="mt-4">
      <v-textarea
        clearable
        clear-icon="i-mdi-close-circle"
        label="Text"
        model-value="This is clearable text."
      />
    </div>
  </div>
</template>
