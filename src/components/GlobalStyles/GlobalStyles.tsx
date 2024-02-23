'use client';

import { createGlobalStyle } from 'styled-components';
import { COLORS } from '@/constants';

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
      Typographic tweaks!
      4. Add accessible line-height
      5. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /*
      6. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    /*
      7. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font: inherit;
    }

    /*
      8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    /*
      9. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
    }
    
    /* Global styles */
    /* THEME VARIABLES */
    html {
        --color-white: hsl(${COLORS.white});
        --color-primary: hsl(${COLORS.primary});
        --color-secondary: hsl(${COLORS.secondary});
        --color-gray-100: hsl(${COLORS.gray[100]});
        --color-gray-300: hsl(${COLORS.gray[300]});  
        --color-gray-500: hsl(${COLORS.gray[500]});  
        --color-gray-700: hsl(${COLORS.gray[700]});  
        --color-gray-900: hsl(${COLORS.gray[900]});
          
        --color-overlay-gray: hsl(${COLORS.gray[900]} / 0.8);
          
        --content-width: 55rem;
        --outer-content-width: 80rem;
        --viewport-padding: 16px;
        --header-height: 5rem;
        --trimmed-content-width: calc(
                var(--content-width) - var(--viewport-padding) * 2
        );
        
        background-color: var(--color-white);
    }

    @media (min-width: 35rem) {
        html {
            --viewport-padding: 24px;
        }
    }
`;

export default GlobalStyles;
