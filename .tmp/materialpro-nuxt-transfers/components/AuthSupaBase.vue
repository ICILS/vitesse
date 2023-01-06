<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signIn({ email: email.value })
    if (error)
      throw error
    alert('Check your email for the login link!')
  }
  catch (error) {
    alert(error.error_description || error.message)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="border-bottom pa-5">
      <h3 class="text-h6 title">
        Supabase + Nuxt 3
      </h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">
        All with vuetify element attributes
      </h6>
      <p class="description">
        Sign in via magic link with your email below
      </p>
    </v-card-text>
    <v-divider />
    <v-card-text class="border-bottom pa-5">
      <v-text-field
        v-model="email"
        variant="filled"
        label="Email address"
        placeholder="Email"
        prepend-inner-icon="mdi:email"
      />
      <div class="mt-4 d-flex">
        <v-btn
          color="success"
          class="text-capitalize mr-2"
          :disabled="loading"
          @click="handleLogin"
        >
          Send magic link
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
