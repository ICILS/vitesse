import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { type UserModule } from '~/types'

const Lighttheme: ThemeDefinition = {
  dark: false,
  variables: {},
  colors: {
    primary: '#1e88e5',
    info: '#03c9d7',
    success: '#05b187',
    accent: '#fc4b6c',
    warning: '#fec90f',
    error: '#fc4b6c',
    secondary: '#0cb9c5',
  },
}

const Darktheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#1e88e5',
    info: '#03c9d7',
    success: '#05b187',
    accent: '#fc4b6c',
    warning: '#fec90f',
    error: '#fc4b6c',
    secondary: '#0cb9c5',
  },
}

export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    /* icons: {
      defaultSet: 'md',
      aliases: {
        ...aliases,
      },
      sets: {
        mdi,
      },
    }, */
    components,
    directives,
    theme: {
      themes: {
        light: Lighttheme,
        dark: Darktheme,
      },
    },
    defaults: {
      VBtn: {
        color: 'primary',
        rounded: 'md',
        flat: true,
        fontWeight: '400',
        letterSpacing: '0',
      },
      VCard: {
        elevation: 2,
      },
      VCheckbox: {
        color: 'primary',
      },
      VRadio: {
        color: 'primary',
      },
      VDialog: {
        maxWidth: '800',
      },
    },
  },
  )

  app.use(vuetify)
}
