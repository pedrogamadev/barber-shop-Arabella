import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: '#050507',
        charcoal: '#121218',
        'charcoal-soft': '#1a1b21',
        brand: {
          gold: '#d4a85f',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 60px -20px rgba(212, 168, 95, 0.45)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
})
