var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { SmallTypography, StandardTypography } from '../../typography/lib/index';
import { colors, sizes } from '../../theme/lib/index';
var StyledTable = styled('table')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n  thead {\n    background-color: ", ";\n  }\n  td {\n    padding: ", " 0;\n  }\n  tbody tr {\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  thead {\n    background-color: ", ";\n  }\n  td {\n    padding: ", " 0;\n  }\n  tbody tr {\n    border-bottom: 1px solid ", ";\n  }\n"])), colors.gray1, sizes.xSmall, colors.gray2);
var getHeaders = function (header) {
    return (React.createElement("tr", null, header.map(function (item, index) { return (React.createElement("td", { key: index },
        React.createElement(SmallTypography, null, item))); })));
};
var getBody = function (data) {
    return (React.createElement(React.Fragment, null, data.map(function (trItem, index) { return (React.createElement("tr", { key: index }, Object.keys(trItem).map(function (objectKey, index) { return (React.createElement("td", { key: index },
        React.createElement(StandardTypography, null, trItem[objectKey]))); }))); })));
};
var SimpleTable = function (_a) {
    var data = _a.data, header = _a.header;
    return (React.createElement(StyledTable, null,
        header ? React.createElement("thead", null, getHeaders(header)) : null,
        React.createElement("tbody", null, getBody(data))));
};
export default SimpleTable;
var templateObject_1;
//# sourceMappingURL=SimpleTable.js.map