import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary':"#131212"
      },
      colors: {
        'primary':"#FFFFFF",
        'secondary':"#131212",
      },
      fontSize: {
        '11xl': '10rem'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'monument': ['MonumentExtended'],
      },
      maxWidth: {
        '9xl':'100rem'
      },
      backgroundImage: {
        'white-black': 'linear-gradient(90deg, #E6E6E6 0%, #131212 100%)',
      }
    },
  },
  plugins: [
    
  ],
}
export default config
