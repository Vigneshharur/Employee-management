import React, { Fragment, MouseEvent } from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

import Icon from '../../icon/lib';
import Button, { StyleType } from '../../button/lib';
import { boxShadow, colors, fontSize, sizes, zIndices } from '../../theme';
import { LabelTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib';

const defaultMinTime = new Date();
defaultMinTime.setHours(0);
defaultMinTime.setMinutes(0);
defaultMinTime.setMilliseconds(0);

const defaultMaxTime = new Date();
defaultMaxTime.setHours(23);
defaultMaxTime.setMinutes(30);
defaultMaxTime.setMilliseconds(0);

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy');

const autoCorrectedTimePipe = (userInput: string) => {
  const needsLeadingZero = new RegExp(/^[2-9]/).test(userInput);
  if (needsLeadingZero) {
    const valueArray = userInput.split('');
    valueArray[1] = valueArray[0];
    valueArray[0] = '0';
    const value = valueArray.join('');
    return { value, indexesOfPipedChars: [0] };
  }
  return userInput;
};

type Props = {
  onChange: (value: Date | null) => Date | null;
  value: Date | null;
  externalError?: boolean;
  externalErrorText?: string;
  disabled?: boolean;
  onBlur?: () => void;
  maxDate?: Date;
  minDate?: Date;
  maxTime?: Date;
  minTime?: Date;
  id?: string;
  labelText?: string | undefined;
  required?: string | null | undefined;
  timePickerOnly?: boolean;
};

const RemedyStyles = css`
  select {
    border: none;
    &: focus {
      border: none;
      outline: none;
    }
  }
  .react-datepicker__time-container,
  .react-datepicker__month-container {
    font-family: 'Libre Franklin', sans-serif;
    font-size: ${fontSize.small};
    font-weight: bold;
    border: none;
    box-shadow: ${boxShadow};
    border-radius: 0.3rem;
  }
  .react-datepicker__month-container {
    padding: ${sizes.xxSmall} ${sizes.small};
  }
  input.remedy-datepicker {
    font-family: 'Libre Franklin', sans-serif;
    border: none;
    padding: ${sizes.xSmall};
    border-radius: 0;
    height: ${sizes.large};
    &:disabled {
      background: ${colors.gray2};
    }
    &:focus {
      border-radius: 0;
      outline: none;
    }
    &.remedy-datePicker_error {
      border: 1px solid ${colors.yellow2};
      background-color: ${colors.yellow1};
    }
  }
  input.remedy-datepicker,
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    max-width: 16rem;
  }
  .react-datepicker__header {
    background-color: white;
    border-color: ${colors.gray1};
    padding-bottom: ${sizes.xxSmall};
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow {
    display: none;
  }

  .react-datepicker__day--outside-month {
    color: ${colors.gray4};
  }

  div.react-datepicker__day.react-datepicker__day--in-selecting-range,
  div.react-datepicker__day.react-date-picker__day--in-range,
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-range.react-datepicker__day--range-start:not(.react-datepicker__day--selecting-range-start),
  .react-datepicker__day--in-range.react-datepicker__day--range-end:not(.react-datepicker__day--selecting-range-end) {
    border-radius: 0;
    background-color: ${colors.purple1};
    color: black;
  }

  div.react-datepicker__day.react-datepicker__day--selecting-range-end,
  div.react-datepicker__day.react-datepicker__day--selecting-range-start,
  div.react-datepicker__day.react-datepicker__day--keyboard-selected,
  div.react-datepicker__day.react-datepicker__day--selected {
    background-color: ${colors.cta};
    border-color: ${colors.cta};
    border-radius: 50%;
    color: white;
    &:hover {
      color: white;
    }
  }

  div.react-datepicker__day.react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range),
  .react-datepicker__day--range-start:not(.react-datepicker__day--selecting-range-start) {
    background-color: white;
    color: black;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    line-height: 3.5rem;
    width: 3.5rem;
    margin: 0;
  }

  .react-datepicker__day-name {
    color: ${colors.gray4};
  }

  .react-datepicker__day {
    &:hover {
      border-radius: 50%;
    }
  }

  .react-datepicker {
    border: none;
  }

  .react-datepicker__day--disabled {
    color: ${colors.gray4};
    background-color: ${colors.gray1};
    &: hover {
      background-color: ${colors.gray1};
      border-radius: 0;
    }
  }

  .react-datepicker__navigation-icon {
    top: ${sizes.xSmall};
    &:before {
      border-color: ${colors.gray4};
    }
  }
  .react-datepicker__current-month {
    display: none;
  }
  .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown {
    background-color: white;
    box-shadow: ${boxShadow};
    font-weight: normal;
  }
  .react-datepicker__year-dropdown-container--scroll {
    margin: 0 ${sizes.xSmall} ${sizes.xSmall} ${sizes.xxSmall};
  }
  .react-datepicker__header__dropdown {
    font-weight: normal;
    font-size: ${fontSize.standard};
  }
  .react-datepicker-popper[data-placement^='top'],
  .react-datepicker-popper[data-placement^='bottom'] {
    padding-top: 0px;
    z-index: ${zIndices.modalDropdown};
  }
  .react-datepicker__header--time {
    display: none;
  }
  li.react-datepicker__time-list-item {
    display: flex;
    align-items: center;
  }
`;

const Required = styled(StandardSemiBoldTypography)`
  color: ${colors.red2};
`;

const StyledIconButton = styled(Button)`
  background-color: ${colors.gray2};
  padding: 0 ${sizes.xxSmall};
  border-radius: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  &:hover {
    background-color: ${colors.gray2};
  }
  &:disabled {
    background: ${colors.gray2};
    cursor: not-allowed;
  }
`;

const StyledHelperButton = styled(Button)`
  padding: 0 ${sizes.xxSmall};
  min-width: ${sizes.medium};
  &:disabled {
    background: ${colors.gray2};
    cursor: not-allowed;
  }
`;

const StyledErrorMessage = styled(SmallTypography)`
  display: block;
  min-height: ${sizes.small};
  margin: ${sizes.xxSmall} 0;
  color: ${colors.yellow3};
  svg {
    margin-right: ${sizes.xxSmall};
  }
`;

const StyledLabelTypography = styled(LabelTypography)`
  margin-bottom: ${sizes.xSmall};
  display: inline-block;
`;

const StyledDateContainer = styled.div`
  display: inline-flex;
  border: 1px solid ${colors.gray2};
  border-radius: ${sizes.xxSmall};
  &.disabled {
    background-color: ${colors.gray2};
  }
`;

//150 years young
const defaultMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 150));

