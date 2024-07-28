var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { SmallSemiBoldTypography, SmallTypography, StandardTypography } from '../../typography/lib/';
import { colors, sizes } from '../../theme/lib/';
import Icon from '../../icon/lib/';
import { StyleType } from '../../button/lib/';
var DISABLED = 'DISABLED';
var FakeInput = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  display: flex;\n  position: relative;\n  margin-top: ", ";\n"], ["\n  width: 100%;\n  height: ", ";\n  display: flex;\n  position: relative;\n  margin-top: ", ";\n"])), sizes.large, sizes.xSmall);
var FakeButton = styled('span')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  height: ", ";\n  padding: ", " ", ";\n  font-weight: 600;\n  color: ", ";\n  content: 'Browse';\n  background-color: ", ";\n  border: ", ";\n  border-radius: 0 0.3rem 0.3rem 0;\n  cursor: ", ";\n  white-space: nowrap;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  display: block;\n  height: ", ";\n  padding: ", " ", ";\n  font-weight: 600;\n  color: ",
    ";\n  content: 'Browse';\n  background-color: ",
    ";\n  border: ", ";\n  border-radius: 0 0.3rem 0.3rem 0;\n  cursor: ", ";\n  white-space: nowrap;\n  &:hover {\n    background-color: ",
    ";\n  }\n"])), sizes.large, sizes.xSmall, sizes.medium, function (_a) {
    var type = _a.type;
    switch (type) {
        case StyleType.PRIMARY:
        case DISABLED:
            return colors.white;
        case StyleType.SECONDARY:
            return colors.cta;
        default:
            return colors.cta;
    }
}, function (_a) {
    var type = _a.type;
    switch (type) {
        case StyleType.PRIMARY:
            return colors.cta;
        case StyleType.SECONDARY:
            return colors.white;
        case DISABLED:
            return colors.gray3;
        default:
            return colors.white;
    }
}, function (_a) {
    var type = _a.type;
    return "1px solid " + (type === 'disabled' ? colors.gray3 : colors.cta);
}, function (_a) {
    var type = _a.type;
    return (type === 'disabled' ? 'not-allowed' : 'pointer');
}, function (_a) {
    var type = _a.type;
    switch (type) {
        case StyleType.PRIMARY:
            return colors.purple4;
        case StyleType.SECONDARY:
            return colors.purple1;
        case DISABLED:
            return colors.gray3;
        default:
            return colors.purple1;
    }
});
var FileName = styled('span')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border: ", ";\n  border-right: none;\n  background-color: ", ";\n  padding: ", " ", ";\n  flex-grow: 1;\n  cursor: ", ";\n"], ["\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border: ", ";\n  border-right: none;\n  background-color: ",
    ";\n  padding: ", " ", ";\n  flex-grow: 1;\n  cursor: ", ";\n"])), function (_a) {
    var error = _a.error;
    return "1px solid " + (error ? colors.yellow2 : colors.purple2);
}, function (_a) {
    var error = _a.error, disabled = _a.disabled;
    if (error) {
        return colors.yellow1;
    }
    if (disabled) {
        return colors.gray1;
    }
    return colors.white;
}, sizes.xSmall, sizes.small, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
});
var Input = styled('input')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 0.1rem;\n  overflow: hidden;\n  padding: 0;\n  position: absolute !important;\n  white-space: nowrap;\n  width: 0.1rem;\n"], ["\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 0.1rem;\n  overflow: hidden;\n  padding: 0;\n  position: absolute !important;\n  white-space: nowrap;\n  width: 0.1rem;\n"])));
var Label = styled('label')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 0;\n"], ["\n  display: block;\n  margin-bottom: 0;\n"])));
var CancelInput = styled('span')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-left: none;\n  padding: ", ";\n  cursor: pointer;\n  & > svg {\n    transition: 0.15s all;\n    &:hover {\n      transform: scale(1.15);\n    }\n  }\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-left: none;\n  padding: ", ";\n  cursor: pointer;\n  & > svg {\n    transition: 0.15s all;\n    &:hover {\n      transform: scale(1.15);\n    }\n  }\n"])), function (_a) {
    var error = _a.error;
    return "" + (error && colors.yellow1);
}, function (_a) {
    var error = _a.error;
    return "0.1rem solid " + (error ? colors.yellow2 : colors.purple2);
}, sizes.xSmall);
var FileErrorMessage = styled(SmallTypography)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: -2.2rem;\n  left: 0;\n  color: ", ";\n  svg {\n    margin-right: ", ";\n  }\n"], ["\n  position: absolute;\n  bottom: -2.2rem;\n  left: 0;\n  color: ", ";\n  svg {\n    margin-right: ", ";\n  }\n"])), colors.yellow3, sizes.xxSmall);
var FileInput = function (_a) {
    var label = _a.label, value = _a.value, error = _a.error, _b = _a.acceptedFiles, acceptedFiles = _b === void 0 ? '' : _b, onChange = _a.onChange, disabled = _a.disabled, _c = _a.buttonText, buttonText = _c === void 0 ? 'Browse' : _c, _d = _a.buttonType, buttonType = _d === void 0 ? StyleType.SECONDARY : _d, rest = __rest(_a, ["label", "value", "error", "acceptedFiles", "onChange", "disabled", "buttonText", "buttonType"]);
    var fileName = value.length > 0 ? value[0].name : '';
    var handleFileCancel = function (event) {
        event.stopPropagation();
        event.preventDefault();
        onChange([]);
    };
    //the onchange listener will not fire if you click the same file after clearing its value.
    // this resets the value so it will always change
    var handleInputClick = function (event) {
        event.target.value = '';
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", null,
            React.createElement(Label, null,
                React.createElement(SmallSemiBoldTypography, { css: "" }, label),
                React.createElement(FakeInput, null,
                    React.createElement(FileName, { title: fileName, error: !!error, disabled: disabled },
                        React.createElement(StandardTypography, { css: "" },
                            " ",
                            fileName)),
                    value.length > 0 && (React.createElement(CancelInput, { onClick: handleFileCancel, error: !!error },
                        React.createElement(Icon, { iconClass: "times", color: colors.purple4 }))),
                    React.createElement(FakeButton, { type: disabled ? DISABLED : buttonType }, buttonText),
                    error && (React.createElement(FileErrorMessage, { css: "" },
                        React.createElement(Icon, { iconClass: "exclamation-triangle", color: colors.yellow2, iconSize: "lg", weight: "fas" }),
                        error))),
                React.createElement(Input, __assign({}, rest, { style: { display: 'none' }, type: "file", accept: acceptedFiles, onChange: function (e) {
                        onChange(e.currentTarget.files);
                    }, onClick: handleInputClick, disabled: disabled }))))));
};
export default FileInput;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=file-input.js.map