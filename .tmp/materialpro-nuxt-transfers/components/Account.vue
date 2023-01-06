<script setup>
const supabase = useSupabaseClient()

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_path = ref('')
const email = ref('')

loading.value = true
const user = useSupabaseUser()
const { data } = await supabase
  .from('profiles')
  .select('username, website, avatar_url')
  .eq('id', user.value.id)
  .single()
if (data) {
  username.value = data.username
  website.value = data.website
  avatar_path.value = data.avatar_url
  email.value = user.value.email
  ElementInternals.value = data.email
}
loading.value = false

async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()
    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    }
    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })
    if (error)
      throw error
  }
  catch (error) {
    alert(error.message)
  }
  finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error)
      throw error
  }
  catch (error) {
    alert(error.message)
  }
  finally {
    loading.value = false
    navigateTo('/authentication/fulllogin')
  }
}
</script>

<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <p class="description">
        Update user account
      </p>
    </v-card-text>
    <v-divider />
    <v-card-text class="pa-5 border-bottom">
      <v-text-field
        v-model="email"
        variant="outlined"
        prepend-inner-icon="mdi:email"
        disabled
      />
      <v-text-field
        v-model="username"
        outlined
        label="Username"
        placeholder="Username"
        prepend-inner-icon="mdi:account"
      />
      <v-text-field
        v-model="website"
        outlined
        label="Website"
        prepend-inner-icon="mdi:account"
      />
      <div class="mt-4 d-flex">
        <v-btn
          color="success"
          class="text-capitalize mr-2"
          :disabled="loading"
          @click.prevent="updateProfile"
        >
          Update
        </v-btn>
      </div>
      <div class="mt-4 d-flex">
        <v-btn
          text
          class="text-capitalize mr-2"
          :disabled="loading"
          @click="signOut"
        >
          Sign out
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
  <Card class="mb-4">
    <CardContent>
      <CardTitle
        class="capitalize"
        :text="$t('pages.setting.sections.validate_username.title')"
      />
      <p class="mb-2">
        {{ $t("pages.setting.sections.validate_username.description") }}
      </p>
      <div class="flex">
        <FormTextInput v-model="username" class="w-full md:w-1/3">
          <template #prefix-disabled>
            <span class="flex-1 px-4 py-2">github.com/</span>
          </template>
        </FormTextInput>
      </div>
    </CardContent>
    <CardFooter
      class="flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between"
    >
      <p>
        {{ $t("pages.setting.sections.validate_username.footer") }}
        <Anchor
          class="underline font-bold capitalize"
          :text="$t('pages.setting.sections.validate_username.footer_link')"
          href="https://docs.github.com/en/rest/users/users#get-a-user"
        />
      </p>
      <Button
        class="capitalize"
        size="sm"
        type="opposite"
        :text="$t('pages.setting.sections.validate_username.footer_button')"
        @click="validate"
      />
    </CardFooter>
  </Card>
</template>
