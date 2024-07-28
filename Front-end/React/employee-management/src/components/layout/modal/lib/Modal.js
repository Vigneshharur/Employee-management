var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import Icon from '../../icon/lib/';
import { DisplaySmallTypography } from '../../typography/lib/';
import { colors, sizes, boxShadow, zIndices } from '../../theme/lib/';
import Banner from '../../banner/lib/';
import { sortButtonOrder } from '../../button/lib';
var OverLayContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  justify-content: center;\n  align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: ", ";\n  label: overlay-container;\n"], ["\n  display: ", ";\n  justify-content: center;\n  align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: ", ";\n  label: overlay-container;\n"])), function (props) { return (props.isOpen ? 'flex' : 'none'); }, zIndices.modal);
var ModalContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  label: modal-container;\n  display: inline-block;\n  margin-top: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  box-shadow: ", ";\n  border-radius: 0.3rem;\n  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: ", ";\n"], ["\n  label: modal-container;\n  display: inline-block;\n  margin-top: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  box-shadow: ", ";\n  border-radius: 0.3rem;\n  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: ", ";\n"])), sizes.xLarge, sizes.small, sizes.large, boxShadow, colors.white);
var ModalContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-height: 60vh;\n  overflow-y: auto;\n  label: modal-content;\n  padding: ", " ", " 0 ", ";\n"], ["\n  max-height: 60vh;\n  overflow-y: auto;\n  label: modal-content;\n  padding: ", " ", " 0 ", ";\n"])), sizes.medium, sizes.large, sizes.large);
var HeaderContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: default;\n  border-bottom: ", ";\n  label: header-container;\n  padding-bottom: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: default;\n  border-bottom: ", ";\n  label: header-container;\n  padding-bottom: ", ";\n"])), function (props) { return (props.empty ? 'none' : "1px solid " + colors.gray2); }, sizes.small);
var FooterContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: ", " ", " 0 ", ";\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  label: footer-container;\n"], ["\n  margin: ", " ", " 0 ", ";\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  label: footer-container;\n"])), sizes.large, sizes.large, sizes.large);
var PrimaryButtonContainer = styled('span')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  button {\n    margin-left: ", ";\n  }\n"], ["\n  button {\n    margin-left: ", ";\n  }\n"])), sizes.small);
var SecondaryButtonContainer = styled('span')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  button {\n    margin-right: ", ";\n  }\n"], ["\n  button {\n    margin-right: ", ";\n  }\n"])), sizes.small);
var HeaderText = styled(DisplaySmallTypography)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: 0 ", ";\n  label: header-text;\n"], ["\n  padding: 0 ", ";\n  label: header-text;\n"])), sizes.large);
var CloseButton = styled.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 0 ", ";\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  label: close-button;\n"], ["\n  padding: 0 ", ";\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  label: close-button;\n"])), sizes.large);
var Modal = function (_a) {
    var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.isOpen, isOpen = _c === void 0 ? true : _c, hideModal = _a.hideModal, children = _a.children, headerText = _a.headerText, className = _a.className, banner = _a.banner, buttons = _a.buttons, secondaryButtons = _a.secondaryButtons;
    var modalContainerRef = useRef(null);
    var modalCloseRef = useRef(null);
    if (!isOpen) {
        return null;
    }
    var handleHideModal = function (e) {
        var _a, _b;
        var eventTarget = e.target;
        if (((_a = modalContainerRef === null || modalContainerRef === void 0 ? void 0 : modalContainerRef.current) === null || _a === void 0 ? void 0 : _a.contains(eventTarget)) && !((_b = modalCloseRef === null || modalCloseRef === void 0 ? void 0 : modalCloseRef.current) === null || _b === void 0 ? void 0 : _b.contains(eventTarget))) {
            return;
        }
        e.stopPropagation();
        if (hideModal) {
            hideModal(e);
        }
    };
    var elementToRenderTo = document.querySelector('#modal-content');
    if (!elementToRenderTo) {
        elementToRenderTo = document.createElement('div');
        document.body.appendChild(elementToRenderTo);
    }
    var showHeader = headerText || hideModal;
    return ReactDOM.createPortal(React.createElement(OverLayContainer, { "data-testid": "modal-overlay", isOpen: isOpen, onClick: handleHideModal },
        React.createElement(ModalContainer, { "data-testid": "modal-container", className: className, ref: modalContainerRef },
            showHeader && (React.createElement(HeaderContainer, { empty: !headerText },
                React.createElement(HeaderText, { "data-testid": "modal-title" }, headerText),
                hideModal && (React.createElement(CloseButton, { ref: modalCloseRef, onClick: handleHideModal, "data-testid": "close-modal-button" },
                    React.createElement(Icon, { iconClass: "times", color: colors.cta, iconSize: "3x", weight: "fal" }))))),
            banner && React.createElement(Banner, { type: banner.type }, banner.text),
            React.createElement(ModalContent, { "data-testid": "modal-body", id: id ? "modal-body-" + id : 'modal-body' }, children),
            (buttons || secondaryButtons) && (React.createElement(FooterContainer, { "data-testid": "modal-footer" },
                React.createElement(SecondaryButtonContainer, null, sortButtonOrder(secondaryButtons)),
                React.createElement(PrimaryButtonContainer, null, sortButtonOrder(buttons)))))), elementToRenderTo);
};
export default Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Modal.js.map