import React, { ChangeEvent } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../theme/lib/index';
import { StandardTypography } from '../../typography/lib/index';

const Label = StandardTypography.withComponent('label');

const RadioInput = styled.div`
  display: block;
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  user-select: none;
  label {
    cursor: pointer;
    &.disabled {
      color: ${colors.gray3};
      cursor: not-allowed;
    }
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  input + span {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.8rem;
    width: 1.8rem;
    background-color: ${colors.white};
    border: 0.1rem solid ${colors.gray2};
    border-radius: 50%;
    cursor: pointer;
  }
  input + span:after {
    content: '';
    position: absolute;
    display: none;
    top: 0.2rem;
    left: 0.2rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: ${colors.green2};
  }
  input:focus + span {
    border-width: 0.2rem;
  }
  input:focus + span:after {
    top: 0.1rem;
    left: 0.1rem;
  }
  input:disabled + span {
    border-color: ${colors.gray2};
    background-color: ${colors.gray1};
    cursor: not-allowed;
  }
  input:checked + span {
    border-color: ${colors.green2};
  }
  input:checked + span:after {
    display: block;
  }
  input:checked:disabled + span {
    border-color: ${colors.gray2};
  }
  input:checked:disabled + span:after {
    display: block;
    background: ${colors.gray2};
  }
`;

export interface RadioButtonProps extends React.HTMLProps<HTMLInputElement>{
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
  name: string;
  label: string;
  value: string | number;
  id: string;
  className?: string;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ onChange, disabled, name, checked, label, value, id, className, ...args }, forwardedRef) => (
    <RadioInput className={className}>
      <Label htmlFor={id} className={disabled ? 'disabled' : ''}>
        {label}
        <input
          type="radio"
          onChange={onChange}
          disabled={disabled}
          name={name}
          id={id}
          ref={forwardedRef}
          value={value}
          checked={checked}
          data-testid={`radiobutton-${name}-${id}`}
          {...args}
        />
        <span />
      </Label>
    </RadioInput>
  )
);

export default RadioButton;
