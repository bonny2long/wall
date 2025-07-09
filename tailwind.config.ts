// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // ✅ for App Router components
    './components/**/*.{js,ts,jsx,tsx}', // ✅ for shadcn and custom comps
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
