import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
      "./src/**/*.{ts,tsx}",
  "*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}' // if using the app/ directory
  ],
  theme: {
    extend: {
   
    },
  },
  plugins: [require('daisyui')],
   
}
export default config
