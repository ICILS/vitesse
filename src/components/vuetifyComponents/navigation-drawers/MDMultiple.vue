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
        rail
        permanent
      >
        <v-list-item
          nav
          prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
        />

        <v-divider />

        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="i-mdi-view-dashboard" value="dashboard" />

          <v-list-item prepend-icon="i-mdi-forum" value="messages" />
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer permanent>
        <v-list>
          <v-list-item title="Home" value="home" />

          <v-list-item title="Contacts" value="contacts" />

          <v-list-item title="Settings" value="settings" />
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 300px" />
    </v-layout>
  </v-card>
</template>
