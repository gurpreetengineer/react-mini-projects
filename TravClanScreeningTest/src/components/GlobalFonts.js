import FontBlack from '../assets/fonts/ProductSans-Black.ttf';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: "ProductSans";
    src: local('ProductSans'), url('${FontBlack}') format('TrueType');
    font-weight: 900;
  }
`;
