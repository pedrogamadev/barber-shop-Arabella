import { install, observe } from '@twind/core'

import config from '../twind.config'

export const tw = install(config, import.meta.env.PROD)

if (typeof document !== 'undefined') {
  observe(tw, document.documentElement)
}

export default tw
