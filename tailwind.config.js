/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./src/**/*.{html,js}", 
            "./node_modules/flowbite/**/*.js"
          ],
  theme: {
    extend: {
      fontFamily: {
        "inter" : ['inter'],
        "Circular" : ['Circular STD']
      },
      colors: {
        "purple" : '#5D50C6',
        "pink" : '#F85E9F',
        "orange" : '#FF5722',
        "yellow" : '#FACD49'
      },
      dropShadow: {
        "card-shadow" : [
          "0px 41px 89px 0px rgba(0, 0, 0, 0.10)",
          "0px 0px 0px 0px rgba(0, 0, 0, 0.10)"
        ]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}