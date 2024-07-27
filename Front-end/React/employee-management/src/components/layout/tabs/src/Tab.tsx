import { ReactNode, MouseEvent } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes, fontSize } from '../../theme/lib/index';

export interface TabProps {
  active?: boolean;
  disabled?: boolean;
  value?: number;
  onClick?: (event: MouseEvent<HTMLButtonElement>)=>void;
  children: ReactNode;
}

const backgroundColor = ({ active, disabled }: TabProps): string => {
  if (active && disabled) {
    return colors.gray3;
  } else if (active) {
    return colors.cta;
  }
  return 'transparent';
};
const color = ({ active, disabled }: TabProps): string => {
  if (active) {
    return colors.white;
  } else if (disabled) {
    return colors.gray4;
  }
  return colors.cta;
};
const backgroundColorHover = ({ active, disabled }: TabProps): string => {
  if (active && disabled) {
    return colors.gray3;
  } else if (disabled) {
    return colors.white;
  }
  return colors.purple2;
};
const colorHover = ({ active, disabled }: TabProps): string => {
  if (!active && disabled) {
    return colors.gray4;
  }
  return colors.cta;
};

export default styled<'button', TabProps>('button')`
  ${(props: TabProps): string => `
    background-color: ${backgroundColor(props)};
    color: ${color(props)};
    padding: ${sizes.xSmall} ${sizes.small};
    border-radius: ${sizes.small};
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: ${fontSize.small};
    &:hover {
      background-color: ${backgroundColorHover(props)};
      color: ${colorHover(props)};
    }
    &:active {
      background-color: ${colors.purple3};
    }
  `}
`;
