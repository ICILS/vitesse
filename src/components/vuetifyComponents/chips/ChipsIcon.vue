<script setup lang="ts">
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icon -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="d-flex flex-wrap gap-2">
    <v-chip color="primary" text-color="white" prepend-icon="i-mdi-account-circle">
      Mike
    </v-chip>

    <v-chip color="secondary" text-color="white" append-icon="i-mdi-star">
      Premium
    </v-chip>

    <v-chip color="warning" text-color="white" append-icon="i-mdi-cake-variant">
      1 Year
    </v-chip>

    <v-chip color="success" text-color="white" prepend->
      <template #prepend>
        <v-avatar class="green-darken-4">
          1
        </v-avatar>
      </template>
      Years
    </v-chip>

    <v-chip
      closable
      color="error"
      text-color="white"
      prepend-icon="i-mdi-checkbox-marked-circle"
      :model-value="true"
    >
      Confirmed
    </v-chip>

    <v-chip
      closable
      color="teal"
      text-color="white"
      close-icon="i-mdi-delete"
      prepend-icon="i-mdi-checkbox-marked-circle"
      :model-value="true"
    >
      Confirmed
    </v-chip>
  </div>
</template>
