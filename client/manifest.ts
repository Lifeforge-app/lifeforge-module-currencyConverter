import { lazy } from 'react'
import type { ModuleConfig } from 'shared'

export default {
  name: 'Currency Converter',
  icon: 'tabler:currency-dollar',
  routes: {
    'currency-converter': lazy(() => import('@'))
  },
  category: 'Utilities'
} satisfies ModuleConfig
