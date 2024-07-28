var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';
var SmallTypography = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  font-size: 1.3rem;\n  line-height: 1.8rem;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: ", ";\n\n  &.reverse {\n    color: ", ";\n  }\n  &.disabled {\n    color: ", ";\n  }\n"], ["\n  ", ";\n  font-size: 1.3rem;\n  line-height: 1.8rem;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  color: ", ";\n\n  &.reverse {\n    color: ", ";\n  }\n  &.disabled {\n    color: ", ";\n  }\n"])), defaultFont, function (_a) {
    var color = _a.color;
    return (color ? color : colors.gray5);
}, colors.gray3, colors.gray4);
export default SmallTypography;
var templateObject_1;
//# sourceMappingURL=SmallTypography.js.map