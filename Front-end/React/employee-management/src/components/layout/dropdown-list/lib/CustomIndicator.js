var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme/lib/';
import Icon from '../../icon/lib/';
var DrawerSvgSpan = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return (props.isOpen ? 'transform: rotate(0.5turn)' : 'transform: rotate(0turn)'); });
var CustomIndicator = function (_a) {
    var menuIsOpen = _a.selectProps.menuIsOpen;
    return (React.createElement(DrawerSvgSpan, { isOpen: !!menuIsOpen },
        React.createElement(Icon, { iconClass: "angle-down", weight: "far", color: colors.cta, iconSize: "2x" })));
};
export default CustomIndicator;
var templateObject_1;
//# sourceMappingURL=CustomIndicator.js.map