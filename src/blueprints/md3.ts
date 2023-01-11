// Icons
import { mdi } from 'vuetify/iconsets/mdi'
// import { ThemeDefinition } from 'vuetify'

// JS Color pack
// import colors from 'vuetify/lib/util/colors'

// Vuetify components
import { VBtn, VSlider } from 'vuetify/components'

// Material Design 3 DSP styles
// import '../styles/css/theme.css'
import type { Blueprint } from 'vuetify/framework'
import * as colorValues from './color.tokens'
// Types
export const md3: Blueprint = {
  ssr: true,
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  // See aliasing & virtual components https://next.vuetifyjs.com/en/features/aliasing/#aliasing-26-virtual-components
  aliases: {
    RunResetButton: VBtn,
    SpeedSlider: VSlider,
  },
  // Material Desing 3 specifications
  // See http://m3.material.io/
  defaults: {
    RunResetButton: {
      color: 'green',
      variant: 'flat',
    },
    VAppBar: {
      flat: true,
    },
    VAutocomplete: {
      variant: 'filled',
    },
    VBanner: {
      color: 'primary',
    },
    VBtn: {
      color: 'primary',
      rounded: 'xl',
      elevation: 0,
      size: 'large',
      lineHeight: 1,
    },
    VCard: {
      rounded: 'xl',
      elevation: 0,
      color: 'surface-2',
      width: '100%',
    },
    VCheckbox: {
      color: 'secondary',
    },
    VChip: {
      rounded: 'sm',
    },
    VCombobox: {
      variant: 'filled',
    },
    // VNavigationDrawer: {
    //   color: 'surface-1',
    //   VList: {
    //     nav: true,
    //     VListItem: {
    //       rounded: 'xl',
    //     },
    //   },
    // },
    VSelect: {
      variant: 'filled',
    },
    VSlider: {
      color: 'primary',
    },
    VTabs: {
      color: 'primary',
    },
    VTextarea: {
      variant: 'filled',
    },
    VTextField: {
      variant: 'filled',
    },
  },
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    variations: {
      colors: ['primary', 'secondary', 'surface', 'surface-variant', 'surface-1'],
      lighten: 4,
      darken: 4,
    },
    themes: {
      light: {
        dark: false,
        variables: {
          // See https://next.vuetifyjs.com/en/features/theme/#custom-properties
        },
        colors: {
          'primary': colorValues.PrimaryLight,
          'on-primary': colorValues.OnPrimaryLight,
          'primary-container': colorValues.PrimaryContainerLight,
          'on-primary-container': colorValues.OnPrimaryContainerLight,
          'secondary': colorValues.SecondaryLight,
          'secondary-container': colorValues.SecondaryContainerLight,
          'on-secondary': colorValues.OnSecondaryLight,
          'tertiary': colorValues.TertiaryLight,
          'on-tertiary': colorValues.OnTertiaryLight,
          'tertiary-container': colorValues.TertiaryContainerLight,
          'on-tertiary-container': colorValues.OnTertiaryContainerLight,
          'error': colorValues.ErrorLight,
          'error-container': colorValues.ErrorContainerLight,
          'on-error': colorValues.OnErrorLight,
          'on-error-container': colorValues.OnErrorContainerLight,
          'background': colorValues.BackgroundLight,
          'on-background': colorValues.OnBackgroundLight,
          'surface': colorValues.SurfaceLight,
          'on-surface': colorValues.OnSurfaceLight,
          'surface-variant': colorValues.SurfaceVariantLight,
          'on-surface-variant': colorValues.OnSurfaceVariantLight,
          'outline': colorValues.OutlineLight,
          'inverse-on-surface': colorValues.InverseOnSurfaceLight,
          'inverse-surface': colorValues.InverseSurfaceLight,
          'inverse-primary': colorValues.InversePrimaryLight,
          'shadow': colorValues.ShadowLight,
          'surface-tint': colorValues.SurfaceTintLight,
          'outline-variant': colorValues.OutlineVariantLight,
          'scrim': colorValues.ScrimLight,
          'surface-1': colorValues.Surface1Light,
          // 'surface-1': '--v-theme-surface-1: rgb(var(--v-theme-primary-rgb) / 0.05);',
          'surface-2': colorValues.Surface2Light,
          // 'surface-2': '--v-theme-surface-2: rgb(var(--v-theme-primary-rgb) / 0.08);',
          'surface-3': colorValues.Surface3Light,
          'surface-4': colorValues.Surface4Light,
          'surface-5': colorValues.Surface5Light,
          // 'surface-1': 'var(rgba(colorValues.PrimaryLight, 0.05))',
          // 'surface-2': var(rgba(colorValues.PrimaryLight, 0.05),
          // 'surface-3': var(rgba(colorValues.PrimaryLight, 0.05),
          // 'surface-4': var(rgba(colorValues.PrimaryLight, 0.05),
          // 'surface-5': var(rgba(colorValues.PrimaryLight, 0.05),
        },
      },
      dark: {
        dark: true,
        colors: {
          'primary': colorValues.PrimaryDark,
          'on-primary': colorValues.OnPrimaryDark,
          'primary-container': colorValues.PrimaryContainerDark,
          'on-primary-container': colorValues.OnPrimaryContainerDark,
          'secondary': colorValues.SecondaryDark,
          'secondary-container': colorValues.SecondaryContainerDark,
          'on-secondary': colorValues.OnSecondaryDark,
          'tertiary': colorValues.TertiaryDark,
          'on-tertiary': colorValues.OnTertiaryDark,
          'tertiary-container': colorValues.TertiaryContainerDark,
          'on-tertiary-container': colorValues.OnTertiaryContainerDark,
          'error': colorValues.ErrorDark,
          'error-container': colorValues.ErrorContainerDark,
          'on-error': colorValues.OnErrorDark,
          'on-error-container': colorValues.OnErrorContainerDark,
          // 'background': colorValues.BackgroundDark,
          // 'on-background': colorValues.OnBackgroundDark,
          // 'surface': colorValues.SurfaceDark,
          // 'on-surface': colorValues.OnSurfaceDark,
          // 'surface-variant': colorValues.SurfaceVariantDark,
          // 'on-surface-variant': colorValues.OnSurfaceVariantDark,
          // 'outline': colorValues.OutlineDark,
          // 'inverse-on-surface': colorValues.InverseOnSurfaceDark,
          // 'inverse-surface': colorValues.InverseSurfaceDark,
          // 'inverse-primary': colorValues.InversePrimaryDark,
          // 'shadow': colorValues.ShadowDark,
          // 'surface-tint': colorValues.SurfaceTintDark,
          // 'outline-variant': colorValues.OutlineVariantDark,
          // 'scrim': colorValues.ScrimDark,
        },
      },
      // VuetifyThemeVariant: {
      //   colors: {
      //     primary: '#B51F47',
      //     secondary: '#FFB2BB',
      //     tertiary: '#656100',
      //   },
      // },
    },
  },
}
