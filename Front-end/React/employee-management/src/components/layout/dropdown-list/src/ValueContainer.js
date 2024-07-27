import React from 'react';
import { components } from 'react-select';
import { StandardTypography } from '../../typography/lib/';

const ValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>
    <StandardTypography>{children}</StandardTypography>
  </components.ValueContainer>
);

export default ValueContainer;
