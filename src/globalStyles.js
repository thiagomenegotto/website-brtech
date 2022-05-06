import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-family-sans-serif);
  }

  :root {
    --white: #fff;
    --gray: #716f7c;
    --gray-light: #f6f6f6;
    --gray-dark: #2B2A2F;
    --primary: #01BF71;
    --primary-dark: #007646;
    --secondary: #0D6AB8;
    --secondary-dark: #020d17;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #0d0f10;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: 'Source Sans Pro', sans-serif;
  }
`;

export const Button = styled.button`
  	border-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0457FB')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease-out;
      background: #fff;
      background: ${({primary}) => (primary ? '#0457FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
      width: 100%;
    }
`;



export default GlobalStyle;