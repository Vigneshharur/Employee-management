import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { colors, sizes } from '../../theme';
import Icon from '../../icon/lib/';
import { LabelTypography } from '../../typography/lib';
import Spacer from '../../spacer/lib/index';

const CHECK = 'check';
const MINUS = 'minus';

type IconContainerProps = {
  checked: boolean;
  disabled: boolean;
};

const getBackgroundColor = (checked: boolean, disabled: boolean) => {
  if (disabled) {
    return colors.gray3;
  }
  return checked ? colors.green2 : colors.white;
};

const IconContainer = styled('div')<IconContainerProps>`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 2px;
  border: solid 1px ${colors.gray2};
  background-color: ${(props) => getBackgroundColor(props.checked, props.disabled)};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: ${(props) => (props.disabled ? 'inherited' : `${colors.green3}`)};
  }
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const CheckboxLabel = styled(LabelTypography)`
  display: inline-flex;
  align-items: center;
`;

const CheckboxInput = styled('input')`
  display: none;
`;

export interface CheckboxProps {
  value: boolean;
  indeterminate?: boolean;
  onChange?: (value: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

function Checkbox({
  value,
  indeterminate = false,
  onChange,
  id,
  label,
  className,
  disabled = false,
  ...rest
}: CheckboxProps) {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(!value, event);
  const checked = value || indeterminate;
  return (
    <CheckboxLabel htmlFor={id} css="" className={className}>
      <CheckboxInput
        type="checkbox"
        id={id}
        onChange={handleOnChange}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <IconContainer checked={checked} disabled={disabled}>
        {checked && <Icon color="white" iconSize="sm" weight="far" iconClass={indeterminate ? MINUS : CHECK} />}
      </IconContainer>
      {label && <Spacer itemWidth={sizes.xSmall} />}
      {label}
    </CheckboxLabel>
  );
}

export default Checkbox;
