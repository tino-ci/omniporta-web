/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        phone: { max: '1024px' },
        pc: { min: '1025px' },
      },
      width: {
        'contentMaxWidth': '1200px',
        'contentWidth': '1016px',
      },
      maxWidth: {
        'contentMaxWidth': '1200px',
        'contentWidth': '1016px',
      },
      colors: {
        'spacecolor': '#00DA95',
        'textColor': '#000000',
        'titleColor': '#000000',
        'subTitleColor': '#000000CC', //0.8
        'descColor': '#00000099', //0.6
        'subDescColor': '#00000066', //0.4
      },
      boxShadow: {  // 新增自定义阴影
        'spaceShadow': '0px 0px 94px 0px rgba(0,218,149,1)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};

export default config;
