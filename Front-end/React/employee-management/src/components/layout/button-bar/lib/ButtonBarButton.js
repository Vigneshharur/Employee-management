var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes } from '../../theme/lib/index';
import { StandardSemiBoldTypography } from '../../typography/lib/index';
var ButtonElement = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: ", ";\n  background-color: ", ";\n  outline: none;\n  border: none;\n  user-select: none;\n  padding: ", " ", ";\n  border-right: 0.1rem solid ", ";\n  color: ", ";\n  label: button-bar-button;\n  &.hovering {\n    &:not([disabled]) {\n      ", "\n    }\n  }\n  &:disabled {\n    cursor: default;\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    & span {\n      color: ", ";\n    }\n  }\n"], ["\n  cursor: ",
    ";\n  background-color: ",
    ";\n  outline: none;\n  border: none;\n  user-select: none;\n  padding: ", " ", ";\n  border-right: 0.1rem solid ", ";\n  color: ", ";\n  label: button-bar-button;\n  &.hovering {\n    &:not([disabled]) {\n      ",
    "\n    }\n  }\n  &:disabled {\n    cursor: default;\n    background-color: ", ";\n    border: ", ";\n    color: ", ";\n    & span {\n      color: ", ";\n    }\n  }\n"])), function (props) {
    if (props.selected) {
        return 'default';
    }
    return 'pointer';
}, function (props) {
    if (props.selected) {
        return colors.purple1;
    }
    return 'transparent';
}, sizes.xSmall, sizes.small, colors.purple2, colors.cta, function (props) {
    if (!props.selected) {
        return "\n          background-color: " + colors.cta + ";\n          color: " + colors.white + ";\n          ";
    }
}, colors.gray3, colors.gray4, colors.white, colors.white);
var ButtonBarButton = function (_a) {
    var text = _a.text, selected = _a.selected, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onClick = _a.onClick;
    var _c = useState(false), hovering = _c[0], setHovering = _c[1];
    var handleMouseEnter = function () { return setHovering(true); };
    var handleMouseLeave = function () { return setHovering(false); };
    var handleClick = function () {
        setHovering(false);
        if (!selected) {
            onClick();
        }
    };
    return (React.createElement(ButtonElement, { selected: selected, disabled: disabled, onClick: handleClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, className: hovering ? 'hovering' : '' },
        React.createElement(StandardSemiBoldTypography, { color: colors.cta, className: hovering && !selected ? 'reverse' : '' }, text)));
};
export default ButtonBarButton;
var templateObject_1;
//# sourceMappingURL=ButtonBarButton.js.map