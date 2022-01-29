import { defineConfig } from 'windicss/helpers'

import typography from 'windicss/plugin/typography'
import filters from 'windicss/plugin/filters'
import forms from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  plugins: [typography, filters, forms],
  shortcuts: {

  },
});
