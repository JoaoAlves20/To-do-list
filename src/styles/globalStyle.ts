import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    body {
        background: linear-gradient(45deg, #111, #333);
        color: #fff;
    }

    button {
        cursor: pointer;
    }
`;