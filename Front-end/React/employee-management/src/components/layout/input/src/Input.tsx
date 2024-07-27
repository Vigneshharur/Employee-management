import React, { ChangeEvent, HTMLProps, useEffect, useRef } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes, fontSize } from '../../theme/lib/';
import { LabelTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib/';
import Icon from '../../icon/lib/';

const StyledInput = styled('input')`
  width: 100%;
  font-size: ${fontSize.standard};
  padding: 0 ${sizes.xSmall};
  margin: ${sizes.xxSmall} ${sizes.small} 0 0;
  height: ${sizes.large};
  border-radius: 0;
  border: 0.1rem solid ${colors.gray2};
  display: block;
  &:focus {
    border: 0.1rem solid ${colors.purple3};
    outline: none;
  }
  &:disabled {
    background: ${colors.gray2};
  }
  &::placeholder {
    color: ${colors.gray4};
  }
  &.inputError {
    background-color: ${colors.yellow1};
    border-color: ${colors.yellow2};
  }
`;

const Required = styled(StandardSemiBoldTypography)`
  color: ${colors.red2};
`;

const ErrorMessage = styled(SmallTypography)<{ error: boolean }>`
  display: block;
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
  margin: ${sizes.xxSmall} 0;
  color: ${colors.yellow3};
  svg {
    visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
    margin-right: ${sizes.xxSmall};
  }
`;
//required is a boolean prop on HTMLInput that we've typed as a string
export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'required'> {
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  id?: string;
  labelText?: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
  type?: string;
  inputTestId?: string;
  isDisabled?: boolean;
  required?: 'required' | 'optional' | '';
  autoFocus?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onBlur,
      onChange,
      value,
      placeholder,
      id = `input_${new Date().getTime()}`,
      labelText,
      className,
      error = false,
      errorMessage = '',
      inputTestId,
      isDisabled = false,
      required = '',
      autoFocus = false,
      ...args
    },
    forwardedRef
  ) => {
    const errorClass: string = error ? 'inputError' : '';
    const componentRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus && componentRef) {
        componentRef?.current?.focus();
      }
    }, [autoFocus, componentRef]);

    return (
      <div className={className}>
        <LabelTypography className={isDisabled ? 'disabled' : ''} htmlFor={id}>
          {required === 'required' && <Required>* </Required>}
          {labelText} {required === 'optional' && <SmallTypography className="disabled"> optional </SmallTypography>}
        </LabelTypography>
        <StyledInput
          className={errorClass}
          type="text"
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          name={id}
          ref={forwardedRef || componentRef}
          data-testid={inputTestId}
          disabled={isDisabled}
          {...args}
        />
        <ErrorMessage error={error}>
          <Icon iconClass="exclamation-triangle" color={colors.yellow2} iconSize="lg" weight="fas" />
          {errorMessage}
        </ErrorMessage>
      </div>
    );
  }
);

export default Input;
