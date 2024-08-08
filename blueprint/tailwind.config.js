/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Archivo: ['Archivo Black'],
      },
      colors: {
        primary: '#6294C3',
        white: '#F3F8FB',
        dark: '#0E0E10',
        gray: '#18181A',
        'danube': {
          '50': '#f3f8fb',
          '100': '#e4edf5',
          '200': '#cfe1ee',
          '300': '#aecee2',
          '400': '#87b3d3',
          '500': '#6294c3',
          '600': '#5783b9',
          '700': '#4d71a8',
          '800': '#435e8a',
          '900': '#3a4e6e',
          '950': '#273144',
        },
      }
    },
  },
  plugins: [
    require("daisyui"),
    "autoprefixer"
  ],
}

