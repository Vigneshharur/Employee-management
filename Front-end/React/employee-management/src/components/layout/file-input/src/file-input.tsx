import React, { MouseEvent, Fragment } from 'react';
import styled from '@emotion/styled';
import { SmallSemiBoldTypography, SmallTypography, StandardTypography } from '../../typography/lib/';
import { colors, sizes } from '../../theme/lib/';
import Icon from '../../icon/lib/';
import { StyleType } from '../../button/lib/';

const DISABLED = 'DISABLED';

const FakeInput = styled('div')`
  width: 100%;
  height: ${sizes.large};
  display: flex;
  position: relative;
  margin-top: ${sizes.xSmall};
`;

const FakeButton = styled('span')<{ type: string }>`
  display: block;
  height: ${sizes.large};
  padding: ${sizes.xSmall} ${sizes.medium};
  font-weight: 600;
  color: ${({ type }) => {
    switch (type) {
      case StyleType.PRIMARY:
      case DISABLED:
        return colors.white;
      case StyleType.SECONDARY:
        return colors.cta;
      default:
        return colors.cta;
    }
  }};
  content: 'Browse';
  background-color: ${({ type }) => {
    switch (type) {
      case StyleType.PRIMARY:
        return colors.cta;
      case StyleType.SECONDARY:
        return colors.white;
      case DISABLED:
        return colors.gray3;
      default:
        return colors.white;
    }
  }};
  border: ${({ type }) => `1px solid ${type === 'disabled' ? colors.gray3 : colors.cta}`};
  border-radius: 0 0.3rem 0.3rem 0;
  cursor: ${({ type }) => (type === 'disabled' ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
  &:hover {
    background-color: ${({ type }) => {
      switch (type) {
        case StyleType.PRIMARY:
          return colors.purple4;
        case StyleType.SECONDARY:
          return colors.purple1;
        case DISABLED:
          return colors.gray3;
        default:
          return colors.purple1;
      }
    }};
  }
`;

const FileName = styled('span')<{ error?: boolean; disabled?: boolean }>`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: ${({ error }) => `1px solid ${error ? colors.yellow2 : colors.purple2}`};
  border-right: none;
  background-color: ${({ error, disabled }) => {
    if (error) {
      return colors.yellow1;
    }
    if (disabled) {
      return colors.gray1;
    }
    return colors.white;
  }};
  padding: ${sizes.xSmall} ${sizes.small};
  flex-grow: 1;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Input = styled('input')`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 0.1rem;
`;

const Label = styled('label')`
  display: block;
  margin-bottom: 0;
`;

const CancelInput = styled('span')<{ error?: boolean }>`
  background-color: ${({ error }) => `${error && colors.yellow1}`};
  border: ${({ error }) => `0.1rem solid ${error ? colors.yellow2 : colors.purple2}`};
  border-left: none;
  padding: ${sizes.xSmall};
  cursor: pointer;
  & > svg {
    transition: 0.15s all;
    &:hover {
      transform: scale(1.15);
    }
  }
`;
const FileErrorMessage = styled(SmallTypography)`
  position: absolute;
  bottom: -2.2rem;
  left: 0;
  color: ${colors.yellow3};
  svg {
    margin-right: ${sizes.xxSmall};
  }
`;

interface FileInputProps {
  label: string;
  value: Array<File>;
  error?: string;
  disabled?: boolean;
  acceptedFiles: string;
  onChange: Function;
  buttonText: string;
  buttonType: string;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  value,
  error,
  acceptedFiles = '',
  onChange,
  disabled,
  buttonText = 'Browse',
  buttonType = StyleType.SECONDARY,
  ...rest
}) => {
  const fileName = value.length > 0 ? value[0].name : '';

  const handleFileCancel = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    onChange([]);
  };

  //the onchange listener will not fire if you click the same file after clearing its value.
  // this resets the value so it will always change
  const handleInputClick = (event: MouseEvent) => {
    (event.target as HTMLInputElement).value = '';
  };

  return (
    <Fragment>
      <div>
        <Label>
          <SmallSemiBoldTypography css="">{label}</SmallSemiBoldTypography>
          <FakeInput>
            <FileName title={fileName} error={!!error} disabled={disabled}>
              <StandardTypography css=""> {fileName}</StandardTypography>
            </FileName>
            {value.length > 0 && (
              <CancelInput onClick={handleFileCancel} error={!!error}>
                <Icon iconClass="times" color={colors.purple4} />
              </CancelInput>
            )}
            <FakeButton type={disabled ? DISABLED : buttonType}>{buttonText}</FakeButton>
            {error && (
              <FileErrorMessage css="">
                <Icon iconClass="exclamation-triangle" color={colors.yellow2} iconSize="lg" weight="fas" />
                {error}
              </FileErrorMessage>
            )}
          </FakeInput>
          <Input
            {...rest}
            style={{ display: 'none' }}
            type="file"
            accept={acceptedFiles}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              onChange(e.currentTarget.files);
            }}
            onClick={handleInputClick}
            disabled={disabled}
          />
        </Label>
      </div>
    </Fragment>
  );
};

export default FileInput;
