import { createGlobalStyle } from "styled-components";

export const StyledRoot = createGlobalStyle`

  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-gray-0: #121214;
    --color-gray-1: #212529;
    --color-gray-2: #343B41;
    --color-gray-3: #868E96;
    --color-gray-4: #F8F9FA;
    
    --color-white: #ffffff;
    --color-overlay: #12121480;

    --color-sucess: #3FE864;
    --color-negative: #E83F5B;


    --sz-title-1: 1.25rem;
    --sz-title-2: 1.125rem;
    --sz-title-3: 1rem;

    --sz-text-1: 1rem;
    --sz-text-2: 0.875rem;
    --sz-text-3: 0.75rem;

    --font-weg-1: 700;
    --font-weg-2: 600;
    --font-weg-3: 500;
    --font-weg-4: 400;

    --bd-radius: 4px;
    --shadow: 0 0.25rem 2.5rem -0.0625rem rgba(0, 0, 0, .25);
  }

  body {
    background-color: var(--color-gray-0);
    color: var(--color-gray-4);
    font-family: 'Inter', sans-serif; 
  }
`;
