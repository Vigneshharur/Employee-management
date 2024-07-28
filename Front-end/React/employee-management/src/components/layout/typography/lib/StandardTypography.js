var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors, fontSize } from '../../theme/lib/';
var StandardTypography = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  font-size: ", ";\n  line-height: 2.1rem;\n  letter-spacing: 0.02rem;\n  font-weight: normal;\n  color: ", ";\n\n  &.reverse {\n    color: ", ";\n  }\n\n  &.disabled {\n    color: ", ";\n  }\n"], ["\n  ", ";\n  font-size: ", ";\n  line-height: 2.1rem;\n  letter-spacing: 0.02rem;\n  font-weight: normal;\n  color: ", ";\n\n  &.reverse {\n    color: ", ";\n  }\n\n  &.disabled {\n    color: ", ";\n  }\n"])), defaultFont, fontSize.standard, function (_a) {
    var color = _a.color;
    return (color ? color : "" + colors.black);
}, colors.white, colors.gray4);
export default StandardTypography;
var templateObject_1;
//# sourceMappingURL=StandardTypography.js.map