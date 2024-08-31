/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'login-color': "#565ABD",
        'sign-color':"#FBF3B2",
        'landing-color':'#345962',
        'quiz-color':'#6F313D'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
