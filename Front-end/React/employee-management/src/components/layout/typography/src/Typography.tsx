import WebFont from 'webfontloader';
import { css } from '@emotion/core';

WebFont.load({
  google: {
    families: ['Libre Franklin']
  }
});

const defaultFont = css`
  font-family: 'Libre Franklin', sans-serif;
`;

export default defaultFont;
