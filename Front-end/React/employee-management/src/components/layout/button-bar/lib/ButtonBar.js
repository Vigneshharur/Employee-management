var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../theme/lib/index';
import ButtonBarButton from './ButtonBarButton';
var ButtonBarContainer = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  label: button-bar-container;\n  border: 0.1rem solid ", ";\n  border-radius: 0.2rem;\n  padding: 0;\n  display: inline-block;\n  list-style-type: none;\n  li {\n    float: left;\n    &:last-child {\n      button {\n        border-right: none;\n      }\n    }\n  }\n"], ["\n  label: button-bar-container;\n  border: 0.1rem solid ", ";\n  border-radius: 0.2rem;\n  padding: 0;\n  display: inline-block;\n  list-style-type: none;\n  li {\n    float: left;\n    &:last-child {\n      button {\n        border-right: none;\n      }\n    }\n  }\n"])), colors.purple2);
var ButtonBar = function (_a) {
    var buttonItems = _a.buttonItems, onClick = _a.onClick, className = _a.className;
    return (React.createElement(ButtonBarContainer, { className: className }, buttonItems.map(function (item, index) { return (React.createElement("li", { key: index },
        React.createElement(ButtonBarButton, { text: item.name, key: index, onClick: function () { return onClick(item); }, selected: item.selected, disabled: item.disabled }))); })));
};
export default ButtonBar;
var templateObject_1;
//# sourceMappingURL=ButtonBar.js.map