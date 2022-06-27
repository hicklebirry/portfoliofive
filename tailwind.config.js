/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee-bean': "url('https://i.imgur.com/o3qXzRl.jpg')"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin.js'),
  ],
}
