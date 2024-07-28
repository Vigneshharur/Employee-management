import React, { useState } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';

import { colors, sizes } from '../../theme';
import { StandardSemiBoldTypography } from '../../typography/lib/index';

type styledProps = {
  selected: boolean;
};

const ButtonElement = styled.button<styledProps>`
  cursor: ${(props) => {
    if (props.selected) {
      return 'default';
    }
    return 'pointer';
  }};
  background-color: ${(props) => {
    if (props.selected) {
      return colors.purple1;
    }
    return 'transparent';
  }};
  outline: none;
  border: none;
  user-select: none;
  padding: ${sizes.xSmall} ${sizes.small};
  border-right: 0.1rem solid ${colors.purple2};
  color: ${colors.cta};
  label: button-bar-button;
  &.hovering {
    &:not([disabled]) {
      ${(props) => {
        if (!props.selected) {
          return `
          background-color: ${colors.cta};
          color: ${colors.white};
          `;
        }
      }}
    }
  }
  &:disabled {
    cursor: default;
    background-color: ${colors.gray3};
    border: ${colors.gray4};
    color: ${colors.white};
    & span {
      color: ${colors.white};
    }
  }
`;

type ButtonBarButtonProps = {
  text: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonBarButton: React.FC<ButtonBarButtonProps> = ({ text, selected, disabled = false, onClick }) => {
  const [hovering, setHovering] = useState(false);
  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);
  const handleClick = () => {
    setHovering(false);
    if (!selected) {
      onClick();
    }
  };

  return (
    <ButtonElement
      selected={selected}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={hovering ? 'hovering' : ''}>
      <StandardSemiBoldTypography color={colors.cta} className={hovering && !selected ? 'reverse' : ''}>
        {text}
      </StandardSemiBoldTypography>
    </ButtonElement>
  );
};

export default ButtonBarButton;
