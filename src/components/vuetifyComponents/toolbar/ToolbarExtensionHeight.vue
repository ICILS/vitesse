<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Extension Height -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The extension’s height can be customized.
    </p>
    <div class="mt-6">
      <v-card color="grey lighten-4" flat height="200px" tile>
        <v-toolbar extended extension-height="100">
          <v-app-bar-nav-icon color="inherit" />

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer />

          <v-btn icon color="inherit">
            <v-icon>i-mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon color="inherit">
            <v-icon>i-mdi-heart</v-icon>
          </v-btn>

          <v-btn icon color="inherit">
            <v-icon>i-mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </div>
  </div>
</template>
