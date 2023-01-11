import 'vuetify/styles' // Added. See https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import { createVuetify } from 'vuetify'
// import type { ThemeDefinition } from 'vuetify'
import { md3 } from '../blueprints/md3'
import { type UserModule } from '~/types'

// const Lighttheme: ThemeDefinition = {
//   dark: false,
//   variables: {},
//   colors: {
//     primary: 'var(--md-sys-color-primary-light)', // '--md-sys-color-primary': 'var(--v-theme-primary)',
//     // info: '#03c9d7',
//     // success: '#05b187',
//     // accent: '#fc4b6c',
//     // warning: '#fec90f',
//     // error: '#fc4b6c',
//     // secondary: '#0cb9c5',
//   },
// }

/* const Darktheme: ThemeDefinition = {
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
} */

export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md3,
    //  See Aliasing & virtual components: https://next.vuetifyjs.com/en/features/aliasing/#aliasing-26-virtual-components

  })

  app.use(vuetify)
}

// Vuetify variables

/*
--v-theme-background: 255,255,255;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 255,255,255;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-variant: 66,66,66;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 238,238,238;
      --v-theme-primary: 30,136,229;
      --v-theme-primary-overlay-multiplier: 1;
      --v-theme-primary-darken-1: 55,0,179;
      --v-theme-primary-darken-1-overlay-multiplier: 2;
      --v-theme-secondary: 12,185,197;
      --v-theme-secondary-overlay-multiplier: 1;
      --v-theme-secondary-darken-1: 1,135,134;
      --v-theme-secondary-darken-1-overlay-multiplier: 1;
      --v-theme-error: 252,75,108;
      --v-theme-error-overlay-multiplier: 1;
      --v-theme-info: 3,201,215;
      --v-theme-info-overlay-multiplier: 1;
      --v-theme-success: 5,177,135;
      --v-theme-success-overlay-multiplier: 1;
      --v-theme-warning: 254,201,15;
      --v-theme-warning-overlay-multiplier: 1;
      --v-theme-accent: 252,75,108;
      --v-theme-accent-overlay-multiplier: 1;
      --v-theme-on-background: 0,0,0;
      --v-theme-on-surface: 0,0,0;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 255,255,255;
      --v-theme-on-secondary-darken-1: 255,255,255;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 0,0,0;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 0,0,0;
      --v-theme-on-accent: 255,255,255;
      --v-border-color: 0, 0, 0;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 0.87;
      --v-medium-emphasis-opacity: 0.6;
      --v-disabled-opacity: 0.38;
      --v-idle-opacity: 0.04;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.12;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 245, 245, 245;
      --v-theme-on-code: 0, 0, 0;

*/
