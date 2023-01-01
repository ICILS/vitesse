import PerfectScrollbar from 'vue3-perfect-scrollbar'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(PerfectScrollbar)
}
