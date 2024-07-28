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
import React from 'react';
import styled from '@emotion/styled';
import { components } from 'react-select';
import { StandardTypography } from '../../typography/lib/';
import { colors, sizes } from '../../theme/lib/';
import Icon from '../../icon/lib/';
var LabelWrapper = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  padding-left: ", ";\n"], ["\n  display: inline-block;\n  padding-left: ", ";\n"])), sizes.xSmall);
var MockCheckbox = styled.div(function (_a) {
    var isSelected = _a.isSelected;
    return ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1.8rem',
        height: '1.8rem',
        borderRadius: '2px',
        border: "solid 1px " + colors.gray2,
        backgroundColor: isSelected ? "" + colors.green2 : "" + colors.white
    });
});
var CheckboxOption = function (props) {
    return (React.createElement(components.Option, __assign({}, props),
        React.createElement(MockCheckbox, { isSelected: props.isSelected, "data-testid": "dropdownOption-" + props.label },
            React.createElement(Icon, { color: "white", iconSize: "sm", weight: "far", iconClass: 'check' })),
        React.createElement(LabelWrapper, { title: props.label },
            React.createElement(StandardTypography, null, props.label))));
};
export default CheckboxOption;
var templateObject_1;
//# sourceMappingURL=CheckboxOption.js.map