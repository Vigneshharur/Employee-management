var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from '@emotion/styled';
import Icon from '../../icon/lib';
import { DisplaySmallTypography } from '../../typography/lib/';
import { boxShadow, colors, sizes } from '../../theme/lib';
import Banner from '../../banner/lib/';
import Badge from '../../badge/lib/';
import { sortButtonOrder } from '../../button/lib';
var OverLayContainer = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  width: 100vw;\n  opacity: 0.7;\n  background-color: white;\n  z-index: 150;\n  label: overlay-container;\n"], ["\n  display: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  width: 100vw;\n  opacity: 0.7;\n  background-color: white;\n  z-index: 150;\n  label: overlay-container;\n"])), function (props) { return (props.isOpen ? 'block' : 'none'); });
var transitionDuration = 600;
var transitionName = "slide-in-pane-transition";
var PaneContainer = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 161;\n  background: ", ";\n  border-left: 1px solid ", ";\n  border-top: 1px solid ", ";\n  box-shadow: ", ";\n  position: fixed;\n  height: ", ";\n  padding: 0;\n  top: ", ";\n  width: ", ";\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  ", ";\n  &.", "-enter, &.", "-appear {\n    transform: translateX(", ");\n  }\n\n  &.", "-enter-active, &.", "-appear-active {\n    transform: translateX(0rem);\n    transition: all ", "ms ease-in-out;\n  }\n\n  &.", "-exit {\n    transform: translateX(0rem);\n  }\n\n  &.", "-exit-active {\n    transform: translateX(", ");\n    transition: all ", "ms ease-in-out;\n  }\n  label: pane-container;\n"], ["\n  z-index: 161;\n  background: ", ";\n  border-left: 1px solid ", ";\n  border-top: 1px solid ", ";\n  box-shadow: ", ";\n  position: fixed;\n  height: ", ";\n  padding: 0;\n  top: ", ";\n  width: ", ";\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  ",
    ";\n  &.", "-enter, &.", "-appear {\n    transform: translateX(", ");\n  }\n\n  &.", "-enter-active, &.", "-appear-active {\n    transform: translateX(0rem);\n    transition: all ", "ms ease-in-out;\n  }\n\n  &.", "-exit {\n    transform: translateX(0rem);\n  }\n\n  &.", "-exit-active {\n    transform: translateX(", ");\n    transition: all ", "ms ease-in-out;\n  }\n  label: pane-container;\n"])), colors.white, colors.gray3, colors.gray3, boxShadow, function (_a) {
    var showNav = _a.showNav;
    return (showNav ? 'calc(100% - 5rem)' : '100%');
}, function (_a) {
    var showNav = _a.showNav;
    return (showNav ? sizes.xLarge : 0);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var _b;
    var startingPosition = _a.startingPosition;
    return _b = {}, _b[startingPosition] = 0, _b;
}, transitionName, transitionName, function (_a) {
    var startingPosition = _a.startingPosition, width = _a.width;
    return (startingPosition === 'right' ? width : "-" + width);
}, transitionName, transitionName, transitionDuration, transitionName, transitionName, function (_a) {
    var startingPosition = _a.startingPosition, width = _a.width;
    return (startingPosition === 'right' ? width : "-" + width);
}, transitionDuration);
var PaneContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0 ", " ", " ", ";\n  flex: 1 1 auto;\n  overflow-y: auto;\n"], ["\n  padding: 0 ", " ", " ", ";\n  flex: 1 1 auto;\n  overflow-y: auto;\n"])), sizes.large, sizes.medium, sizes.large);
var HeaderContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0 1 auto;\n  height: 7.6rem;\n  cursor: default;\n  label: header-container;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0 1 auto;\n  height: 7.6rem;\n  cursor: default;\n  label: header-container;\n"])));
var BadgeContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 ", " ", " ", ";\n  width: fit-content;\n"], ["\n  padding: 0 ", " ", " ", ";\n  width: fit-content;\n"])), sizes.large, sizes.small, sizes.medium);
var FooterContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: ", " ", ";\n  flex: 0 1 auto;\n  button {\n    margin-left: ", ";\n  }\n  label: footer-container;\n"], ["\n  display: flex;\n  justify-content: space-evenly;\n  padding: ", " ", ";\n  flex: 0 1 auto;\n  button {\n    margin-left: ", ";\n  }\n  label: footer-container;\n"])), sizes.medium, sizes.large, sizes.small);
var HeaderText = styled(DisplaySmallTypography)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  padding: ", " ", ";\n  label: header-text;\n"], ["\n  padding: ", " ", ";\n  label: header-text;\n"])), sizes.small, sizes.medium);
var CloseButton = styled.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: 0 ", ";\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  label: close-button;\n  margin-left: auto;\n  margin-right: ", ";\n"], ["\n  padding: 0 ", ";\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  label: close-button;\n  margin-left: auto;\n  margin-right: ", ";\n"])), sizes.large, sizes.small);
var SlideInPane = function (_a) {
    var _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, headerText = _a.headerText, buttons = _a.buttons, banner = _a.banner, badge = _a.badge, children = _a.children, headerChildren = _a.headerChildren, _c = _a.showNav, showNav = _c === void 0 ? true : _c, _d = _a.isOverlayOpen, isOverlayOpen = _d === void 0 ? false : _d, onOpen = _a.onOpen, onClose = _a.onClose, onScroll = _a.onScroll, _e = _a.startingPosition, startingPosition = _e === void 0 ? 'right' : _e, _f = _a.width, width = _f === void 0 ? '50rem' : _f, _g = _a.className, className = _g === void 0 ? '' : _g;
    var isOpenRef = useRef(isOpen);
    useEffect(function () {
        if (isOpenRef.current !== isOpen) {
            if (isOpen === true && onOpen) {
                onOpen();
            }
            else if (isOpen === false) {
                onClose();
            }
            isOpenRef.current = isOpen;
        }
    }, [isOpen]);
    var handleCloseButton = function (e) {
        e.stopPropagation();
        onClose();
    };
    var elementToRenderTo = document.querySelector('#remedySlideInPane');
    return (React.createElement("div", { className: className },
        React.createElement(React.Fragment, null,
            ReactDOM.createPortal(React.createElement(Fragment, null,
                React.createElement(OverLayContainer, { isOpen: isOverlayOpen }),
                React.createElement(CSSTransition, { mountOnEnter: true, unmountOnExit: true, in: isOpen, appear: isOpen, classNames: transitionName, onScroll: onScroll, timeout: transitionDuration },
                    React.createElement(PaneContainer, { "data-testid": "pane-container", showNav: showNav, width: width, startingPosition: startingPosition },
                        React.createElement(HeaderContainer, null,
                            React.createElement(HeaderText, { "data-testid": "pane-title" }, headerText),
                            headerChildren,
                            badge && badge.inline && (React.createElement(Badge, { backgroundColor: colors.red1, textColor: colors.red2 }, badge.text)),
                            React.createElement(CloseButton, { onClick: handleCloseButton, "data-testid": "close-pane-button" },
                                React.createElement(Icon, { iconClass: "times", color: colors.cta, iconSize: "4x", weight: "fal" }))),
                        badge && !badge.inline && (React.createElement(BadgeContainer, null,
                            React.createElement(Badge, { backgroundColor: colors.red1, textColor: colors.red2 }, badge.text))),
                        banner && React.createElement(Banner, { type: banner.type }, banner.text),
                        React.createElement(PaneContent, { "data-testid": "pane-body", id: "pane-body" }, children),
                        buttons && React.createElement(FooterContainer, { "data-testid": "pane-footer" }, sortButtonOrder(buttons))))), elementToRenderTo || document.body),
            React.createElement("div", { id: "remedySlideInPane" }))));
};
export default SlideInPane;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=SlideInPane.js.map