const RemedyDatePicker: React.FunctionComponent<Props> = ({
  value,
  onChange,
  onBlur,
  disabled,
  maxDate,
  minDate = defaultMinDate,
  minTime = defaultMinTime,
  maxTime = defaultMaxTime,
  id = 'remedy-datePicker',
  externalError,
  externalErrorText = 'Invalid Date',
  labelText,
  required,
  timePickerOnly = false,
  ...rest
}) => {
  const pickerId = `remedy${timePickerOnly ? 'Time' : 'Date'}Picker${id}`;

  const handleClear = (event: MouseEvent) => {
    event.preventDefault();
    onChange(null);
  };

  const handleOpenPicker = (event: MouseEvent) => {
    event.preventDefault();
    document.getElementById(`${pickerId}`)?.focus();
  };

  const renderDatePicker = () => {
    return (
      <DatePicker
        selected={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        maxDate={maxDate}
        minDate={minDate}
        id={pickerId}
        showPopperArrow={false}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
        className={`remedy-datepicker ${externalError && 'remedy-datePicker_error'}`}
        placeholderText="MM/DD/YYYY"
        dateFormat="MM/dd/yyyy"
        portalId={`${id}Portal`}
        customInput={
          <MaskedInput
            pipe={autoCorrectedDatePipe}
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            keepCharPositions={true}
            guide={true}
          />
        }
        {...rest}
      />
    );
  };

  const renderTimePicker = () => {
    return (
      <DatePicker
        selected={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        id={pickerId}
        showPopperArrow={false}
        dropdownMode="select"
        className={`remedy-datepicker ${externalError && 'remedy-datePicker_error'}`}
        placeholderText="HH:MM AA"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        dateFormat="hh:mm aa"
        minTime={minTime}
        maxTime={maxTime}
        customInput={
          <MaskedInput
            pipe={autoCorrectedTimePipe}
            mask={[/\d/, /\d/, ':', /[0-5]/, /\d/, ' ', /(A|P)/i, /(M)/i]}
            keepCharPositions={true}
            guide={true}
          />
        }
        {...rest}
      />
    );
  };

  return (
    <div>
      <Global styles={RemedyStyles} />
      <div id={`${id}Portal`} />
      {labelText && (
        <StyledLabelTypography className={disabled ? 'disabled' : ''} htmlFor={pickerId}>
          {required === 'required' && <Required>* </Required>}
          {labelText} {required === 'optional' && <SmallTypography className="disabled"> optional </SmallTypography>}
        </StyledLabelTypography>
      )}
      <br />
      <StyledDateContainer className={disabled ? 'disabled' : ''}>
        <StyledIconButton
          aria-label="Open calendar"
          styleType={StyleType.TERTIARY}
          disabled={disabled}
          onClick={handleOpenPicker}>
          <Icon iconClass={timePickerOnly ? 'clock' : 'calendar-day'} weight="far" color={colors.gray4} iconSize="lg" />
        </StyledIconButton>
        {timePickerOnly ? renderTimePicker() : renderDatePicker()}
        <StyledHelperButton
          aria-label="Clear previous selection"
          styleType={StyleType.TERTIARY}
          onClick={value ? handleClear : handleOpenPicker}
          disabled={disabled}>
          <Icon
            iconClass={value ? 'times' : 'angle-down'}
            weight="fal"
            color={disabled ? colors.gray2 : colors.gray4}
            iconSize="lg"
          />
        </StyledHelperButton>
      </StyledDateContainer>
      <StyledErrorMessage>
        {externalError && (
          <Fragment>
            <Icon iconClass="exclamation-triangle" color={colors.yellow2} iconSize="lg" weight="fas" />
            {externalErrorText}
          </Fragment>
        )}
      </StyledErrorMessage>
    </div>
  );
};

export default RemedyDatePicker;
