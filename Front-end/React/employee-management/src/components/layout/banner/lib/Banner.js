var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { BannerTypes } from './BannerTypes';
import Icon from '../../icon/lib/';
import { colors, sizes } from '../../theme/lib/';
import { SmallTypography } from '../../typography/lib/';
var Wrapper = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  min-height: 5rem;\n  padding: ", " ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  min-height: 5rem;\n  padding: ", " ", ";\n  background-color: ",
    ";\n"])), sizes.xSmall, sizes.large, function (props) {
    switch (props.type) {
        case BannerTypes.INFORMATIONAL:
            return colors.purple1;
        case BannerTypes.WARNING:
            return colors.yellow1;
        case BannerTypes.PATIENT_SAFETY:
            return colors.red1;
        case BannerTypes.CONFIRMATION:
        default:
            return colors.green1;
    }
});
var BannerText = styled(SmallTypography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ",
    ";\n"])), function (props) {
    switch (props.type) {
        case BannerTypes.INFORMATIONAL:
            return colors.gray5;
        case BannerTypes.WARNING:
            return colors.yellow3;
        case BannerTypes.PATIENT_SAFETY:
            return colors.red2;
        case BannerTypes.CONFIRMATION:
        default:
            return colors.green3;
    }
});
var StyledIcon = styled(Icon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: ", ";\n"], ["\n  margin-right: ", ";\n"])), sizes.small);
var Banner = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? BannerTypes.CONFIRMATION : _b, className = _a.className;
    function renderIcon() {
        var iconType;
        var iconColor;
        var iconWeight = type === BannerTypes.PATIENT_SAFETY ? 'fas' : 'fal';
        switch (type) {
            case BannerTypes.INFORMATIONAL:
                iconType = 'info-circle';
                iconColor = colors.purple3;
                break;
            case BannerTypes.WARNING:
                iconType = 'exclamation-triangle';
                iconColor = colors.yellow2;
                break;
            case BannerTypes.PATIENT_SAFETY:
                iconType = 'exclamation-circle';
                iconColor = colors.red2;
                break;
            case BannerTypes.CONFIRMATION:
            default:
                iconType = 'check-circle';
                iconColor = colors.green2;
        }
        return React.createElement(StyledIcon, { iconClass: iconType, color: iconColor, iconSize: "2x", weight: iconWeight });
    }
    return (React.createElement(Wrapper, { type: type, "data-testid": "banner", className: className },
        React.createElement("div", null, renderIcon()),
        React.createElement("div", null,
            React.createElement(BannerText, { type: type }, children))));
};
export default Banner;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Banner.js.map