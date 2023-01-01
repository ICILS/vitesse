<script setup lang="ts"></script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title text-h6">
        Sample Form with the right Icons
      </h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">
        All with vuetify element attributes
      </h6>
    </v-card-text>
    <v-divider />
    <v-card-text class="pa-5 border-bottom">
      <v-text-field outlined label="User Name" placeholder="Username" append-icon="i-mdi-account" />
      <v-text-field outlined label="Email address" placeholder="Email" append-icon="i-mdi-email" />
      <v-text-field outlined label="Password" placeholder="Password" append-icon="i-mdi-lock" />
      <v-text-field
        outlined
        label="Confirm Password"
        placeholder="Confirm Password"
        append-icon="i-mdi-lock"
        hide-details
      />
      <v-checkbox label="Remember me" hide-details />
      <div class="mt-4">
        <v-btn color="success" class="text-capitalize mr-2">
          Save
        </v-btn>
        <v-btn color="black" class="text-capitalize" dark>
          Cancel
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
