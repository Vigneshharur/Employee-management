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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import React, { Fragment, useMemo, useState } from 'react';
import Select, { components } from 'react-select';
import styled from '@emotion/styled';
import '@emotion/core';
import CustomIndicator from './CustomIndicator';
import CheckboxOption from './CheckboxOption';
import Checkbox from '../../checkbox/lib/';
import Icon from '../../icon/lib/';
import { colors, sizes, zIndices } from '../../theme/lib/';
import { LabelFormFieldTypography, SmallTypography, StandardSemiBoldTypography } from '../../typography/lib/';
var SELECT_OPTION = 'select-option';
var DESELECT_OPTION = 'deselect-option';
var REMOVE_VALUE = 'remove-value';
var selectAllOption = { optionLabel: 'Select All', chipLabel: 'All selected', value: 'selectAll' };
var SearchBarSpacer = styled('span')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0px ", ";\n"], ["\n  margin: 0px ", ";\n"])), sizes.xxSmall);
var LabelContainer = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var StyledSmallTypography = styled(SmallTypography)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: auto;\n"], ["\n  margin-left: auto;\n"])));
var ErrorMessage = styled(SmallTypography)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  visibility: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    visibility: ", ";\n    margin-right: ", ";\n  }\n"], ["\n  display: block;\n  visibility: ", ";\n  margin: ", " 0;\n  color: ", ";\n  svg {\n    visibility: ", ";\n    margin-right: ", ";\n  }\n"])), function (_a) {
    var error = _a.error;
    return (error ? 'visible' : 'hidden');
}, sizes.xxSmall, colors.yellow3, function (_a) {
    var error = _a.error;
    return (error ? 'visible' : 'hidden');
}, sizes.xxSmall);
var CustomStyles = {
    input: function (provided) { return (__assign(__assign({}, provided), { outline: 'none', boxShadow: 'none' })); },
    control: function (provided, state) {
        var _a, _b;
        return (__assign(__assign({}, provided), { backgroundColor: ((_a = state === null || state === void 0 ? void 0 : state.selectProps) === null || _a === void 0 ? void 0 : _a.error) ? colors.yellow1 : colors.white, width: '100%', border: "1px solid " + (((_b = state === null || state === void 0 ? void 0 : state.selectProps) === null || _b === void 0 ? void 0 : _b.error) ? colors.yellow2 : colors.gray2), borderRadius: '3px', cursor: 'pointer', minHeight: "" + sizes.large, boxShadow: 'none', '&>div': {
                padding: "0 " + sizes.xSmall
            }, '&:hover': {
                borderColor: "" + colors.gray2,
                boxShadow: 'none'
            } }));
    },
    clearIndicator: function (provided) { return (__assign(__assign({}, provided), { color: colors.cta })); },
    container: function (provided) { return (__assign(__assign({}, provided), { display: 'flex', flexWrap: 'wrap', outline: 'none', boxShadow: 'none', marginTop: "" + sizes.xxSmall })); },
    indicatorsContainer: function (provided) { return (__assign(__assign({}, provided), { marginBottom: 0 })); },
    option: function (provided, props) {
        var _a;
        var base = __assign(__assign({}, provided), { display: 'flex', textOverflow: 'ellipsis', textAlign: 'left', cursor: 'pointer', color: colors.black, paddingLeft: !props.selectProps.isGrouped || ((_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.value) === selectAllOption.value ? '12px' : "" + sizes.medium, backgroundColor: 'transparent', ':active': {
                backgroundColor: colors.purple1
            }, ':hover': {
                backgroundColor: colors.purple1
            } });
        if (props.isFocused) {
            base.backgroundColor = colors.purple1;
        }
        return base;
    },
    menu: function (provided) { return (__assign(__assign({}, provided), { margin: 0 })); },
    menuPortal: function (provided) { return (__assign(__assign({}, provided), { zIndex: zIndices.modalDropdown })); },
    multiValue: function (provided) {
        return __assign(__assign({}, provided), { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "0.3rem " + sizes.xSmall, margin: ".3rem " + sizes.xxSmall, backgroundColor: colors.green4, borderRadius: sizes.xSmall });
    },
    multiValueLabel: function (provided) { return (__assign(__assign({}, provided), { padding: 0, color: colors.green3 })); },
    multiValueRemove: function (provided) { return (__assign(__assign({}, provided), { color: colors.green3, marginLeft: sizes.xSmall, ':hover': {
            backgroundColor: 'transparent',
            color: colors.green3
        } })); },
    theme: function (provided) { return (__assign(__assign({}, provided), { primary25: colors.purple1, primary: colors.purple1 })); }
};
var groupItemStyles = {
    cursor: 'pointer',
    display: 'flex'
};
var groupLabelStyles = {
    transform: 'translateX(30px)'
};
var MultiValueLabel = function (props) { return (React.createElement(components.MultiValueLabel, __assign({}, props, { key: props.data.label }),
    React.createElement(SmallTypography, { title: props.data.label }, props.data.label))); };
var MultiValueRemove = function (props) {
    return (React.createElement(components.MultiValueRemove, __assign({}, props),
        React.createElement(Icon, { weight: "fal", iconClass: "times" })));
};
var renderChips = function (currentSelections) {
    var abbreviatedList = currentSelections.slice(0, 6);
    var additionalHiddenOptions = currentSelections.length - 6;
    return (React.createElement(Fragment, null,
        abbreviatedList.map(function (child) { return child; }),
        " ",
        additionalHiddenOptions > 0 && "(+" + additionalHiddenOptions + ")"));
};
var ValueContainer = function (props) {
    var _a, _b;
    //if you inspect the element in dev tools props children is an array of ReactElements
    //the typings provided by React-Select are showing props.children as a ReactNode - not even an array.
    // I believe that is incorrect, so suppressing warning on currentSelection declaration
    // @ts-ignore
    var currentSelections = (_a = props === null || props === void 0 ? void 0 : props.children) === null || _a === void 0 ? void 0 : _a[0];
    var filterInput = (_b = props.children) === null || _b === void 0 ? void 0 : _b[1];
    //return the magnify icon if nothing has been selected, otherwise render chips
    var renderValueComponent = function () {
        var _a;
        if (!props.hasValue) {
            return (React.createElement(Fragment, null,
                React.createElement(Icon, { iconClass: "search", weight: "fas", color: colors.cta }),
                React.createElement(SearchBarSpacer, null)));
        }
        if (currentSelections) {
            var isAllSelected = currentSelections.find(function (selection) { var _a, _b; return ((_b = (_a = selection === null || selection === void 0 ? void 0 : selection.props) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.value) === selectAllOption.value; });
            //The default selectAllOption is Select all, but the chip should read All selected
            if (((_a = isAllSelected === null || isAllSelected === void 0 ? void 0 : isAllSelected.props) === null || _a === void 0 ? void 0 : _a.children) === selectAllOption.optionLabel) {
                isAllSelected = __assign(__assign({}, isAllSelected), { props: __assign(__assign({}, isAllSelected.props), { data: __assign(__assign({}, isAllSelected.props.data), { label: selectAllOption.chipLabel }) }) });
            }
            return isAllSelected || renderChips(currentSelections);
        }
    };
    return (React.createElement(components.ValueContainer, __assign({}, props),
        renderValueComponent(),
        filterInput));
};
var defaultNoOptionsMessage = function () { return React.createElement(Fragment, null, "No results found"); };
var CustomComponents = {
    DropdownIndicator: CustomIndicator,
    ValueContainer: ValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    IndicatorSeparator: function () { return null; },
    Option: CheckboxOption
};
var DropdownMultiGroupSelect = function (_a) {
    var _b;
    var _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.value, value = _d === void 0 ? [] : _d, handleChange = _a.handleChange, _e = _a.placeholder, placeholder = _e === void 0 ? '' : _e, _f = _a.label, label = _f === void 0 ? '' : _f, _g = _a.secondaryLabel, secondaryLabel = _g === void 0 ? '' : _g, _h = _a.id, id = _h === void 0 ? 'ppingMultiGroupSelect' : _h, _j = _a.isDisabled, isDisabled = _j === void 0 ? false : _j, _k = _a.allOptionsLabel, allOptionsLabel = _k === void 0 ? selectAllOption.optionLabel : _k, noOptionsMessage = _a.noOptionsMessage, //function that returns a node
    _l = _a.isWithinModal, //function that returns a node
    isWithinModal = _l === void 0 ? false : _l, _m = _a.isRequiredField, isRequiredField = _m === void 0 ? false : _m, className = _a.className, _o = _a.error, error = _o === void 0 ? false : _o, _p = _a.errorMessage, errorMessage = _p === void 0 ? 'Please make a selection' : _p;
    //this needs to be controlled because the group option select is not a core feature of the library
    // and the input value is not cleared after a selection is made
    var _q = __read(useState(''), 2), inputValue = _q[0], setInputValue = _q[1];
    var groupedOption = __spread(options);
    var isGroupedDropdown = !!((_b = groupedOption[0]) === null || _b === void 0 ? void 0 : _b.options);
    var allOptionsItem = { value: selectAllOption.value, label: allOptionsLabel };
    var allOptions = useMemo(function () {
        return options.length > 0 ? __spread(new Set(__spread([allOptionsItem], options))) : [];
    }, [options, allOptionsLabel]);
    var flattenedOptions = useMemo(function () {
        if (!isGroupedDropdown)
            return options; //nonGroupedOptions are already a flat list
        var groupedOptions = __spread(options);
        return groupedOptions.reduce(function (allOptions, currentOption) {
            var updatedOptions = __spread(allOptions);
            return __spread(updatedOptions, currentOption === null || currentOption === void 0 ? void 0 : currentOption.options);
        }, []);
    }, [options]);
    //include the allOptionsItem checkbox and chip in selections only for the UI, we don't want to send this option to the server, so we need to control this here
    var selectedValues = useMemo(function () {
        var isAllSelected = flattenedOptions.length && flattenedOptions.length === value.length;
        if (isAllSelected) {
            return __spread([allOptionsItem], value);
        }
        else {
            return value.filter(function (option) { return option.value !== allOptionsItem.value; });
        }
    }, [value]);
    var filterOption = function (props, string) {
        var e_1, _a;
        var _b;
        if (string === void 0) { string = ''; }
        if (string.length < 3)
            return true;
        var lowerString = string.toLowerCase();
        var lowerLabel = props.label.toLowerCase();
        //match input value to on individual options
        if (lowerLabel.includes(lowerString))
            return true;
        if (isGroupedDropdown) {
            //match input value to group label
            var groupOptions = allOptions.filter(function (group) { return group.label.toLowerCase().includes(lowerString); });
            if (groupOptions) {
                try {
                    for (var _c = __values(groupOptions), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var groupOption = _d.value;
                        //check if current option is in group
                        var option = (_b = groupOption === null || groupOption === void 0 ? void 0 : groupOption.options) === null || _b === void 0 ? void 0 : _b.find(function (currentOption) { return currentOption.label.toLowerCase() === lowerLabel; });
                        if (option) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return false;
    };
    function handleGroupClick(groupName, allGroupOptions, isAllGroupSelected) {
        //reset filter input value on group click as the input is hidden once you've made a selection
        if (inputValue)
            setInputValue('');
        var groupedValues = __spread(value);
        var removedGroupFromValues = groupedValues.filter(function (selections) { return selections.group !== groupName; });
        //note that isAllGroupSelect is evaluated before this event forces a rerender, so if isAllGroupSelected is true,
        // the result will be that the checkbox should next be unchecked and the values should be removed. if false, the groups should be added
        var updateValue = isAllGroupSelected ? removedGroupFromValues : __spread(removedGroupFromValues, allGroupOptions);
        handleChange(updateValue);
    }
    var formatGroupLabel = function (groupProps) {
        var _a = __read([groupProps.label, groupProps.options], 2), groupLabel = _a[0], allGroupOptions = _a[1];
        var currentGroupValues = __spread(value);
        var selectedGroupOptions = currentGroupValues.length
            ? currentGroupValues.filter(function (option) { return option.group === groupLabel; })
            : [];
        var isAllSelected = allGroupOptions.length === selectedGroupOptions.length;
        return (React.createElement(LabelFormFieldTypography, { style: groupItemStyles },
            React.createElement(Checkbox, { value: isAllSelected, onChange: function () { return handleGroupClick(groupLabel, allGroupOptions, isAllSelected); } }),
            React.createElement(StandardSemiBoldTypography, { style: groupLabelStyles }, groupLabel)));
    };
    var handleOnChange = function (e, meta) {
        var _a, _b;
        var updateValue = e || []; //null is sent when the last item has been deselected
        //add or remove all options if the allOptionsItem is clicked
        if (((_a = meta === null || meta === void 0 ? void 0 : meta.option) === null || _a === void 0 ? void 0 : _a.value) === allOptionsItem.value || ((_b = meta === null || meta === void 0 ? void 0 : meta.removedValue) === null || _b === void 0 ? void 0 : _b.value) === allOptionsItem.value) {
            if (meta.action === SELECT_OPTION) {
                updateValue = flattenedOptions;
            }
            else if (meta.action === DESELECT_OPTION || meta.action === REMOVE_VALUE) {
                updateValue = [];
            }
        }
        else if (meta.action === 'deselect-option') {
            //We're adding the allOptionsItem to all options for the UI, we need to remove this item from the list before setting it to state
            updateValue =
                (e === null || e === void 0 ? void 0 : e.filter(function (option) { return option.value !== allOptionsItem.value; })) || [];
        }
        handleChange(updateValue);
    };
    var handleInputChange = function (e) {
        setInputValue(e);
    };
    var dropdownId = "dropdown-" + id;
    var renderSelect = function () { return (
    // @ts-ignore
    React.createElement(Select, { id: dropdownId, options: allOptions, value: selectedValues, isMulti: true, hideSelectedOptions: false, isClearable: true, placeholder: placeholder, closeMenuOnSelect: false, onChange: handleOnChange, onInputChange: handleInputChange, inputValue: inputValue, getOptionValue: function (option) { return option.id; }, isDisabled: isDisabled, styles: CustomStyles, components: CustomComponents, formatGroupLabel: formatGroupLabel, filterOption: filterOption, menuPortalTarget: isWithinModal && document.body, menuShouldBlockScroll: isWithinModal, noOptionsMessage: noOptionsMessage || defaultNoOptionsMessage, isGrouped: isGroupedDropdown, error: error })); };
    return (React.createElement("div", { className: className },
        React.createElement(LabelContainer, { className: isDisabled ? 'disabled' : '' },
            React.createElement(LabelFormFieldTypography, { className: isRequiredField ? 'requiredField' : '', htmlFor: dropdownId }, label),
            secondaryLabel && React.createElement(StyledSmallTypography, null, secondaryLabel)),
        renderSelect(),
        React.createElement(ErrorMessage, { error: error },
            React.createElement(Icon, { iconClass: "exclamation-triangle", color: colors.yellow2, iconSize: "lg", weight: "fas" }),
            errorMessage)));
};
export default DropdownMultiGroupSelect;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=DropdownMultiGroupSelect.js.map