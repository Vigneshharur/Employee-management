var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Children } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes } from '../../theme/lib/index';
var TabsBar = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  padding: ", " 0;\n  border-bottom: 1px solid ", ";\n  & > button {\n    margin-right: ", ";\n  }\n"], ["\n  display: flex;\n  padding: ", " 0;\n  border-bottom: 1px solid ", ";\n  & > button {\n    margin-right: ", ";\n  }\n"])), sizes.xSmall, colors.gray2, sizes.xSmall);
var Tabs = function (_a) {
    var disabled = _a.disabled, selectedTab = _a.value, onChange = _a.onChange, children = _a.children, className = _a.className;
    var handleControlClick = function (value) { return function () {
        onChange(value);
    }; };
    var tabs = Children.map(children, function (child) { return child; }).map(function (child, index) {
        return React.cloneElement(child, {
            onClick: handleControlClick(child.props.value || index),
            active: child.props.active || index === selectedTab,
            value: child.props.value || index,
            disabled: disabled || child.props.disabled
        });
    });
    return React.createElement(TabsBar, { className: className }, tabs);
};
export default Tabs;
var templateObject_1;
//# sourceMappingURL=Tabs.js.map