import type { Config } from 'windicss/types/interfaces'
import { defineConfig, transform, convert } from 'windicss/helpers'

import typography from 'windicss/plugin/typography'

export const windiConfig: Config = defineConfig({
  darkMode: 'media',
  plugins: [typography()],
  shortcuts: {

  },
})

export default windiConfig