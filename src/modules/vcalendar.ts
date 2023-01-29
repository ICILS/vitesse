// import VCalendar from 'v-calendar'
import { type UserModule } from '~/types'
import 'v-calendar/dist/style.css';

export const install: UserModule = ({ isClient, app }) => {
  // app.use(VCalendar)
  // Fix for ssg 'window is not defined' error. See https://github.com/antfu/vite-ssg/issues/90#issuecomment-905920343
  if (isClient) {
    import('v-calendar').then(({ default: VCalendar }) => {
      app.use(VCalendar)
    })
  }
}
