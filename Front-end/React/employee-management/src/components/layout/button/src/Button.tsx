import React, { ReactNode } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';

import { colors, fontSize, fontFamily, sizes } from '../../theme';
import { StyleType } from './StyleType';
import Icon, { ICONS } from '../../icon';

type ButtonStyledProps = {
  styleType: StyleType;
};

const StyledButton = styled('button')<ButtonStyledProps>`
  font-family: ${fontFamily.default};
  font-size: ${fontSize.standard};
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    switch (props.styleType) {
      case StyleType.SECONDARY:
        return colors.white;
      case StyleType.TERTIARY:
        return 'transparent';
      case StyleType.PRIMARY:
      default:
        return colors.cta;
    }
  }};
  color: ${(props) => {
    switch (props.styleType) {
      case StyleType.SECONDARY:
      case StyleType.TERTIARY:
        return colors.cta;
      case StyleType.PRIMARY:
      default:
        return colors.white;
    }
  }};
  padding: ${sizes.xSmall} 1.4rem;
  border-radius: 8px;
  user-select: none;
  border: ${(props) => {
    switch (props.styleType) {
      case StyleType.SECONDARY:
        return `0.1rem solid ${colors.cta}`;
      case StyleType.TERTIARY:
      case StyleType.PRIMARY:
      default:
        return 'none';
    }
  }};
  outline: none;
  &:hover {
    background-color: ${(props) => {
      switch (props.styleType) {
        case StyleType.PRIMARY:
          return colors.navy;
        case StyleType.SECONDARY:
          return colors.white;
        case StyleType.TERTIARY:
          return 'transparent';
        default:
          return colors.cta;
      }
    }};
    color: ${(props) => {
      switch (props.styleType) {
        case StyleType.SECONDARY:
        case StyleType.TERTIARY:
          return colors.navy;
        case StyleType.PRIMARY:
          return colors.white;
      }
    }};
    border: ${(props) => {
      switch (props.styleType) {
        case StyleType.SECONDARY:
          return `0.1rem solid ${colors.navy}`;
        case StyleType.TERTIARY:
        case StyleType.PRIMARY:
        default:
          return 'none';
      }
    }};

    .iconButton {
      border-color: ${colors.cta};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => {
      switch (props.styleType) {
        case StyleType.TERTIARY:
          return 'transparent';
        case StyleType.SECONDARY:
        case StyleType.PRIMARY:
        default:
          return colors.gray1;
      }
    }};
    color: ${(props) => {
      switch (props.styleType) {
        case StyleType.TERTIARY:
          return colors.gray3;
        case StyleType.PRIMARY:
        case StyleType.SECONDARY:
        default:
          return colors.gray4;
      }
    }};
    border-color: ${(props) => {
      switch (props.styleType) {
        case StyleType.SECONDARY:
          return colors.gray3;
      }
    }};
    .iconButton {
      border-color: ${colors.gray2};
    }
  }
`;

const StyledIconContainer = styled.div`
  margin-right: ${sizes.xSmall};
  display: flex;
`;

interface BaseButtonProps {
  styleType?: StyleType;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  className?: string;
  id?: string;
  testId?: string;
  iconClass?: ICONS;
  children: ReactNode;
}

type ButtonTypeDependentProps =
  | { type: 'submit' | 'reset'; onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void }
  | { type?: 'button'; onClick: (event: React.MouseEvent<HTMLButtonElement>) => void };

type ButtonProps = BaseButtonProps & ButtonTypeDependentProps & React.HTMLAttributes<HTMLButtonElement>;

export interface ButtonStyleProps extends JSX.Element {
  props: ButtonProps;
}

const buttonOrder = {
  [StyleType.PRIMARY]: 1,
  [StyleType.SECONDARY]: 2,
  [StyleType.TERTIARY]: 3
};
//Array of buttons are received by modal and slide in pane.
//They should be displayed with 1 farthest to the right and 3 to the left
export const sortButtonOrder = (buttonArray: ButtonStyleProps[] | undefined) => {
  if (!buttonArray) {
    return [];
  }
  return buttonArray.sort((a: ButtonStyleProps, b: ButtonStyleProps) => {
    //Primary button is a default value, so it may not have been passed in
    return buttonOrder[b.props.styleType || StyleType.PRIMARY] - buttonOrder[a.props.styleType || StyleType.PRIMARY];
  });
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  styleType = StyleType.PRIMARY,
  type,
  disabled,
  className,
  id,
  testId,
  iconClass,
  ...args
}) => (
  <StyledButton
    styleType={styleType}
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={className}
    id={id}
    data-testid={testId}
    {...(args as ButtonProps)}>
    {iconClass && (
      <StyledIconContainer className="iconButton">
        <Icon iconClass={iconClass} weight="far" iconSize="xs" />
      </StyledIconContainer>
    )}
    {children}
  </StyledButton>
);

export default Button;
