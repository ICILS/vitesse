<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Content -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      For simple text, use the content property to display a value on the badge.
    </p>
    <div class="mt-6">
      <v-toolbar color="blue-grey-darken-3">
        <v-spacer />

        <v-btn color="inherit" stacked>
          <v-badge dot color="success">
            <v-icon icon="i-mdi-home-outline" />
          </v-badge>
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-icon icon="i-mdi-account-multiple-outline" />
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-badge content="9+" color="error">
            <v-icon icon="i-mdi-store-outline" />
          </v-badge>
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-badge content="2" color="error">
            <v-icon icon="i-mdi-bell-outline" />
          </v-badge>
        </v-btn>

        <v-btn color="inherit" stacked>
          <v-icon icon="i-mdi-menu" />
        </v-btn>

        <v-spacer />
      </v-toolbar>
    </div>
  </div>
</template>
