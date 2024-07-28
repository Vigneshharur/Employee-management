var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { SmallTypography, HeadingTypography } from '../../typography/lib/';
var StyledContainer = styled('span')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-grid;\n  ", " {\n    margin: 0;\n  }\n"], ["\n  display: inline-grid;\n  ", " {\n    margin: 0;\n  }\n"])), HeadingTypography);
var Label = SmallTypography.withComponent('label');
var LabeledText = function (_a) {
    var value = _a.value, _b = _a.id, id = _b === void 0 ? "labeledText-" + new Date().getTime() : _b, label = _a.label, className = _a.className, testId = _a.testId;
    return (React.createElement(StyledContainer, { className: className, id: id, "data-testid": testId },
        React.createElement(Label, null, label),
        React.createElement(HeadingTypography, null, value)));
};
export default LabeledText;
var templateObject_1;
//# sourceMappingURL=LabeledText.js.map