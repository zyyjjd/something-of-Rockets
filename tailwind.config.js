/*
 * @Date: 2023-03-20 14:27:17
 * @LastEditTime: 2023-04-03 10:37:29
 * @FilePath: /Rockets/tailwind.config.js
 * @Description:
 *
 */
// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/public/3453.jpg')",
      },
      screens: {
        widescreen: {
          //定义媒体查询，最小宽高比小于3/2会生效
          raw: "(min-aspect-ratio: 3/2)",
        },
        tailscreen: {
          //定义媒体查询，最小宽高比小于1/2会生效
          raw: "(min-aspect-ratio: 13/20)",
        },
      },
      keyframes: {
        "open-menu": {
          "0%": {
            transform: "scaleY(0)",
          },
          "80%": {
            transform: "scaleY(1.2)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
