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
import React from 'react';
import styled from '@emotion/styled';
import { colors, sizes } from '../../theme/lib/';
import Icon from '../../icon/lib/';
import { LabelTypography } from '../../typography/lib';
import Spacer from '../../spacer/lib/index';
var CHECK = 'check';
var MINUS = 'minus';
var getBackgroundColor = function (checked, disabled) {
    if (disabled) {
        return colors.gray3;
    }
    return checked ? colors.green2 : colors.white;
};
var IconContainer = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  width: 1.8rem;\n  height: 1.8rem;\n  border-radius: 2px;\n  border: solid 1px ", ";\n  background-color: ", ";\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    border-color: ", ";\n  }\n  cursor: ", ";\n"], ["\n  display: inline-block;\n  width: 1.8rem;\n  height: 1.8rem;\n  border-radius: 2px;\n  border: solid 1px ", ";\n  background-color: ", ";\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    border-color: ", ";\n  }\n  cursor: ", ";\n"])), colors.gray2, function (props) { return getBackgroundColor(props.checked, props.disabled); }, function (props) { return (props.disabled ? 'inherited' : "" + colors.green3); }, function (props) { return (props.disabled ? 'not-allowed' : 'pointer'); });
var CheckboxLabel = styled(LabelTypography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n"], ["\n  display: inline-flex;\n  align-items: center;\n"])));
var CheckboxInput = styled('input')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
function Checkbox(_a) {
    var value = _a.value, _b = _a.indeterminate, indeterminate = _b === void 0 ? false : _b, onChange = _a.onChange, id = _a.id, label = _a.label, className = _a.className, _c = _a.disabled, disabled = _c === void 0 ? false : _c, rest = __rest(_a, ["value", "indeterminate", "onChange", "id", "label", "className", "disabled"]);
    var handleOnChange = function (event) { return onChange && onChange(!value, event); };
    var checked = value || indeterminate;
    return (React.createElement(CheckboxLabel, { htmlFor: id, css: "", className: className },
        React.createElement(CheckboxInput, __assign({ type: "checkbox", id: id, onChange: handleOnChange, checked: checked, disabled: disabled }, rest)),
        React.createElement(IconContainer, { checked: checked, disabled: disabled }, checked && React.createElement(Icon, { color: "white", iconSize: "sm", weight: "far", iconClass: indeterminate ? MINUS : CHECK })),
        label && React.createElement(Spacer, { itemWidth: sizes.xSmall }),
        label));
}
export default Checkbox;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Checkbox.js.map