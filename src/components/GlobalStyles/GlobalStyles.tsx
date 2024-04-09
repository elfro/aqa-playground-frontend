'use client';

const GlobalStyles = createGlobalStyle`
    /*
  1. Use a more-intuitive box-sizing model.
*/
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /*
      2. Remove default margin
    */
    * {
        margin: 0;
    }

    /*
      3. Allow percentage-based heights in the application
    */
    html, body {
        height: 100%;
    }

    /*
      4. CLS optimization  
     */
    
    body {
        overflow-y: scroll;
    }
    
    /*
      Typographic tweaks!
      5. Add accessible line-height
      6. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /*
      7. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    /*
      8. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }

    /*
      9. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    /*
      10. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
    }

    /* Global styles */
    /* THEME VARIABLES */
    html {
        --color-primary: hsl(${COLORS.primary});
        --color-primary-light: hsl(${COLORS.primary} / 80%);
        --color-secondary: hsl(${COLORS.secondary});
 
        --color-white: hsl(${COLORS.white});
        --color-offwhite: hsl(${COLORS.offwhite});
        --color-black: hsl(${COLORS.black});
 
        --color-gray-100: hsl(${COLORS.gray[100]});
        --color-gray-300: hsl(${COLORS.gray[300]});
        --color-gray-500: hsl(${COLORS.gray[500]});
        --color-gray-700: hsl(${COLORS.gray[700]});
        --color-gray-900: hsl(${COLORS.gray[900]});
        
        --color-gray-500-transparent15: hsl(${COLORS.gray[500]} / 0.15);
        --color-gray-500-transparent75: hsl(${COLORS.gray[500]} / 0.75);

        --color-overlay-gray: hsl(${COLORS.gray[900]} / 0.8);

        --content-width: 110rem;
        --viewport-padding: 16px;
        --header-height: 5rem;
        --modal-padding: 32px;

        background-color: var(--color-gray-100);
    }

    p, h1, h2, h3, h4, h5, h6 {
        color: var(--color-gray-900);
    }
    
    @media (min-width: 35rem) {
        html {
            --viewport-padding: 24px;
        }
    }
`;
import { createGlobalStyle } from 'styled-components';

import { COLORS } from '@/constants/styles.constants';

export default GlobalStyles;
