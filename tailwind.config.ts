import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {

        // blue theme
        //  secondary: '#4b607b',
        // 'inverse-on-surface': '#eef1f6',
        // primary: '#002c50',
        // 'surface-variant': '#e0e3e8',
        // 'outline-variant': '#c2c7d1',
        // 'secondary-fixed-dim': '#b2c8e7',
        // 'on-secondary-fixed-variant': '#334862',
        // 'on-secondary-container': '#4d627d',
        // 'on-secondary-fixed': '#041c34',
        // 'primary-fixed': '#d2e4ff',
        // 'inverse-surface': '#2d3135',
        // 'surface-container-low': '#f1f4f9',
        // 'surface-tint': '#2f6195',
        // 'surface-container': '#ebeef3',
        // 'primary-container': '#004275',
        // 'on-secondary': '#ffffff',
        // 'tertiary-container': '#693100',
        // surface: '#f7f9ff',
        // 'on-tertiary-fixed-variant': '#713705',
        // 'on-error': '#ffffff',
        // 'on-tertiary': '#ffffff',
        // 'error-container': '#ffdad6',
        // tertiary: '#481f00',
        // 'surface-container-highest': '#e0e3e8',
        // 'secondary-fixed': '#d2e4ff',
        // background: '#f7f9ff',
        // 'primary-fixed-dim': '#a1c9ff',
        // 'tertiary-fixed-dim': '#ffb688',
        // 'surface-dim': '#d7dae0',
        // 'tertiary-fixed': '#ffdbc7',
        // 'on-primary-fixed-variant': '#0e487c',
        // 'on-surface-variant': '#42474f',
        // 'on-primary-container': '#82afe9',
        // 'on-error-container': '#93000a',
        // 'on-tertiary-fixed': '#311300',
        // 'on-background': '#181c20',
        // outline: '#727780',
        // error: '#ba1a1a',
        // 'on-tertiary-container': '#ec9961',
        // 'on-surface': '#181c20',
        // 'surface-container-lowest': '#ffffff',
        // 'on-primary-fixed': '#001c37',
        // 'secondary-container': '#c9dffe',
        // 'on-primary': '#ffffff',
        // 'inverse-primary': '#a1c9ff',
        // 'surface-container-high': '#e5e8ee',
        // 'surface-bright': '#f7f9ff',
        // blue theme end

        // ── Primary — violet/purple ──────────────────────────────────────────
        primary:                   '#6d46b1', // violet-600  — buttons, links, active states
        'on-primary':              '#ffffff',
        'primary-container':       '#5b21b6', // violet-800  — dark variant
        'on-primary-container':    '#ede9fe', // violet-100  — text on dark container
        'primary-fixed':           '#f5f3ff', // violet-50   — lightest tint
        'primary-fixed-dim':       '#c4b5fd', // violet-300
        'on-primary-fixed':        '#2e1065', // violet-950  — darkest
        'on-primary-fixed-variant':'#6d28d9', // violet-700
        'inverse-primary':         '#c4b5fd', // violet-300  — on dark surfaces
        'surface-tint':            '#7c3aed',

        // ── Secondary — slate/neutral-purple ────────────────────────────────
        secondary:                 '#5b5777',
        'on-secondary':            '#ffffff',
        'secondary-container':     '#e8e4f8',
        'on-secondary-container':  '#4a4668',
        'secondary-fixed':         '#e8e4f8',
        'secondary-fixed-dim':     '#cac4e0',
        'on-secondary-fixed':      '#1d1a2e',
        'on-secondary-fixed-variant': '#444061',

        // ── Surface / Background ─────────────────────────────────────────────
        surface:                   '#faf9ff',
        'surface-bright':          '#faf9ff',
        background:                '#faf9ff',
        'surface-dim':             '#d9d6e6',
        'surface-variant':         '#e6e0f0',
        'surface-container-lowest':'#ffffff',
        'surface-container-low':   '#f3f0fa',
        'surface-container':       '#ede9f7',
        'surface-container-high':  '#e7e3f4',
        'surface-container-highest':'#e2deee',
        'inverse-surface':         '#2e2b3b',
        'inverse-on-surface':      '#f1eeff',

        // ── On-surface / Outline ─────────────────────────────────────────────
        'on-surface':              '#1c1b25',
        'on-background':           '#1c1b25',
        'on-surface-variant':      '#48444f',
        'outline-variant':         '#cac4d6',
        outline:                   '#79747e',

        // ── Tertiary / Error (unchanged) ────────────────────────────────────
        tertiary:                  '#481f00',
        'on-tertiary':             '#ffffff',
        'tertiary-container':      '#693100',
        'on-tertiary-container':   '#ec9961',
        'tertiary-fixed':          '#ffdbc7',
        'tertiary-fixed-dim':      '#ffb688',
        'on-tertiary-fixed':       '#311300',
        'on-tertiary-fixed-variant':'#713705',
        error:                     '#ba1a1a',
        'on-error':                '#ffffff',
        'error-container':         '#ffdad6',
        'on-error-container':      '#93000a',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      spacing: {
        'container-max': '80rem',
        gutter: '2rem',
        'stack-sm': '1rem',
        'stack-md': '2rem',
        'stack-lg': '4rem',
        'section-padding': 'clamp(2.5rem, 6vw + 1rem, 8rem)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'body-md': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.625', fontWeight: '400' }],
        'label-md': ['10px', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '700' }],
        'nav-link': ['0.875rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'headline-md': ['1.25rem', { lineHeight: '1.5', fontWeight: '700' }],
        'headline-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        display: ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.05em', fontWeight: '700' }],
      },
    },
  },
} satisfies Config;
