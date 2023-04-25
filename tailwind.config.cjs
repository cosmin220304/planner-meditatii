module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        zoom_in: {
          '0%': { transform: 'scale(0.5)' },
          '40%': { transform: 'scale(0.65)' },
          '60%': { transform: 'scale(0.80)' },
          '100%': { transform: 'scale(1)' },
        }
        ,
        zoom_out: {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(0.80)' },
          '60%': { transform: 'scale(0.65)' },
          '100%': { transform: 'scale(0.5)' },
        },

      },
      animation: {
         'zoom-out' : 'zoom_out 0.5s linear',
         'zoom-in' : 'zoom_in 0.5s linear', 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}