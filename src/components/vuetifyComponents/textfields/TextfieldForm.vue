<script setup lang="ts">
import { ref } from 'vue'

const form = ref(false)
const email = ref(null)
const password = ref(null)
const loading = ref(false)

const onSubmit = () => {
  if (!form.value)
    return

  loading.value = true

  setTimeout(() => (loading.value = false), 2000)
}

const required = (v: any) => {
  return !!v || 'Field is required'
}
</script>

<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        />

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        />

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
