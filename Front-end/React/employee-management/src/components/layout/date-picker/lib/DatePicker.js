var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Fragment } from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import Icon from '../../icon/lib';
import Button, { StyleType } from '../../button/lib';
import { boxShadow, colors, fontSize, sizes, zIndices } from '../../theme/lib';
import { LabelTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib';
var defaultMinTime = new Date();
defaultMinTime.setHours(0);
defaultMinTime.setMinutes(0);
defaultMinTime.setMilliseconds(0);
var defaultMaxTime = new Date();
defaultMaxTime.setHours(23);
defaultMaxTime.setMinutes(30);
defaultMaxTime.setMilliseconds(0);
var autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy');
var autoCorrectedTimePipe = function (userInput) {
    var needsLeadingZero = new RegExp(/^[2-9]/).test(userInput);
    if (needsLeadingZero) {
        var valueArray = userInput.split('');
        valueArray[1] = valueArray[0];
        valueArray[0] = '0';
        var value = valueArray.join('');
        return { value: value, indexesOfPipedChars: [0] };
    }
    return userInput;
};
var RemedyStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  select {\n    border: none;\n    &: focus {\n      border: none;\n      outline: none;\n    }\n  }\n  .react-datepicker__time-container,\n  .react-datepicker__month-container {\n    font-family: 'Libre Franklin', sans-serif;\n    font-size: ", ";\n    font-weight: bold;\n    border: none;\n    box-shadow: ", ";\n    border-radius: 0.3rem;\n  }\n  .react-datepicker__month-container {\n    padding: ", " ", ";\n  }\n  input.remedy-datepicker {\n    font-family: 'Libre Franklin', sans-serif;\n    border: none;\n    padding: ", ";\n    border-radius: 0;\n    height: ", ";\n    &:disabled {\n      background: ", ";\n    }\n    &:focus {\n      border-radius: 0;\n      outline: none;\n    }\n    &.remedy-datePicker_error {\n      border: 1px solid ", ";\n      background-color: ", ";\n    }\n  }\n  input.remedy-datepicker,\n  .react-datepicker-wrapper,\n  .react-datepicker__input-container {\n    max-width: 16rem;\n  }\n  .react-datepicker__header {\n    background-color: white;\n    border-color: ", ";\n    padding-bottom: ", ";\n  }\n\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow {\n    display: none;\n  }\n\n  .react-datepicker__day--outside-month {\n    color: ", ";\n  }\n\n  div.react-datepicker__day.react-datepicker__day--in-selecting-range,\n  div.react-datepicker__day.react-date-picker__day--in-range,\n  .react-datepicker__day--in-range,\n  .react-datepicker__day--in-range.react-datepicker__day--range-start:not(.react-datepicker__day--selecting-range-start),\n  .react-datepicker__day--in-range.react-datepicker__day--range-end:not(.react-datepicker__day--selecting-range-end) {\n    border-radius: 0;\n    background-color: ", ";\n    color: black;\n  }\n\n  div.react-datepicker__day.react-datepicker__day--selecting-range-end,\n  div.react-datepicker__day.react-datepicker__day--selecting-range-start,\n  div.react-datepicker__day.react-datepicker__day--keyboard-selected,\n  div.react-datepicker__day.react-datepicker__day--selected {\n    background-color: ", ";\n    border-color: ", ";\n    border-radius: 50%;\n    color: white;\n    &:hover {\n      color: white;\n    }\n  }\n\n  div.react-datepicker__day.react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range),\n  .react-datepicker__day--range-start:not(.react-datepicker__day--selecting-range-start) {\n    background-color: white;\n    color: black;\n  }\n\n  .react-datepicker__day-name,\n  .react-datepicker__day {\n    line-height: 3.5rem;\n    width: 3.5rem;\n    margin: 0;\n  }\n\n  .react-datepicker__day-name {\n    color: ", ";\n  }\n\n  .react-datepicker__day {\n    &:hover {\n      border-radius: 50%;\n    }\n  }\n\n  .react-datepicker {\n    border: none;\n  }\n\n  .react-datepicker__day--disabled {\n    color: ", ";\n    background-color: ", ";\n    &: hover {\n      background-color: ", ";\n      border-radius: 0;\n    }\n  }\n\n  .react-datepicker__navigation-icon {\n    top: ", ";\n    &:before {\n      border-color: ", ";\n    }\n  }\n  .react-datepicker__current-month {\n    display: none;\n  }\n  .react-datepicker__month-dropdown,\n  .react-datepicker__year-dropdown {\n    background-color: white;\n    box-shadow: ", ";\n    font-weight: normal;\n  }\n  .react-datepicker__year-dropdown-container--scroll {\n    margin: 0 ", " ", " ", ";\n  }\n  .react-datepicker__header__dropdown {\n    font-weight: normal;\n    font-size: ", ";\n  }\n  .react-datepicker-popper[data-placement^='top'],\n  .react-datepicker-popper[data-placement^='bottom'] {\n    padding-top: 0px;\n    z-index: ", ";\n  }\n  .react-datepicker__header--time {\n    display: none;\n  }\n  li.react-datepicker__time-list-item {\n    display: flex;\n    align-items: center;\n  }\n"], ["\n  select {\n    border: none;\n    &: focus {\n      border: none;\n      outline: none;\n    }\n  }\n  .react-datepicker__time-container,\n  .react-datepicker__month-container {\n    font-family: 'Libre Franklin', sans-serif;\n    font-size: ", ";\n    font-weight: bold;\n    border: none;\n    box-shadow: ", ";\n    border-radius: 0.3rem;\n  }\n  .react-datepicker__month-container {\n    padding: ", " ", ";\n  }\n  input.remedy-datepicker {\n    font-family: 'Libre Franklin', sans-serif;\n    border: none;\n    padding: ", ";\n    border-radius: 0;\n    height: ", ";\n    &:disabled {\n      background: ", ";\n    }\n    &:focus {\n      border-radius: 0;\n      outline: none;\n    }\n    &.remedy-datePicker_error {\n      border: 1px solid ", ";\n      background-color: ", ";\n    }\n  }\n  input.remedy-datepicker,\n  .react-datepicker-wrapper,\n  .react-datepicker__input-container {\n    max-width: 16rem;\n  }\n  .react-datepicker__header {\n    background-color: white;\n    border-color: ", ";\n    padding-bottom: ", ";\n  }\n\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow {\n    display: none;\n  }\n\n  .react-datepicker__day--outside-month {\n    color: ", ";\n  }\n\n  div.react-datepicker__day.react-datepicker__day--in-selecting-range,\n  div.react-datepicker__day.react-date-picker__day--in-range,\n  .react-datepicker__day--in-range,\n  .react-datepicker__day--in-range.react-datepicker__day--range-start:not(.react-datepicker__day--selecting-range-start),\n  .react-datepicker__day--in-range.react-datepicker__day--range-end:not(.react-datepicker__day--selecting-range-end) {\n    border-radius: 0;\n    background-color: ", ";\n    color: black;\n  }\n\n  div.react-datepicker__day.react-datepicker__day--selecting-range-end,\n  div.react-datepicker__day.react-datepicker__day--selecting-range-start,\n  div.react-datepicker__day.react-datepicker__day--keyboard-selected,\n  div.react-datepicker__day.react-datepicker__day--selected {\n    background-color: ", ";\n    border-color: ", ";\n    border-radius: 50%;\n    color: white;\n    &:hover {\n      color: white;\n    }\n  }\n\n  div.react-datepicker__day.react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range),\n  .react-datepicker__day--range-start:not(.react-datepicker__day--selecting-range-start) {\n    background-color: white;\n    color: black;\n  }\n\n  .react-datepicker__day-name,\n  .react-datepicker__day {\n    line-height: 3.5rem;\n    width: 3.5rem;\n    margin: 0;\n  }\n\n  .react-datepicker__day-name {\n    color: ", ";\n  }\n\n  .react-datepicker__day {\n    &:hover {\n      border-radius: 50%;\n    }\n  }\n\n  .react-datepicker {\n    border: none;\n  }\n\n  .react-datepicker__day--disabled {\n    color: ", ";\n    background-color: ", ";\n    &: hover {\n      background-color: ", ";\n      border-radius: 0;\n    }\n  }\n\n  .react-datepicker__navigation-icon {\n    top: ", ";\n    &:before {\n      border-color: ", ";\n    }\n  }\n  .react-datepicker__current-month {\n    display: none;\n  }\n  .react-datepicker__month-dropdown,\n  .react-datepicker__year-dropdown {\n    background-color: white;\n    box-shadow: ", ";\n    font-weight: normal;\n  }\n  .react-datepicker__year-dropdown-container--scroll {\n    margin: 0 ", " ", " ", ";\n  }\n  .react-datepicker__header__dropdown {\n    font-weight: normal;\n    font-size: ", ";\n  }\n  .react-datepicker-popper[data-placement^='top'],\n  .react-datepicker-popper[data-placement^='bottom'] {\n    padding-top: 0px;\n    z-index: ", ";\n  }\n  .react-datepicker__header--time {\n    display: none;\n  }\n  li.react-datepicker__time-list-item {\n    display: flex;\n    align-items: center;\n  }\n"])), fontSize.small, boxShadow, sizes.xxSmall, sizes.small, sizes.xSmall, sizes.large, colors.gray2, colors.yellow2, colors.yellow1, colors.gray1, sizes.xxSmall, colors.gray4, colors.purple1, colors.cta, colors.cta, colors.gray4, colors.gray4, colors.gray1, colors.gray1, sizes.xSmall, colors.gray4, boxShadow, sizes.xSmall, sizes.xSmall, sizes.xxSmall, fontSize.standard, zIndices.modalDropdown);
var Required = styled(StandardSemiBoldTypography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), colors.red2);
var StyledIconButton = styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 0 ", ";\n  border-radius: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  &:hover {\n    background-color: ", ";\n  }\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  background-color: ", ";\n  padding: 0 ", ";\n  border-radius: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  &:hover {\n    background-color: ", ";\n  }\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed;\n  }\n"])), colors.gray2, sizes.xxSmall, colors.gray2, colors.gray2);
var StyledHelperButton = styled(Button)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 0 ", ";\n  min-width: ", ";\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  padding: 0 ", ";\n  min-width: ", ";\n  &:disabled {\n    background: ", ";\n    cursor: not-allowed;\n  }\n"])), sizes.xxSmall, sizes.medium, colors.gray2);
var StyledErrorMessage = styled(SmallTypography)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  min-height: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    margin-right: ", ";\n  }\n"], ["\n  display: block;\n  min-height: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    margin-right: ", ";\n  }\n"])), sizes.small, sizes.xxSmall, colors.yellow3, sizes.xxSmall);
var StyledLabelTypography = styled(LabelTypography)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: ", ";\n  display: inline-block;\n"], ["\n  margin-bottom: ", ";\n  display: inline-block;\n"])), sizes.xSmall);
var StyledDateContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: inline-flex;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  &.disabled {\n    background-color: ", ";\n  }\n"], ["\n  display: inline-flex;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  &.disabled {\n    background-color: ", ";\n  }\n"])), colors.gray2, sizes.xxSmall, colors.gray2);
//150 years young
var defaultMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 150));
var RemedyDatePicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, onBlur = _a.onBlur, disabled = _a.disabled, maxDate = _a.maxDate, _b = _a.minDate, minDate = _b === void 0 ? defaultMinDate : _b, _c = _a.minTime, minTime = _c === void 0 ? defaultMinTime : _c, _d = _a.maxTime, maxTime = _d === void 0 ? defaultMaxTime : _d, _e = _a.id, id = _e === void 0 ? 'remedy-datePicker' : _e, externalError = _a.externalError, _f = _a.externalErrorText, externalErrorText = _f === void 0 ? 'Invalid Date' : _f, labelText = _a.labelText, required = _a.required, _g = _a.timePickerOnly, timePickerOnly = _g === void 0 ? false : _g, rest = __rest(_a, ["value", "onChange", "onBlur", "disabled", "maxDate", "minDate", "minTime", "maxTime", "id", "externalError", "externalErrorText", "labelText", "required", "timePickerOnly"]);
    var pickerId = "remedy" + (timePickerOnly ? 'Time' : 'Date') + "Picker" + id;
    var handleClear = function (event) {
        event.preventDefault();
        onChange(null);
    };
    var handleOpenPicker = function (event) {
        var _a;
        event.preventDefault();
        (_a = document.getElementById("" + pickerId)) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var renderDatePicker = function () {
        return (React.createElement(DatePicker, __assign({ selected: value, onChange: onChange, onBlur: onBlur, disabled: disabled, maxDate: maxDate, minDate: minDate, id: pickerId, showPopperArrow: false, showMonthDropdown: true, showYearDropdown: true, dropdownMode: "select", formatWeekDay: function (nameOfDay) { return nameOfDay.substr(0, 1); }, className: "remedy-datepicker " + (externalError && 'remedy-datePicker_error'), placeholderText: "MM/DD/YYYY", dateFormat: "MM/dd/yyyy", portalId: id + "Portal", customInput: React.createElement(MaskedInput, { pipe: autoCorrectedDatePipe, mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/], keepCharPositions: true, guide: true }) }, rest)));
    };
    var renderTimePicker = function () {
        return (React.createElement(DatePicker, __assign({ selected: value, onChange: onChange, onBlur: onBlur, disabled: disabled, id: pickerId, showPopperArrow: false, dropdownMode: "select", className: "remedy-datepicker " + (externalError && 'remedy-datePicker_error'), placeholderText: "HH:MM AA", showTimeSelect: true, showTimeSelectOnly: true, timeIntervals: 30, dateFormat: "hh:mm aa", minTime: minTime, maxTime: maxTime, customInput: React.createElement(MaskedInput, { pipe: autoCorrectedTimePipe, mask: [/\d/, /\d/, ':', /[0-5]/, /\d/, ' ', /(A|P)/i, /(M)/i], keepCharPositions: true, guide: true }) }, rest)));
    };
    return (React.createElement("div", null,
        React.createElement(Global, { styles: RemedyStyles }),
        React.createElement("div", { id: id + "Portal" }),
        labelText && (React.createElement(StyledLabelTypography, { className: disabled ? 'disabled' : '', htmlFor: pickerId },
            required === 'required' && React.createElement(Required, null, "* "),
            labelText,
            " ",
            required === 'optional' && React.createElement(SmallTypography, { className: "disabled" }, " optional "))),
        React.createElement("br", null),
        React.createElement(StyledDateContainer, { className: disabled ? 'disabled' : '' },
            React.createElement(StyledIconButton, { "aria-label": "Open calendar", styleType: StyleType.TERTIARY, disabled: disabled, onClick: handleOpenPicker },
                React.createElement(Icon, { iconClass: timePickerOnly ? 'clock' : 'calendar-day', weight: "far", color: colors.gray4, iconSize: "lg" })),
            timePickerOnly ? renderTimePicker() : renderDatePicker(),
            React.createElement(StyledHelperButton, { "aria-label": "Clear previous selection", styleType: StyleType.TERTIARY, onClick: value ? handleClear : handleOpenPicker, disabled: disabled },
                React.createElement(Icon, { iconClass: value ? 'times' : 'angle-down', weight: "fal", color: disabled ? colors.gray2 : colors.gray4, iconSize: "lg" }))),
        React.createElement(StyledErrorMessage, null, externalError && (React.createElement(Fragment, null,
            React.createElement(Icon, { iconClass: "exclamation-triangle", color: colors.yellow2, iconSize: "lg", weight: "fas" }),
            externalErrorText)))));
};
export default RemedyDatePicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=DatePicker.js.map