var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import WebFont from 'webfontloader';
import { css } from '@emotion/core';
WebFont.load({
    google: {
        families: ['Libre Franklin']
    }
});
var defaultFont = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: 'Libre Franklin', sans-serif;\n"], ["\n  font-family: 'Libre Franklin', sans-serif;\n"])));
export default defaultFont;
var templateObject_1;
//# sourceMappingURL=Typography.js.map