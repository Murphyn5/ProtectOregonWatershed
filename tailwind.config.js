const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            'midnightGreen': '#004E64',
            'pacificCyan': '#00A5CF',
            'persianGreen': '#25A18E',
            'lightGreen': '#7AE582',
            'aquamarine': '#9FFFCB',
            // cross-theme tokens
            'splash1': '#004E64',
            'splash2': '#7AE582',
            'splash3': '#25A18E',
            'splash4': '#7AE582',
            'splash5': '#9FFFCB',
            'background': '#ffffff',
            'whiteText': '#ffffff',
            'darkText': '#333333',
            'altText': '#333333'
          }, // light theme colors
          backgroundImage: {
            'main': "url('/main.jpg')"
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            'midnightGreen': '#004E64',
            'pacificCyan': '#00A5CF',
            'persianGreen': '#25A18E',
            'lightGreen': '#7AE582',
            'aquamarine': '#9FFFCB',
            // cross-theme tokens
            'splash1': '#7AE582',
            'splash2': '#25A18E',
            'splash3': '#00A5CF',
            'splash4': '#7AE582',
            'splash5': '#9FFFCB',
            'background': '#004E64',
            'whiteText': '#ffffff',
            'darkText': '#333333',
            'altText': '#ffffff'
          }, // dark theme colors
        },
        modern: {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff',
            },
            focus: '#F182F6',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
