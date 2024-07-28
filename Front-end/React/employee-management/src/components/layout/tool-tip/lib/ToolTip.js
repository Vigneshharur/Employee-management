var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { SmallTypography } from '../../typography/lib/index';
import { colors, sizes, boxShadow } from '../../theme/lib/index';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
var ToolTipWrapper = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n  white-space: ", ";\n  word-wrap: ", ";\n  word-break: ", ";\n  max-width: 32.5rem;\n  text-align: left;\n"], ["\n  margin: ", ";\n  white-space: ", ";\n  word-wrap: ", ";\n  word-break: ", ";\n  max-width: 32.5rem;\n  text-align: left;\n"])), sizes.small, function (_a) {
    var forceWordBreak = _a.forceWordBreak;
    return (forceWordBreak ? 'pre-line' : 'normal');
}, function (_a) {
    var forceWordBreak = _a.forceWordBreak;
    return (forceWordBreak ? 'break-word' : 'normal');
}, function (_a) {
    var forceWordBreak = _a.forceWordBreak;
    return (forceWordBreak ? 'break-all' : 'normal');
});
var remedyToolTipStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-top-color: ", ";\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-bottom-color: ", ";\n  }\n  .tippy-popper[x-placement^='left'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-left-color: ", ";\n  }\n  .tippy-popper[x-placement^='right'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-right-color: ", ";\n  }\n  .tippy-tooltip.remedy-theme .arrow-regular {\n    transform: scale(2.25);\n  }\n  .tippy-tooltip.remedy-theme {\n    border: 1px solid ", ";\n    border-radius: 0;\n    box-shadow: ", ";\n    background-color: ", ";\n  }\n"], ["\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-top-color: ", ";\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-bottom-color: ", ";\n  }\n  .tippy-popper[x-placement^='left'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-left-color: ", ";\n  }\n  .tippy-popper[x-placement^='right'] .tippy-tooltip.remedy-theme .arrow-regular {\n    border-right-color: ", ";\n  }\n  .tippy-tooltip.remedy-theme .arrow-regular {\n    transform: scale(2.25);\n  }\n  .tippy-tooltip.remedy-theme {\n    border: 1px solid ", ";\n    border-radius: 0;\n    box-shadow: ", ";\n    background-color: ", ";\n  }\n"])), colors.purple1, colors.purple1, colors.purple1, colors.purple1, colors.gray2, boxShadow, colors.purple1);
var StyledSmallText = styled(SmallTypography)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), colors.black);
var ToolTip = function (_a) {
    var text = _a.text, html = _a.html, _b = _a.position, position = _b === void 0 ? 'top' : _b, children = _a.children, interactive = _a.interactive, testId = _a.testId, onShow = _a.onShow, onHide = _a.onHide, onHidden = _a.onHidden, _c = _a.hideOnClick, hideOnClick = _c === void 0 ? true : _c, _d = _a.useContext, useContext = _d === void 0 ? false : _d;
    var forceWordBreak = !(typeof text === 'string' && text.indexOf(' ') > -1);
    var styledHTML = (React.createElement(ToolTipWrapper, { forceWordBreak: forceWordBreak },
        React.createElement(StyledSmallText, null, html || text)));
    return (React.createElement(Fragment, null,
        React.createElement(Global, { styles: remedyToolTipStyle }),
        React.createElement(Tooltip, { useContext: useContext, html: styledHTML, position: position, arrow: true, interactive: interactive, theme: "remedy", "data-testId": testId, onShow: onShow, onHidden: onHidden, onHide: onHide, hideOnClick: hideOnClick, popperOptions: {
                modifiers: {
                    preventOverflow: {
                        boundariesElement: 'window'
                    }
                }
            } }, children)));
};
export default ToolTip;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ToolTip.js.map