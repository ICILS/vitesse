<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- window -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      A window bar with window controls and status info.
    </p>
    <div class="mt-6">
      <v-layout style="height: 50px">
        <v-system-bar window>
          <v-icon icon="i-mdi-message" class="mr-2" />

          <span>10 unread messages</span>

          <v-spacer />

          <v-btn icon="i-mdi-minus" color="warning" variant="text" />

          <v-btn
            icon="i-mdi-checkbox-blank-outline"
            variant="text" color="secondary"
            class="ml-2"
          />

          <v-btn icon="i-mdi-close" color="error" variant="text" class="ml-2" />
        </v-system-bar>
      </v-layout>
    </div>
  </div>
</template>
