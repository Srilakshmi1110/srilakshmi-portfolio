/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF9EF',
        surface: '#FFFFFF',
        ink: '#16281D',
        muted: '#5F6F5F',
        line: '#E1E5D6',
        amber: '#F5C542',
        blueprint: '#2E8B4F',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #E1E5D6 1px, transparent 1px), linear-gradient(to bottom, #E1E5D6 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
