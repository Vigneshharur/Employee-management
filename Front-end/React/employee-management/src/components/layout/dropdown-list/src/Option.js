import React from 'react';
import { components } from 'react-select';
import { StandardTypography } from '../../typography/lib/';

const Option = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <StandardTypography>{children}</StandardTypography>
    </components.Option>
  );
};

export default Option;
