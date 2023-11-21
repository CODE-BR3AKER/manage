/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    backgroundImage: {
      bodyBg: "url('../images/bg-tablet-pattern.svg')",
      mainBg: "url('../images/bg-tablet-pattern.svg')",
      simplifyMobileBg: "url('../images/bg-simplify-section-mobile.svg')",
      simplifyBg: "url('../images/bg-simplify-section-desktop.svg')",
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      bpv: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        BrightRed: 'hsl(12, 88%, 59%)',
        DarkBlue: 'hsl(228, 39%, 23%)',
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        VeryDarkBlue: 'hsl(233, 12%, 13%)',
        VeryPaleRed: 'hsl(13, 100%, 96%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
      },
      screens: {
        mobile: { max: '480px' },
      },
      keyframes: {
        fadeInFromTop: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        upDown: {
          '50%': {
            transform: 'translateY(0.6rem)',
          },
        },
      },
    },
  },
  plugins: [],
};
