var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment, useCallback, useEffect } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { boxShadow, colors } from '../../theme/lib/index';
var popoverStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .tippy-tooltip.remedy-popover-theme {\n    border: 1px solid ", ";\n    border-radius: 0.3rem;\n    box-shadow: ", ";\n    background-color: ", ";\n    padding: 0px;\n    color: ", ";\n  }\n"], ["\n  .tippy-tooltip.remedy-popover-theme {\n    border: 1px solid ", ";\n    border-radius: 0.3rem;\n    box-shadow: ", ";\n    background-color: ", ";\n    padding: 0px;\n    color: ", ";\n  }\n"])), colors.gray2, boxShadow, colors.white, colors.black);
var StyledContainer = styled('span')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var Popover = function (_a) {
    var content = _a.content, _b = _a.position, position = _b === void 0 ? 'bottom' : _b, children = _a.children, triggerTestId = _a.triggerTestId, onShow = _a.onShow, onHide = _a.onHide, isOpen = _a.isOpen, toggle = _a.toggle, _c = _a.useContext, useContext = _c === void 0 ? false : _c;
    var handleEsc = useCallback(function (event) {
        if (event.key === 'Escape') {
            toggle(false);
        }
    }, []);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keyup', handleEsc);
        }
        return function () {
            window.removeEventListener('keyup', handleEsc);
        };
    }, [isOpen]);
    var handleToggleOpen = function () {
        toggle(!isOpen);
    };
    var handleOnShow = function () {
        onShow && onShow();
    };
    var handleOnHide = function () {
        onHide && onHide();
    };
    var handleClickAway = function () {
        if (isOpen) {
            toggle(false);
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement(Global, { styles: popoverStyle }),
        React.createElement(Tooltip, { useContext: useContext, animateFill: false, animation: "fade", duration: 200, html: content, position: position, arrow: false, theme: "remedy-popover", onShown: handleOnShow, onHidden: handleOnHide, onRequestClose: handleClickAway, trigger: "manual", interactive: true, open: isOpen, popperOptions: {
                modifiers: {
                    preventOverflow: {
                        boundariesElement: 'window'
                    }
                }
            } },
            React.createElement(StyledContainer, { onClick: handleToggleOpen, "data-testid": triggerTestId }, children))));
};
export default Popover;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Popover.js.map