import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: '#171C28',
        charcoal: '#1E2433',
        'charcoal-soft': '#222A3B',
        brand: {
          gold: '#B79A77',
          sand: '#F2E9DF',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 60px -20px rgba(183, 154, 119, 0.45)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
})
