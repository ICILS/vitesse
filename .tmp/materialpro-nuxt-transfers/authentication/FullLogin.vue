<script lang="ts" setup>
import Notification from '@/components/Notification.vue'
import { mdiCloudUpload } from '@mdi/js'

// GraphQL query to get app interface labels
// import labelsQuery from "~/apollo/queries/label/labels.gql";

// import gql from "graphql-tag";

definePageMeta({
  layout: 'blank',
  title: 'ICILS 2077 prototype',
})

const labels = { data: [] }

const labelsQuery = gql`
  query labels {
    labels {
      data {
        id
        attributes {
          name
          content
        }
      }
    }
  }
`

// Apollo graphql query
useQuery(labelsQuery, {
  fetchPolicy: 'network-only',
  onCompleted: (data: any) => {
    console.log('data: ', data)
    labels.data.values = data.labels
    return data
  },
})

// const labelsData = computed(() => {
// return labels.data.value.data?.interfaceLabels?.data?.attributes?.Labels;

const valid = ref(false)
const showPassword = ref(false)
const username = ref('Demo')
const password = ref('123456')
const error = ref(null)
const router = useRouter()

const user = useStrapiUser()
if (user.value)
  router.push('/')

const url = useStrapiUrl()
const version = useStrapiVersion()
const { login, getProviderAuthenticationUrl } = useStrapiAuth()
const loading = ref(false)
const form = reactive({ identifier: username, password })

// Nuxt example 2
const handleLogin = async () => {
  loading.value = true
  try {
    await login(form)
    router.push('/')
  }
  catch (e: any) { console.log('Login error: ', e); error.value = e.error.message }
  loading.value = false
}
</script>

<template>
  <v-row class="h-100vh">
    <v-col cols="12" lg="7" xl="6" class="bg-primary d-none d-md-flex align-center justify-center">
      <v-container>
        <div class="pa-10">
          <v-row justify="center">
            <v-col cols="8" xl="5">
              <div>
                <h2 class="font-weight-bold font-mono text-white text-7xl prose">
                  ICILS 2077
                </h2>
                <h3 class="font-weight-medium font-serif text-white text-4xl prose">
                  Student Test
                </h3>
                <h6 class="font-weight-regular mt-4 text-high-emphasis text-white text-subtitle-1">
                  Enter a student ID and password to start the test.
                </h6>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" lg="5" xl="6" class="d-flex align-center">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row>
            <v-col cols="12" lg="9" xl="6">
              <img src="/images/logos/dark-logo-icon.svg">
              <h2 class="font-weight-bold mt-4 text--darken-2">
                Sign in
              </h2>
              <v-form ref="form" v-model="valid" lazy-validation class="mt-7" @submit.prevent="handleLogin">
                <Notification v-if="error" :message="error" type="error" class="my-5" />
                <div class="mb-2">
                  <span>User ID</span>
                </div>
                <v-text-field
                  v-model="username" name="email" class="mt-4" required variant="outlined"
                  hint="E.g. 123456" placeholder="E.g., 123456" prepend-inner-icon="mdi:account"
                />
                <v-text-field
                  v-model="password" :counter="6"
                  :append-inner-icon="showPassword ? 'mdi:eye' : 'mdi-eye-off'" label="Password" required
                  variant="outlined" type="password" prepend-inner-icon="mdi:lock"
                />
                <v-btn color="primary" block class="mr-4" type="submit" variant="elevated" :loading="loading">
                  Sign In
                </v-btn>
              </v-form>
              <div class="mt-6 text-center">
                <div class="gap-2 d-flex align-center justify-center">
                  <v-btn icon color="secondary" variant="outlined">
                    <v-icon>mdi:help</v-icon>
                  </v-btn>
                  <v-btn icon color="secondary">
                    <v-icon>mdi:alarm-check</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!--
      https://github.com/nuxt-modules/strapi/blob/dev/example/pages/index.vue
    -->
  </v-row>
</template>
