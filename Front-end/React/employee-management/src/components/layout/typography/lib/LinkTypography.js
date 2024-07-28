var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors, fontSize } from '../../theme/lib/index';
var LinkTypography = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n  line-height: 2.1rem;\n  letter-spacing: 0.02rem;\n  font-weight: 600;\n  color: ", ";\n  cursor: pointer;\n\n  &.reverse {\n    color: ", ";\n  }\n  &.disabled {\n    color: ", ";\n  }\n"], ["\n  ", ";\n  font-size: ", ";\n  line-height: 2.1rem;\n  letter-spacing: 0.02rem;\n  font-weight: 600;\n  color: ", ";\n  cursor: pointer;\n\n  &.reverse {\n    color: ", ";\n  }\n  &.disabled {\n    color: ", ";\n  }\n"])), defaultFont, fontSize.standard, colors.cta, colors.white, colors.gray4);
export default LinkTypography;
var templateObject_1;
//# sourceMappingURL=LinkTypography.js.map