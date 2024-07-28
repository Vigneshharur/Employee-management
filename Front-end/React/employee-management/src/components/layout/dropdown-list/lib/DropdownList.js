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
import '@emotion/core';
import Select, { components } from 'react-select';
import { colors, sizes, zIndices } from '../../theme/lib/';
import { LabelTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib/';
import Icon from '../../icon/lib/';
import CustomIndicator from './CustomIndicator';
import ValueContainer from './ValueContainer';
import Option from './Option';
var Required = styled(StandardSemiBoldTypography)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), colors.red2);
var ErrorMessage = styled(SmallTypography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  visibility: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    visibility: ", ";\n    margin-right: ", ";\n  }\n"], ["\n  display: block;\n  visibility: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    visibility: ", ";\n    margin-right: ", ";\n  }\n"])), function (_a) {
    var error = _a.error;
    return (error ? 'visible' : 'hidden');
}, sizes.xxSmall, colors.yellow3, function (_a) {
    var error = _a.error;
    return (error ? 'visible' : 'hidden');
}, sizes.xxSmall);
var CustomStyles = {
    input: function (provided) { return (__assign(__assign({}, provided), { outline: 'none', boxShadow: 'none' })); },
    control: function (provided, state) {
        var borderColor = colors.gray2;
        if (state.isFocused) {
            borderColor = colors.purple2;
        }
        else if (state.selectProps.error) {
            borderColor = colors.yellow2;
        }
        return __assign(__assign({}, provided), { width: '100%', border: "0.1rem solid " + borderColor, backgroundColor: state.selectProps.error ? colors.yellow1 : colors.white, borderRadius: '0.3rem', cursor: 'pointer', height: "" + sizes.large, '&>div': {
                padding: '0 1rem'
            }, '&:hover': {
                borderColor: 'auto'
            } });
    },
    clearIndicator: function (provided) { return (__assign(__assign({}, provided), { color: colors.cta })); },
    container: function (provided) { return (__assign(__assign({}, provided), { outline: 'none', boxShadow: 'none', marginTop: "" + sizes.xxSmall })); },
    option: function (provided, props) {
        var base = __assign(__assign({}, provided), { whiteSpace: 'nowrap', textOverflow: 'ellipsis', textAlign: 'left', cursor: 'pointer', color: colors.black, backgroundColor: 'transparent', ':active': {
                backgroundColor: colors.purple1
            }, ':hover': {
                backgroundColor: colors.purple1
            } });
        if (props.isFocused) {
            base.backgroundColor = colors.purple1;
        }
        return base;
    },
    menu: function (provided, state) {
        var base = __assign(__assign({}, provided), { margin: 0 });
        if (state.selectProps.restrictedHeight) {
            base.height = '10rem';
        }
        return base;
    },
    menuList: function (provided, state) {
        var base = __assign({}, provided);
        if (state.selectProps.restrictedHeight) {
            base.height = '10rem';
        }
        return base;
    },
    menuPortal: function (provided) { return (__assign(__assign({}, provided), { zIndex: zIndices.modalDropdown })); },
    theme: function (theme) { return (__assign(__assign({}, theme), { primary25: colors.purple1, primary: colors.purple1 })); }
};
var ClearIndicator = function (props) {
    return (React.createElement(components.ClearIndicator, __assign({}, props),
        React.createElement(Icon, { iconClass: "times", weight: "fas", color: colors.cta, iconSize: "1x" })));
};
var CustomComponents = {
    DropdownIndicator: CustomIndicator,
    IndicatorSeparator: function () { return null; },
    ClearIndicator: ClearIndicator,
    ValueContainer: ValueContainer,
    Option: Option
};
var DropdownList = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.items, items = _c === void 0 ? [] : _c, value = _a.value, handleChange = _a.handleChange, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, _e = _a.label, label = _e === void 0 ? '' : _e, _f = _a.labelMessage, labelMessage = _f === void 0 ? undefined : _f, _g = _a.id, id = _g === void 0 ? "dropdown-" + new Date().getTime() : _g, _h = _a.disabled, disabled = _h === void 0 ? false : _h, _j = _a.isSearchable, isSearchable = _j === void 0 ? true : _j, _k = _a.isClearable, isClearable = _k === void 0 ? false : _k, _l = _a.restrictedHeight, restrictedHeight = _l === void 0 ? undefined : _l, _m = _a.required, required = _m === void 0 ? false : _m, _o = _a.isWithinModal, isWithinModal = _o === void 0 ? false : _o, _p = _a.error, error = _p === void 0 ? false : _p, _q = _a.errorMessage, errorMessage = _q === void 0 ? '' : _q, args = __rest(_a, ["className", "items", "value", "handleChange", "placeholder", "label", "labelMessage", "id", "disabled", "isSearchable", "isClearable", "restrictedHeight", "required", "isWithinModal", "error", "errorMessage"]);
    return (React.createElement("div", { className: className },
        required && React.createElement(Required, null, "* "),
        React.createElement(LabelTypography, { className: disabled ? 'disabled' : '', htmlFor: id },
            label,
            " ",
            labelMessage && React.createElement(SmallTypography, { className: "disabled" }, labelMessage)),
        React.createElement(Select, __assign({ id: id, options: items, value: value, restrictedHeight: restrictedHeight, isSearchable: isSearchable, isClearable: isClearable, placeholder: placeholder, onChange: handleChange, isDisabled: disabled, styles: CustomStyles, components: CustomComponents, menuPortalTarget: isWithinModal ? document.body : null, menuShouldBlockScroll: isWithinModal, error: error }, args)),
        React.createElement(ErrorMessage, { error: error },
            React.createElement(Icon, { iconClass: "exclamation-triangle", color: colors.yellow2, iconSize: "lg", weight: "fas" }),
            errorMessage)));
};
export default DropdownList;
var templateObject_1, templateObject_2;
//# sourceMappingURL=DropdownList.js.map