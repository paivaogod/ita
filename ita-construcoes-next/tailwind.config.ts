import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B2A3B', // navy-ish
          light: '#123E57',
          dark: '#071C28'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
