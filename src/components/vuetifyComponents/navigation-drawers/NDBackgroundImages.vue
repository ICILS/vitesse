<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Background images -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    Apply a custom background to your drawer via the image prop. If you need to
    customize it further, you can use the image slot and render your own v-img.
  </p>
  <v-card class="mt-6" max-height="300">
    <v-layout>
      <v-navigation-drawer
        theme="dark"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        width="100%"
        permanent
      >
        <v-list nav color="transparent">
          <v-list-item
            prepend-icon="i-mdi-email"
            title="Inbox"
            value="inbox"
          />
          <v-list-item
            prepend-icon="i-mdi-account-supervisor-circle"
            title="Supervisors"
            value="supervisors"
          />
          <v-list-item
            prepend-icon="i-mdi-clock-start"
            title="Clock-in"
            value="clockin"
          />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px" />
    </v-layout>
  </v-card>
</template>
