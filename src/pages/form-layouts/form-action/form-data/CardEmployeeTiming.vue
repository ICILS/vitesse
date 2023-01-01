<script setup lang="ts">
import { ref } from 'vue'
const rules = ref([
  (v: string | any[]) => v.length <= 25 || 'Max 25 characters',
])
</script>

<template>
  <div>
    <v-alert
      icon="i-mdi-alert-outline"
      variant="tonal"
      density="comfortable"
      type="info"
      class="mb-4 caption pa-3"
    >
      Form Action at left ending of the form.
    </v-alert>
    <h6 class="text-subtitle-1 text-grey-darken-1 mb-5">
      To use add form actions on top of the form add a div with .action-form
      class to left ending of the form. To set a side of the button use
      .text-left or .text-right as per requirement.
    </h6>

    <form>
      <v-row>
        <v-col cols="12">
          <v-textarea
            label="Employee Name"
            rows="1"
            variant="outlined"
            prepend-inner-icon="i-mdi-account-circle"
          />
          <v-textarea
            label="Project Name"
            rows="1"
            variant="outlined"
            prepend-inner-icon="i-mdi-book"
          />
          <v-text-field
            label="Date"
            type="date"
            variant="outlined"
          />
          <v-textarea
            label="Rate Per Hour"
            rows="1"
            variant="outlined"
            prepend-inner-icon="i-mdi-currency-usd"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="6">
          <v-text-field
            label="Start Time"
            type="date"
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" sm="6" lg="6">
          <v-text-field
            label="End Time"
            type="date"
            variant="outlined"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            counter
            label="Notes"
            rows="2"
            variant="outlined"
            :rules="rules"
          />
        </v-col>
      </v-row>
    </form>

    <div class="mb-5">
      <v-btn color="primary" class="mr-2 text-capitalize">
        Save
      </v-btn>
      <v-btn color="secondary" class="text-capitalize" dark>
        Cancel
      </v-btn>
    </div>
  </div>
</template>
