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
import AsyncSelect, { components } from 'react-select/async';
import { colors, sizes } from '../../theme/src/';
import { LabelTypography, SmallTypography } from '../../typography/lib/';
import Icon from '../../icon/lib/';
import CustomIndicator from './CustomIndicator';
import ValueContainer from './ValueContainer';
import Option from './Option';
var CustomStyles = {
    input: function (provided) { return (__assign(__assign({}, provided), { outline: 'none', boxShadow: 'none' })); },
    control: function (provided, state) { return (__assign(__assign({}, provided), { width: '100%', border: "0.1rem solid " + (state.isFocused ? colors.purple2 : colors.gray2), borderRadius: '0.3rem', cursor: 'pointer', height: "" + sizes.large, '&>div': {
            padding: '0 1rem'
        }, '&:hover': {
            borderColor: 'auto'
        } })); },
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
    var _b = _a.items, items = _b === void 0 ? [] : _b, value = _a.value, handleChange = _a.handleChange, _c = _a.placeholder, placeholder = _c === void 0 ? '' : _c, _d = _a.label, label = _d === void 0 ? '' : _d, _e = _a.labelMessage, labelMessage = _e === void 0 ? undefined : _e, _f = _a.id, id = _f === void 0 ? "dropdown-" + new Date().getTime() : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.isSearchable, isSearchable = _h === void 0 ? false : _h, _j = _a.isClearable, isClearable = _j === void 0 ? false : _j, _k = _a.restrictedHeight, restrictedHeight = _k === void 0 ? undefined : _k;
    var loadOptions = function (inputValue, callback) {
        setTimeout(function () {
            callback(filterColors(inputValue));
        }, 1000);
    };
    return (React.createElement("div", null,
        React.createElement(LabelTypography, { className: disabled ? 'disabled' : '', htmlFor: id },
            label,
            " ",
            labelMessage && React.createElement(SmallTypography, { className: "disabled" }, labelMessage)),
        React.createElement(AsyncSelect, { id: id, options: items, loadOptions: loadOptions, value: value, restrictedHeight: restrictedHeight, isSearchable: isSearchable, isClearable: isClearable, placeholder: placeholder, onChange: handleChange, isDisabled: disabled, styles: CustomStyles, components: CustomComponents })));
};
export default DropdownList;
//# sourceMappingURL=AsyncDropdownList.js.map