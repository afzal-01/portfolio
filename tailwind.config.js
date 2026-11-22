/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#080B18',
        'secondary-bg': '#10152A',
        card: '#171D35',
        'card-hover': '#1C2442',
        'primary-purple': '#8B5CF6',
        'secondary-purple': '#A855F7',
        'accent-blue': '#6366F1',
        'primary-text': '#FFFFFF',
        'secondary-text': '#A5AEC5',
        'purple-border': 'rgba(139, 92, 246, 0.25)',
        'purple-border-hover': 'rgba(168, 85, 247, 0.5)',
        'purple-glow': 'rgba(139, 92, 246, 0.15)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.3)',
        'glow-purple-sm': '0 0 15px -2px rgba(139, 92, 246, 0.25)',
        'glow-card': '0 10px 30px -10px rgba(8, 11, 24, 0.8), 0 0 20px -5px rgba(139, 92, 246, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 35%, transparent 70%)',
        'purple-btn': 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(23, 29, 53, 0.9) 0%, rgba(16, 21, 42, 0.95) 100%)',
      },
    },
  },
  plugins: [],
}
