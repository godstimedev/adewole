import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   html,
   html *,
   html *::before,
   html *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
   }
   body {
      ${({ theme }) => theme.fonts.kanitFont};
      background-color: ${({ theme }) => theme.colors.black};
      
      color: ${({ theme }) => theme.colors.white};
		font-size: 1rem;
		line-height: 200%;
   }
   ul {
      list-style: none;
   }
   button {
      ${({ theme }) => theme.fonts.kanitFont};

      border: none;
      cursor: pointer;
      font-weight: 600;
      outline: none;
   }
   a {
      color: inherit;

      text-decoration: none;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      ${({ theme }) => theme.fonts.kanitFont};

      font-weight: 700;
      letter-spacing: 0.02em;
   }
   .display1 {
      ${({ theme }) => theme.fonts.syneFont};

      font-size: 3.375rem;
      line-height: 120%;
      text-transform: uppercase;

      @media screen and (max-width:480px) {
         font-size: 1.75rem; 
         line-height: 2.375rem; 
      };
   }
   .display2 {
      ${({ theme }) => theme.fonts.syncFont};

      font-size: 2.5rem;
      line-height: 132.5%; 
      text-transform: uppercase;
      font-weight: 400;

      @media screen and (max-width:480px) {
         font-size: 1.5rem; 
         line-height: 3.3125rem; 
      };
   }
   /* h1 {
      font-size: 3rem;
      line-height: 120%;
   }
   h2 {
      font-size: 2.5rem;
      line-height: 120%;
   }
   h3 {
      font-size: 2.0625rem;
      line-height: 120%;
   }
   h4 {
      font-size: 1.75rem;
      line-height: 120%;
   }
   h5 {
      font-size: 1.4375rem;
      line-height: 120%;
   }
   h6 {
      font-size: 1.1875rem;
      line-height: 120%;
   } */
   .Toastify__toast-container {
      padding: 0;
      width: auto;

      @media screen and (max-width:480px) {
         &.Toastify__toast-container--bottom-center {
            bottom: 1em;
            left: 50%;
            transform: translateX(-50%);
         }
         &.Toastify__toast-container--top-center {
            top: 1em;
            left: 50%;
            transform: translateX(-50%);
         }
      }
      
      .Toastify__toast {
         padding: 0;
         margin-bottom: 0;
         min-height: unset;
         background: none;
         width: max-content;
         margin: auto;
      }
      .Toastify__toast-body {
         padding: 0;
      }
   }
`;

export default GlobalStyles;
