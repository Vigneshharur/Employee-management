import React from 'react';
import styled from '@emotion/styled';
import { components } from 'react-select';
import { StandardTypography } from '../../typography/lib/';
import { colors, sizes } from '../../theme/lib/';
import Icon from '../../icon/lib/';

const LabelWrapper = styled.span`
  display: inline-block;
  padding-left: ${sizes.xSmall};
`;

const MockCheckbox = styled.div(({ isSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.8rem',
  height: '1.8rem',
  borderRadius: '2px',
  border: `solid 1px ${colors.gray2}`,
  backgroundColor: isSelected ? `${colors.green2}` : `${colors.white}`
}));

const CheckboxOption = (props) => {
  return (
    <components.Option {...props}>
      <MockCheckbox isSelected={props.isSelected} data-testid={`dropdownOption-${props.label}`}>
        <Icon color="white" iconSize="sm" weight="far" iconClass={'check'} />
      </MockCheckbox>
      <LabelWrapper title={props.label}>
        <StandardTypography>{props.label}</StandardTypography>
      </LabelWrapper>
    </components.Option>
  );
};

export default CheckboxOption;
