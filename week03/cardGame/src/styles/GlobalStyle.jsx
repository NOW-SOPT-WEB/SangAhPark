import { createGlobalStyle } from "styled-components";
import DNFBitBit from "../../public/font/DNFBitBitv2.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'DNFBitBit';
    src: local('DNFBitBit'), local('DNFBitBit');
    src: url(${DNFBitBit}) format('truetype');
    font-style: normal;
}
`;

export default GlobalStyle;
