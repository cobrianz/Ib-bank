/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* ib-green-20 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* ib-green */
        background: "var(--color-background)", /* ib-light */
        foreground: "var(--color-foreground)", /* text-primary */
        primary: {
          DEFAULT: "var(--color-primary)", /* ib-green */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* ib-dark */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* error-brown */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* warm-neutral */
          foreground: "var(--color-muted-foreground)", /* text-secondary */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* ib-accent */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* text-primary */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* text-primary */
        },
        success: {
          DEFAULT: "var(--color-success)", /* success-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* warning-gold */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* error-brown */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Brand-specific colors
        'ib-green': '#8A9A5B', /* primary-brand */
        'ib-dark': '#4A5D23', /* secondary-brand */
        'ib-accent': '#6B7A3F', /* accent-brand */
        'ib-light': '#F5F5E6', /* background-brand */
        'ib-surface': '#FFFFFF', /* surface-brand */
        'text-primary': '#2D3A0F', /* primary-text */
        'text-secondary': '#4A5D23', /* secondary-text */
        'success-green': '#5A8A3A', /* success-status */
        'warning-gold': '#B8860B', /* warning-status */
        'error-brown': '#A0522D', /* error-status */
        'warm-neutral': '#FAFAF8', /* neutral-background */
        'trust-green': '#2E5C2E', /* trust-indicator */
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'], /* brand-headlines */
        'body': ['Inter', 'sans-serif'], /* body-content */
        'accent': ['Playfair Display', 'serif'], /* accent-typography */
        'cta': ['Poppins', 'sans-serif'], /* call-to-action */
      },
      fontSize: {
        'brand-hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }], /* hero-headlines */
        'brand-h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }], /* primary-headlines */
        'brand-h2': ['2rem', { lineHeight: '1.3', letterSpacing: '0.01em' }], /* secondary-headlines */
        'brand-h3': ['1.5rem', { lineHeight: '1.4' }], /* tertiary-headlines */
        'brand-body': ['1rem', { lineHeight: '1.6' }], /* body-text */
        'brand-small': ['0.875rem', { lineHeight: '1.5' }], /* small-text */
        'brand-cta': ['1rem', { lineHeight: '1.2', letterSpacing: '0.05em' }], /* cta-text */
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '88': '22rem', /* 352px */
        '128': '32rem', /* 512px */
        '144': '36rem', /* 576px */
      },
      borderRadius: {
        'brand': '0.75rem', /* 12px */
        'brand-lg': '1rem', /* 16px */
        'brand-xl': '1.5rem', /* 24px */
      },
      boxShadow: {
        'brand': '0 4px 6px -1px rgba(138, 154, 91, 0.1), 0 2px 4px -1px rgba(138, 154, 91, 0.06)', /* brand-shadow */
        'brand-lg': '0 10px 15px -3px rgba(138, 154, 91, 0.1), 0 4px 6px -2px rgba(138, 154, 91, 0.05)', /* brand-shadow-large */
        'neumorphic': '8px 8px 16px rgba(74, 93, 35, 0.1), -8px -8px 16px rgba(245, 245, 230, 0.8)', /* neumorphic-effect */
        'neumorphic-inset': 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.8)', /* neumorphic-inset */
        'trust-glow': '0 0 20px rgba(138, 154, 91, 0.3)', /* trust-indicator-glow */
      },
      backdropBlur: {
        'brand': '20px', /* glassmorphic-blur */
        'subtle': '10px', /* subtle-blur */
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s infinite', /* floating-action-pulse */
        'fade-in': 'fadeIn 0.5s ease-out', /* content-fade-in */
        'slide-up': 'slideUp 0.4s ease-out', /* slide-up-animation */
        'scale-in': 'scaleIn 0.3s ease-out', /* scale-in-animation */
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)', /* brand-timing */
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', /* spring-timing */
      },
      zIndex: {
        'header': '50', /* header-z-index */
        'sidebar': '40', /* sidebar-z-index */
        'modal': '100', /* modal-z-index */
        'tooltip': '60', /* tooltip-z-index */
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}