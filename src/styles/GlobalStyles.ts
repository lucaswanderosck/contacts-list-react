import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow: hidden;
        background: ${({ theme }) => theme.colors.gray_600};
    }
`;
