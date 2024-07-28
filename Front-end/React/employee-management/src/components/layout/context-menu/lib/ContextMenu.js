var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment, useRef, useState } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { boxShadow, colors, sizes } from '../../theme/lib/';
import { StandardTypography } from '../../typography/lib/';
var remedyContextMenuStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .tippy-tooltip.remedy-contextMenu-theme {\n    box-shadow: ", ";\n    background-color: ", ";\n    padding: 0;\n  }\n"], ["\n  .tippy-tooltip.remedy-contextMenu-theme {\n    box-shadow: ", ";\n    background-color: ", ";\n    padding: 0;\n  }\n"])), boxShadow, colors.white);
var StyledMenu = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: 0.3rem;\n  padding: ", " 0;\n  text-transform: capitalize;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  border: 1px solid ", ";\n  border-radius: 0.3rem;\n  padding: ", " 0;\n  text-transform: capitalize;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n"])), colors.gray2, sizes.xSmall, colors.white);
var StyledMenuButton = styled('button')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n  text-align: left;\n  padding: ", " ", ";\n  background-color: ", ";\n  border: none;\n  transition: all 0.2s;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  cursor: pointer;\n  text-align: left;\n  padding: ", " ", ";\n  background-color: ", ";\n  border: none;\n  transition: all 0.2s;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background-color: ", ";\n  }\n"])), sizes.xSmall, sizes.small, colors.white, colors.purple1);
var StyledChildrenContainer = styled('span')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var ContextMenu = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b, _c = _a.position, position = _c === void 0 ? 'bottom' : _c, children = _a.children, menuTestId = _a.menuTestId, triggerTestId = _a.triggerTestId, onShow = _a.onShow, onHide = _a.onHide, _d = _a.useContext, useContext = _d === void 0 ? false : _d;
    var _e = useState(false), menuOpen = _e[0], setMenuOpen = _e[1];
    var firstItemRef = useRef(null);
    var handleToggleMenu = function (event) {
        event.preventDefault();
        setMenuOpen(!menuOpen);
    };
    var handleRequestClose = function () {
        setMenuOpen(false);
    };
    var handleItemClick = function (action) {
        handleRequestClose();
        action();
    };
    var handleListKeyDown = function (event) {
        if (event.key === 'Tab' || event.key === 'Escape') {
            event.preventDefault();
            setMenuOpen(false);
        }
    };
    var handleOnShow = function () {
        firstItemRef.current && firstItemRef.current.focus();
        onShow && onShow();
    };
    var renderItems = function () {
        return menuItems.map(function (item, index) { return (React.createElement(StyledMenuButton, { key: item.label, ref: index === 0 ? firstItemRef : null, onClick: function () {
                handleItemClick(item.action);
            }, onKeyDown: handleListKeyDown },
            React.createElement(StandardTypography, null, item.label))); });
    };
    var styledHTML = React.createElement(StyledMenu, { "data-testid": menuTestId }, menuItems.length > 0 && renderItems());
    return (React.createElement(Fragment, null,
        React.createElement(Global, { styles: remedyContextMenuStyle }),
        React.createElement(Tooltip, { useContext: useContext, animateFill: false, animation: "fade", duration: 200, html: styledHTML, position: position, arrow: false, interactive: true, theme: "remedy-contextMenu", onShown: handleOnShow, onHide: onHide, trigger: 'click', onRequestClose: handleRequestClose, open: menuOpen, popperOptions: {
                modifiers: {
                    preventOverflow: {
                        boundariesElement: 'window'
                    }
                }
            } },
            React.createElement(StyledChildrenContainer, { onClick: handleToggleMenu, "data-testid": triggerTestId }, children))));
};
export default ContextMenu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ContextMenu.js.map