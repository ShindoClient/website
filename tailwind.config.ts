import type { Config } from 'tailwindcss'
import preset from '@shindojs/styles/tailwind'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  presets: [preset]
} satisfies Config