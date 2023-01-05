<script setup lang="ts">
import { ref } from 'vue'

const message1 = ref('Hey!')
const message2 = ref('Hey!')
const message3 = ref('Hey!')
const message4 = ref('Hey!')
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldClearable -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      When <code>clearable</code>, you can customize the clear icon with
      <code>clear-icon</code>.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="message1"
                label="Regular"
                clearable
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="message2"
                variant="solo"
                label="Solo"
                clearable
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="message3"
                variant="filled"
                label="Filled"
                clearable
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="message4"
                label="Outlined"
                variant="outlined"
                clearable
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
