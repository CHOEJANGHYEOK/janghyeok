module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mail': "url('/images/mail.svg')",
        'github': "url('/images/github-logo.svg')",
        'mail-hover': "url('/images/mail-hover.svg')",
        'github-hover': "url('/images/github-logo-hover.svg')",
      })
    },
    fontFamily: {
      'roboto': ['Roboto'],
      'roboto-mono': ['Roboto Mono'],
      'raleway': ['Raleway'],
    },
    backgroundColor: {
      'primary': '#EDEDED',
      'secondary': '#C4C4C4',
      'nav': '#FAEDBE',
      'point': '#FF6666',
    },
    textColor: {
      'white': '#000000',
      'secondary': '#C4C4C4',
      'point': '#FF6666',
    },
    letterSpacing: {
      'square': '1em',
    },
    fill: {
      'point': '#FF6666',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
