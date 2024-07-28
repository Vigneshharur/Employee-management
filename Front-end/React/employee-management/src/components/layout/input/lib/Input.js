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
import React, { useEffect, useRef } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes, fontSize } from '../../theme/lib/';
import { LabelTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib/';
import Icon from '../../icon/lib/';
var StyledInput = styled('input')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  font-size: ", ";\n  padding: 0 ", ";\n  margin: ", " ", " 0 0;\n  height: ", ";\n  border-radius: 0;\n  border: 0.1rem solid ", ";\n  display: block;\n  &:focus {\n    border: 0.1rem solid ", ";\n    outline: none;\n  }\n  &:disabled {\n    background: ", ";\n  }\n  &::placeholder {\n    color: ", ";\n  }\n  &.inputError {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"], ["\n  width: 100%;\n  font-size: ", ";\n  padding: 0 ", ";\n  margin: ", " ", " 0 0;\n  height: ", ";\n  border-radius: 0;\n  border: 0.1rem solid ", ";\n  display: block;\n  &:focus {\n    border: 0.1rem solid ", ";\n    outline: none;\n  }\n  &:disabled {\n    background: ", ";\n  }\n  &::placeholder {\n    color: ", ";\n  }\n  &.inputError {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"])), fontSize.standard, sizes.xSmall, sizes.xxSmall, sizes.small, sizes.large, colors.gray2, colors.purple3, colors.gray2, colors.gray4, colors.yellow1, colors.yellow2);
var Required = styled(StandardSemiBoldTypography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), colors.red2);
var ErrorMessage = styled(SmallTypography)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  visibility: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    visibility: ", ";\n    margin-right: ", ";\n  }\n"], ["\n  display: block;\n  visibility: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    visibility: ", ";\n    margin-right: ", ";\n  }\n"])), function (_a) {
    var error = _a.error;
    return (error ? 'visible' : 'hidden');
}, sizes.xxSmall, colors.yellow3, function (_a) {
    var error = _a.error;
    return (error ? 'visible' : 'hidden');
}, sizes.xxSmall);
var Input = React.forwardRef(function (_a, forwardedRef) {
    var onBlur = _a.onBlur, onChange = _a.onChange, value = _a.value, placeholder = _a.placeholder, _b = _a.id, id = _b === void 0 ? "input_" + new Date().getTime() : _b, labelText = _a.labelText, className = _a.className, _c = _a.error, error = _c === void 0 ? false : _c, _d = _a.errorMessage, errorMessage = _d === void 0 ? '' : _d, inputTestId = _a.inputTestId, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.required, required = _f === void 0 ? '' : _f, _g = _a.autoFocus, autoFocus = _g === void 0 ? false : _g, args = __rest(_a, ["onBlur", "onChange", "value", "placeholder", "id", "labelText", "className", "error", "errorMessage", "inputTestId", "isDisabled", "required", "autoFocus"]);
    var errorClass = error ? 'inputError' : '';
    var componentRef = useRef(null);
    useEffect(function () {
        var _a;
        if (autoFocus && componentRef) {
            (_a = componentRef === null || componentRef === void 0 ? void 0 : componentRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autoFocus, componentRef]);
    return (React.createElement("div", { className: className },
        React.createElement(LabelTypography, { className: isDisabled ? 'disabled' : '', htmlFor: id },
            required === 'required' && React.createElement(Required, null, "* "),
            labelText,
            " ",
            required === 'optional' && React.createElement(SmallTypography, { className: "disabled" }, " optional ")),
        React.createElement(StyledInput, __assign({ className: errorClass, type: "text", onBlur: onBlur, value: value, onChange: onChange, placeholder: placeholder, id: id, name: id, ref: forwardedRef || componentRef, "data-testid": inputTestId, disabled: isDisabled }, args)),
        React.createElement(ErrorMessage, { error: error },
            React.createElement(Icon, { iconClass: "exclamation-triangle", color: colors.yellow2, iconSize: "lg", weight: "fas" }),
            errorMessage)));
});
export default Input;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Input.js.map