import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../../theme';
import ButtonBarButton from './ButtonBarButton';

const ButtonBarContainer = styled.ul`
  label: button-bar-container;
  border: 0.1rem solid ${colors.purple2};
  border-radius: 0.2rem;
  padding: 0;
  display: inline-block;
  list-style-type: none;
  li {
    float: left;
    &:last-child {
      button {
        border-right: none;
      }
    }
  }
`;

type ButtonBarProps = {
  buttonItems: { name: string; selected: boolean; disabled?: boolean }[];
  onClick: (item: { name: string; selected: boolean }) => void;
  className?:string;
};
const ButtonBar: React.FC<ButtonBarProps> = ({ buttonItems, onClick, className }) => {
  return (
    <ButtonBarContainer className={className}>
      {buttonItems.map((item, index) => (
        <li key={index}>
          <ButtonBarButton
            text={item.name}
            key={index}
            onClick={() => onClick(item)}
            selected={item.selected}
            disabled={item.disabled}
          />
        </li>
      ))}
    </ButtonBarContainer>
  );
};

export default ButtonBar;
