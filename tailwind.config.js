/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        background: '#F8FAFC',       // use as bg-background
        heading: '#FF9F00',          // use as text-heading
        paragraph: '#4B5563',        // use as text-paragraph
        buttonBg: '#FF9F00',         // use as bg-buttonBg
        buttonHoverBg: '#e68a00',    // use as bg-buttonHoverBg
      },
      boxShadow: {
        buttonShadow: '0 4px 8px rgba(255, 159, 0, 0.4)', // use as shadow-buttonShadow
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
