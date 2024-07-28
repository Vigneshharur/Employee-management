var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes, fontSize } from '../../theme/lib/index';
var backgroundColor = function (_a) {
    var active = _a.active, disabled = _a.disabled;
    if (active && disabled) {
        return colors.gray3;
    }
    else if (active) {
        return colors.cta;
    }
    return 'transparent';
};
var color = function (_a) {
    var active = _a.active, disabled = _a.disabled;
    if (active) {
        return colors.white;
    }
    else if (disabled) {
        return colors.gray4;
    }
    return colors.cta;
};
var backgroundColorHover = function (_a) {
    var active = _a.active, disabled = _a.disabled;
    if (active && disabled) {
        return colors.gray3;
    }
    else if (disabled) {
        return colors.white;
    }
    return colors.purple2;
};
var colorHover = function (_a) {
    var active = _a.active, disabled = _a.disabled;
    if (!active && disabled) {
        return colors.gray4;
    }
    return colors.cta;
};
export default styled('button')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) { return "\n    background-color: " + backgroundColor(props) + ";\n    color: " + color(props) + ";\n    padding: " + sizes.xSmall + " " + sizes.small + ";\n    border-radius: " + sizes.small + ";\n    outline: none;\n    border: none;\n    text-transform: uppercase;\n    font-size: " + fontSize.small + ";\n    &:hover {\n      background-color: " + backgroundColorHover(props) + ";\n      color: " + colorHover(props) + ";\n    }\n    &:active {\n      background-color: " + colors.purple3 + ";\n    }\n  "; });
var templateObject_1;
//# sourceMappingURL=Tab.js.map