// import VueApexCharts from 'vue3-apexcharts'

import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, app }) => {
  // app.use(VueApexCharts)
  // Fix for ssg 'window is not defined' error. See https://github.com/antfu/vite-ssg/issues/90#issuecomment-905920343
  if (isClient) {
    import('vue3-apexcharts').then(({ default: VueApexCharts }) => {
      app.use(VueApexCharts)
    })
  }
}
