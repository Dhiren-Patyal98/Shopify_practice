/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sections/*.liquid',
    './layout/*.liquid',

    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

