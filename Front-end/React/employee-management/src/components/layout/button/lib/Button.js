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
var _a;
import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, fontSize, fontFamily, sizes } from '../../theme/lib/';
import { StyleType } from './StyleType';
import Icon from '../../icon';
var StyledButton = styled('button')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  color: ", ";\n  padding: ", " 1.4rem;\n  border-radius: 8px;\n  user-select: none;\n  border: ", ";\n  outline: none;\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border: ", ";\n\n    .iconButton {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    background-color: ", ";\n    color: ", ";\n    border-color: ", ";\n    .iconButton {\n      border-color: ", ";\n    }\n  }\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
    ";\n  color: ",
    ";\n  padding: ", " 1.4rem;\n  border-radius: 8px;\n  user-select: none;\n  border: ",
    ";\n  outline: none;\n  &:hover {\n    background-color: ",
    ";\n    color: ",
    ";\n    border: ",
    ";\n\n    .iconButton {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    background-color: ",
    ";\n    color: ",
    ";\n    border-color: ",
    ";\n    .iconButton {\n      border-color: ", ";\n    }\n  }\n"])), fontFamily.default, fontSize.standard, function (props) {
    switch (props.styleType) {
        case StyleType.SECONDARY:
            return colors.white;
        case StyleType.TERTIARY:
            return 'transparent';
        case StyleType.PRIMARY:
        default:
            return colors.cta;
    }
}, function (props) {
    switch (props.styleType) {
        case StyleType.SECONDARY:
        case StyleType.TERTIARY:
            return colors.cta;
        case StyleType.PRIMARY:
        default:
            return colors.white;
    }
}, sizes.xSmall, function (props) {
    switch (props.styleType) {
        case StyleType.SECONDARY:
            return "0.1rem solid " + colors.cta;
        case StyleType.TERTIARY:
        case StyleType.PRIMARY:
        default:
            return 'none';
    }
}, function (props) {
    switch (props.styleType) {
        case StyleType.PRIMARY:
            return colors.navy;
        case StyleType.SECONDARY:
            return colors.white;
        case StyleType.TERTIARY:
            return 'transparent';
        default:
            return colors.cta;
    }
}, function (props) {
    switch (props.styleType) {
        case StyleType.SECONDARY:
        case StyleType.TERTIARY:
            return colors.navy;
        case StyleType.PRIMARY:
            return colors.white;
    }
}, function (props) {
    switch (props.styleType) {
        case StyleType.SECONDARY:
            return "0.1rem solid " + colors.navy;
        case StyleType.TERTIARY:
        case StyleType.PRIMARY:
        default:
            return 'none';
    }
}, colors.cta, function (props) {
    switch (props.styleType) {
        case StyleType.TERTIARY:
            return 'transparent';
        case StyleType.SECONDARY:
        case StyleType.PRIMARY:
        default:
            return colors.gray1;
    }
}, function (props) {
    switch (props.styleType) {
        case StyleType.TERTIARY:
            return colors.gray3;
        case StyleType.PRIMARY:
        case StyleType.SECONDARY:
        default:
            return colors.gray4;
    }
}, function (props) {
    switch (props.styleType) {
        case StyleType.SECONDARY:
            return colors.gray3;
    }
}, colors.gray2);
var StyledIconContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: ", ";\n  display: flex;\n"], ["\n  margin-right: ", ";\n  display: flex;\n"])), sizes.xSmall);
var buttonOrder = (_a = {},
    _a[StyleType.PRIMARY] = 1,
    _a[StyleType.SECONDARY] = 2,
    _a[StyleType.TERTIARY] = 3,
    _a);
//Array of buttons are received by modal and slide in pane.
//They should be displayed with 1 farthest to the right and 3 to the left
export var sortButtonOrder = function (buttonArray) {
    if (!buttonArray) {
        return [];
    }
    return buttonArray.sort(function (a, b) {
        //Primary button is a default value, so it may not have been passed in
        return buttonOrder[b.props.styleType || StyleType.PRIMARY] - buttonOrder[a.props.styleType || StyleType.PRIMARY];
    });
};
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.styleType, styleType = _b === void 0 ? StyleType.PRIMARY : _b, type = _a.type, disabled = _a.disabled, className = _a.className, id = _a.id, testId = _a.testId, iconClass = _a.iconClass, args = __rest(_a, ["children", "onClick", "styleType", "type", "disabled", "className", "id", "testId", "iconClass"]);
    return (React.createElement(StyledButton, __assign({ styleType: styleType, type: type, onClick: onClick, disabled: disabled, className: className, id: id, "data-testid": testId }, args),
        iconClass && (React.createElement(StyledIconContainer, { className: "iconButton" },
            React.createElement(Icon, { iconClass: iconClass, weight: "far", iconSize: "xs" }))),
        children));
};
export default Button;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Button.js.map