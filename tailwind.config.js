/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee-bean': "url('https://i.imgur.com/o3qXzRl.jpg')"
      }
    },
  },
  plugins: [
  ],
}
