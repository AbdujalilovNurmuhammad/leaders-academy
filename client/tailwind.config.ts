import type { Config } from 'tailwindcss';

const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: v('bg'), fg: v('fg'), card: v('card'), mut: v('mut'), line: v('line'), brand: v('brand'), cyan: v('cyan'), navy: v('navy') },
      fontFamily: {
        sans: ['Onest', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Onest', 'sans-serif'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0) rotate(0)' }, '50%': { transform: 'translateY(-16px) rotate(1.5deg)' } },
        spin360: { to: { transform: 'rotate(360deg)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        ring: { '0%': { boxShadow: '0 0 0 0 rgba(255,255,255,.55)' }, '100%': { boxShadow: '0 0 0 24px rgba(255,255,255,0)' } },
        drift: { to: { transform: 'translate(140px,-80px) scale(1.3)' } },
        pan: { '50%': { backgroundPosition: '100% 100%' } },
        fall: { to: { transform: 'translateY(110vh) rotate(720deg)', opacity: '0.9' } },
        ang: { to: { '--a': '360deg' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin360 30s linear infinite',
        marquee: 'marquee 32s linear infinite',
        ring: 'ring 2s infinite',
        drift: 'drift 16s ease-in-out infinite alternate',
        pan: 'pan 9s ease infinite',
      },
    },
  },
  plugins: [],
};
export default config;
