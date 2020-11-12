const plugin = require('tailwindcss/plugin')

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true, purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        fontFamily: {
            'display': ['Circular Std']
        },
        inset: {
            '0': 0,
             auto: 'auto',
             '1/2': '50%',
             'full': '100%',
          },
        

        extend: {
          color: {
            // green: {
            //     main: '#2DC385',
            //     200: '#2BAF8A',
            //     300: '#03937f',
            //     400: '#86B1B3'
            // }

        }
 
        }
    },
    variants: {},
    plugins: [
        require('tailwindcss-pseudo-elements'),

        plugin(function ({ addUtilities }) {
            addUtilities(
              {
                '.empty-content': {
                  content: "''",
                },
              },
              ['before']
            )
          }),
       

    ]
}
