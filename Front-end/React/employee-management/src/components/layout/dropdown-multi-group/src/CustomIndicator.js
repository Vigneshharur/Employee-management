import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme/lib/';
import Icon from '../../icon/lib/';

const DrawerSvgSpan = styled.span`
  ${(props) => (props.isOpen ? 'transform: rotate(0.5turn)' : 'transform: rotate(0turn)')};
`;

const CustomIndicator = ({ selectProps: { menuIsOpen } }) => {
  return (
    <DrawerSvgSpan isOpen={menuIsOpen}>
      <Icon iconClass="angle-down" weight="far" color={colors.cta} iconSize="2x" />
    </DrawerSvgSpan>
  );
};

export default CustomIndicator;
