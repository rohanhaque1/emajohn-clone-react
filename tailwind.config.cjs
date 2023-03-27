/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#e0cf4c",
          
 "secondary": "#ffc1da",
          
 "accent": "#fce26c",
          
 "neutral": "#291A2E",
          
 "base-100": "#FFFFFF",
          
 "info": "#7992EC",
          
 "success": "#149450",
          
 "warning": "#E2B203",
          
 "error": "#E5345A",
          },
        },
      ],
    },
   plugins: [require("daisyui")],
}
