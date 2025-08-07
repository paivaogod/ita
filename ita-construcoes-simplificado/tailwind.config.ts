import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B2A3B',
          light: '#123E57',
          dark: '#071C28'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
