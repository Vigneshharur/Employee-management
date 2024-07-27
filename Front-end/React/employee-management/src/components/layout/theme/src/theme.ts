import { css } from '@emotion/core';

export const globalStyles = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html button {
    cursor: pointer;
    font-family: 'Libre Franklin', sans-serif;
  }
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export enum colors {
  brand = '#8CBD3D',
  cta = '#5A53AF',
  coral = '#F2783B',
  cream1= '#FCF6ED',
  cream2= '#E8D9C4',
  cream = cream1,
  charcoal = '#18181E',
  white = '#FFFFFF',
  black = '#000000',
  gray1 = '#F5F5F5',
  gray2 = '#E1E1E1',
  gray3 = '#CCCCCC',
  gray4 = '#757575',
  gray5 = '#565C5F',
  purple1 = '#F4F3FF',
  purple2 = '#D6D4EB',
  purple3 = '#8984BE',
  purple4 = '#3C3775',
  green1 = '#ECF1E2',
  green2 = '#A5CC66',
  green3 = '#24742C',
  green4 = '#CFE6C0',
  goldenrod = '#FFD00D',
  yellow1 = '#FFF4C7',
  yellow2 = '#FABA6B',
  yellow3 = '#92451D',
  yellow4 = '#FFECD6',
  red1 = '#F2D1CD',
  red2 = '#BF1D08',
  plum1 = '#CF8CAD',
  plum2 = '#8E3F5C',
  teal1 = '#83C1C6',
  teal2 = '#00848E',
  navy = '#201C4F'
}

// From typography styleguide to use only when a Wrapping components is not an option
export const fontSize = {
  displayLarge: '3.4rem',
  displayMedium: '2.6rem',
  displaySmall: '2.1rem',
  heading: '1.7rem',
  standard: '1.6rem',
  small: '1.3rem',
  hint: '1.2rem'
};

export const sizes = {
  xxSmall: '0.6rem',
  xSmall: '1rem',
  small: '2rem',
  medium: '3rem',
  large: '4rem',
  xLarge: '5rem',
  xxLarge: '6rem'
};

export enum zIndices {
  modal = 7000,
  modalDropdown = modal + 50
}

export const fontFamily = { default: 'Libre Franklin, sans-serif' };
export const boxShadow = '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3)';
export const maxMobileWidth = 991;
