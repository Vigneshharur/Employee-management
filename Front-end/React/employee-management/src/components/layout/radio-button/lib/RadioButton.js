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
import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../theme/lib/index';
import { StandardTypography } from '../../typography/lib/index';
var Label = StandardTypography.withComponent('label');
var RadioInput = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  position: relative;\n  padding-left: 3.5rem;\n  margin-bottom: 1.2rem;\n  cursor: pointer;\n  user-select: none;\n  label {\n    cursor: pointer;\n    &.disabled {\n      color: ", ";\n      cursor: not-allowed;\n    }\n  }\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  input + span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1.8rem;\n    width: 1.8rem;\n    background-color: ", ";\n    border: 0.1rem solid ", ";\n    border-radius: 50%;\n    cursor: pointer;\n  }\n  input + span:after {\n    content: '';\n    position: absolute;\n    display: none;\n    top: 0.2rem;\n    left: 0.2rem;\n    width: 1.2rem;\n    height: 1.2rem;\n    border-radius: 50%;\n    background: ", ";\n  }\n  input:focus + span {\n    border-width: 0.2rem;\n  }\n  input:focus + span:after {\n    top: 0.1rem;\n    left: 0.1rem;\n  }\n  input:disabled + span {\n    border-color: ", ";\n    background-color: ", ";\n    cursor: not-allowed;\n  }\n  input:checked + span {\n    border-color: ", ";\n  }\n  input:checked + span:after {\n    display: block;\n  }\n  input:checked:disabled + span {\n    border-color: ", ";\n  }\n  input:checked:disabled + span:after {\n    display: block;\n    background: ", ";\n  }\n"], ["\n  display: block;\n  position: relative;\n  padding-left: 3.5rem;\n  margin-bottom: 1.2rem;\n  cursor: pointer;\n  user-select: none;\n  label {\n    cursor: pointer;\n    &.disabled {\n      color: ", ";\n      cursor: not-allowed;\n    }\n  }\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  input + span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1.8rem;\n    width: 1.8rem;\n    background-color: ", ";\n    border: 0.1rem solid ", ";\n    border-radius: 50%;\n    cursor: pointer;\n  }\n  input + span:after {\n    content: '';\n    position: absolute;\n    display: none;\n    top: 0.2rem;\n    left: 0.2rem;\n    width: 1.2rem;\n    height: 1.2rem;\n    border-radius: 50%;\n    background: ", ";\n  }\n  input:focus + span {\n    border-width: 0.2rem;\n  }\n  input:focus + span:after {\n    top: 0.1rem;\n    left: 0.1rem;\n  }\n  input:disabled + span {\n    border-color: ", ";\n    background-color: ", ";\n    cursor: not-allowed;\n  }\n  input:checked + span {\n    border-color: ", ";\n  }\n  input:checked + span:after {\n    display: block;\n  }\n  input:checked:disabled + span {\n    border-color: ", ";\n  }\n  input:checked:disabled + span:after {\n    display: block;\n    background: ", ";\n  }\n"])), colors.gray3, colors.white, colors.gray2, colors.green2, colors.gray2, colors.gray1, colors.green2, colors.gray2, colors.gray2);
var RadioButton = React.forwardRef(function (_a, forwardedRef) {
    var onChange = _a.onChange, disabled = _a.disabled, name = _a.name, checked = _a.checked, label = _a.label, value = _a.value, id = _a.id, className = _a.className, args = __rest(_a, ["onChange", "disabled", "name", "checked", "label", "value", "id", "className"]);
    return (React.createElement(RadioInput, { className: className },
        React.createElement(Label, { htmlFor: id, className: disabled ? 'disabled' : '' },
            label,
            React.createElement("input", __assign({ type: "radio", onChange: onChange, disabled: disabled, name: name, id: id, ref: forwardedRef, value: value, checked: checked, "data-testid": "radiobutton-" + name + "-" + id }, args)),
            React.createElement("span", null))));
});
export default RadioButton;
var templateObject_1;
//# sourceMappingURL=RadioButton.js.map