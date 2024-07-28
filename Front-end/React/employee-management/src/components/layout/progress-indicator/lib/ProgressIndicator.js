var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { SmallTypography, StandardTypography } from '../../typography/lib/';
import { colors } from '../../theme/lib/';
import Icon from '../../icon/lib/';
var lighterGreen = '#d4e1b6';
var ProgressWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  position: relative;\n  .step {\n    display: table-cell;\n    text-align: center;\n    vertical-align: top;\n    overflow: visible;\n    position: relative;\n  }\n  .step:not(:last-child):before {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: -2.5rem;\n    background-color: ", ";\n    height: 0.2rem;\n    width: 100%;\n  }\n  .step:not(.complete):before,\n  .step:not(.in-progress):before {\n    background-color: ", ";\n  }\n  .step .node {\n    display: inline-block;\n    border: 0.2rem solid ", ";\n    background-color: ", ";\n    border-radius: 1.8rem;\n    height: 2.4rem;\n    width: 2.4rem;\n    line-height: 2rem;\n  }\n  .step.complete:before {\n    background-color: ", ";\n  }\n  .step.complete .node {\n    border-color: ", ";\n    background-color: ", ";\n  }\n  .step.in-progress .node {\n    border-color: ", ";\n  }\n"], ["\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  position: relative;\n  .step {\n    display: table-cell;\n    text-align: center;\n    vertical-align: top;\n    overflow: visible;\n    position: relative;\n  }\n  .step:not(:last-child):before {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: -2.5rem;\n    background-color: ", ";\n    height: 0.2rem;\n    width: 100%;\n  }\n  .step:not(.complete):before,\n  .step:not(.in-progress):before {\n    background-color: ", ";\n  }\n  .step .node {\n    display: inline-block;\n    border: 0.2rem solid ", ";\n    background-color: ", ";\n    border-radius: 1.8rem;\n    height: 2.4rem;\n    width: 2.4rem;\n    line-height: 2rem;\n  }\n  .step.complete:before {\n    background-color: ", ";\n  }\n  .step.complete .node {\n    border-color: ", ";\n    background-color: ", ";\n  }\n  .step.in-progress .node {\n    border-color: ", ";\n  }\n"])), colors.green2, lighterGreen, lighterGreen, colors.white, colors.green2, colors.green2, colors.white, colors.green2);
var NodeWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 0.2rem solid ", ";\n  border-width: 0 0.5rem;\n  position: absolute;\n  top: -3.7rem;\n  left: 50%;\n  margin-left: -1.8rem;\n  z-index: 3;\n  ", "\n"], ["\n  border: 0.2rem solid ", ";\n  border-width: 0 0.5rem;\n  position: absolute;\n  top: -3.7rem;\n  left: 50%;\n  margin-left: -1.8rem;\n  z-index: 3;\n  ", "\n"])), colors.white, function (_a) {
    var clickable = _a.clickable;
    return clickable && "cursor: pointer;";
});
var Current = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: 1.6rem;\n  height: 1.6rem;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  top: 0.2rem;\n"], ["\n  display: inline-block;\n  width: 1.6rem;\n  height: 1.6rem;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  top: 0.2rem;\n"])), colors.green2);
var Step = function (_a) {
    var label = _a.label, value = _a.value, handleClick = _a.handleClick, _b = _a.current, current = _b === void 0 ? 0 : _b, valueAsIcon = _a.valueAsIcon;
    var clickEvent = function (event) {
        handleClick && handleClick(event, { label: label, value: value });
    };
    if (current < value) {
        return (React.createElement("div", { className: "step" },
            React.createElement(SmallTypography, null, label),
            React.createElement(NodeWrapper, { clickable: !!handleClick, onClick: clickEvent },
                React.createElement("div", { className: "node" }, valueAsIcon && React.createElement(StandardTypography, { color: colors.gray2 }, value)))));
    }
    else if (current == value) {
        return (React.createElement("div", { className: "step in-progress" },
            React.createElement(SmallTypography, null, label),
            React.createElement(NodeWrapper, { clickable: !!handleClick, onClick: clickEvent },
                React.createElement("div", { className: "node" }, valueAsIcon ? React.createElement(StandardTypography, { color: colors.green2 }, value) : React.createElement(Current, null)))));
    }
    else {
        return (React.createElement("div", { className: "step complete" },
            React.createElement(SmallTypography, null, label),
            React.createElement(NodeWrapper, { clickable: !!handleClick, onClick: clickEvent },
                React.createElement("div", { className: "node" }, valueAsIcon ? (React.createElement(StandardTypography, { color: colors.green2 }, value)) : (React.createElement(Icon, { color: colors.green2, weight: "fas", iconClass: "check" }))))));
    }
};
function ProgressIndicator(_a) {
    var steps = _a.steps, current = _a.current, valueAsIcon = _a.valueAsIcon, handleClick = _a.handleClick;
    return (React.createElement(ProgressWrapper, null, steps.map(function (step) {
        return (React.createElement(Step, { label: step.label, value: step.value, key: step.value, current: current, valueAsIcon: valueAsIcon, handleClick: handleClick }));
    })));
}
export default ProgressIndicator;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ProgressIndicator.js.map