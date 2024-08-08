/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171,66%,44%)",
        lightBlue: "hsl(233,100%,69%)",
      },
      dropShadow: {
        "cyan-md-hsl": "0 4px 3px hsl(171, 66%, 44%)",
        "blue-md-hsl": "0 4px 3px hsl(233,100%,69%)",
        // Define other custom drop shadows here if needed
      },
      fontFamily: {
        baiJamjuree: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
