module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        textBase: '#afb6c2',
        textTitle: '#d4ccb6',
        background: '#191816',
        formBackground: '#24221f',
        primaryColor: '#ffc632'
      }
    },
    fontFamily: {
      'titles': ['Poppins', 'sans-serif'],
      'body': ['Roboto', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
