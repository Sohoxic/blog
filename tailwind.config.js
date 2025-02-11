/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tn-bg-primary': 'var(--bg-primary)',
        'tn-bg-secondary': 'var(--bg-secondary)',
        'tn-text-primary': 'var(--text-primary)',
        'tn-text-secondary': 'var(--text-secondary)',
        'tn-accent': 'var(--accent)',
        'tn-accent-hover': 'var(--accent-hover)',
        'tn-surface': 'var(--surface)',
        'tn-hover': 'var(--hover)',
        'tn-divider': 'var(--divider)',
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};