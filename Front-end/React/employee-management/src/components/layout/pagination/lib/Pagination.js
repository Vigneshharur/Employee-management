var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Button, { StyleType } from '../../button/lib';
import Icon from '../../icon/lib';
import Input from '../../input/lib';
import { colors, sizes } from '../../theme/lib';
import { StandardSemiBoldTypography } from '../../typography/lib';
var PaginationLayout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var StyledPageJumpContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: ", ";\n  & input {\n    display: inline;\n    width: ", ";\n    height: ", ";\n    margin: 0;\n    margin-left: ", ";\n  }\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  & span {\n    display: none;\n  }\n  & label {\n    font-weight: 400;\n  }\n"], ["\n  margin-left: ", ";\n  & input {\n    display: inline;\n    width: ", ";\n    height: ", ";\n    margin: 0;\n    margin-left: ", ";\n  }\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  & span {\n    display: none;\n  }\n  & label {\n    font-weight: 400;\n  }\n"])), sizes.small, sizes.xxLarge, sizes.medium, sizes.small);
var StyledMorePages = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid invisible;\n  margin: 0 0.3rem;\n"], ["\n  min-width: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid invisible;\n  margin: 0 0.3rem;\n"])), sizes.medium);
var StyledArrowButton = styled(Button)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  background-color: ", ";\n  margin: 0 0.3rem;\n  &:disabled {\n    background-color: ", ";\n  }\n"], ["\n  height: ", ";\n  width: ", ";\n  background-color: ", ";\n  margin: 0 0.3rem;\n  &:disabled {\n    background-color: ", ";\n  }\n"])), sizes.medium, sizes.medium, colors.gray1, colors.gray1);
var StyledPageButton = styled(Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n  color: ", ";\n  font-weight: 400;\n  padding: 0;\n"], ["\n  height: ", ";\n  width: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n  color: ", ";\n  font-weight: 400;\n  padding: 0;\n"])), sizes.medium, sizes.medium, colors.gray3, colors.gray4);
var StyledCurrentPageNumber = styled(StandardSemiBoldTypography)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  border-color: ", ";\n  height: ", ";\n  width: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n"], ["\n  color: ", ";\n  border-color: ", ";\n  height: ", ";\n  width: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.3rem;\n"])), colors.navy, colors.navy, sizes.medium, sizes.medium, colors.purple4);
var morePages = function (key) {
    if (key === void 0) { key = 'moreForward'; }
    return (React.createElement(StyledMorePages, { key: key },
        React.createElement(Icon, { iconClass: "ellipsis-h", color: colors.gray4 })));
};
var Pagination = function (_a) {
    var activePageNumber = _a.activePageNumber, totalPages = _a.totalPages, updateActivePageNumber = _a.updateActivePageNumber, inFlight = _a.inFlight;
    var inputRef = useRef(null);
    if (totalPages <= 1) {
        return null;
    }
    var handleUpdatePage = function (pageNumber) {
        if (!inFlight) {
            updateActivePageNumber(pageNumber);
        }
    };
    function renderForwardArrow() {
        var isDisabled = activePageNumber >= totalPages;
        return (React.createElement(StyledArrowButton, { testId: "pagination-forward-arrow", "aria-label": "Select next page", styleType: StyleType.TERTIARY, disabled: isDisabled, onClick: function () { return handleUpdatePage(activePageNumber + 1); } },
            React.createElement(Icon, { iconClass: "angle-right", color: colors.purple4 })));
    }
    function renderBackArrow() {
        var isDisabled = activePageNumber <= 1;
        return (React.createElement(StyledArrowButton, { testId: "pagination-back-arrow", "aria-label": "Select previous page", styleType: StyleType.TERTIARY, disabled: isDisabled, onClick: function () { return handleUpdatePage(activePageNumber - 1); } },
            React.createElement(Icon, { iconClass: "angle-left", color: colors.purple4 })));
    }
    function createPageLink(pageNum) {
        return (React.createElement(StyledPageButton, { key: "pageNum" + pageNum, testId: "link-page-" + pageNum, styleType: StyleType.SECONDARY, onClick: function () { return handleUpdatePage(pageNum); } }, pageNum));
    }
    function createCurrentPage() {
        return React.createElement(StyledCurrentPageNumber, { key: "currentPage" }, activePageNumber);
    }
    var buildSequence = function (startingValue, endingValue) {
        var sequenceOfPages = [];
        for (var pageNum = startingValue; pageNum <= endingValue; pageNum++) {
            var linkType = pageNum === activePageNumber ? createCurrentPage() : createPageLink(pageNum);
            sequenceOfPages.push(linkType);
        }
        return sequenceOfPages;
    };
    var renderPages = function () {
        //the goal is to generally show 8 blocks(numbers or ellipsis)
        // (first page, -2 from  active page, active page, +1 from active page, last page),
        // with buffers up to 8 numbers to avoid show ellipsis when we could just show the number.
        // ie: 1...3 - show 123, 18...20 - show 18 19 20
        var showAllPages = totalPages <= 8;
        var closeToBeginning = activePageNumber <= 5;
        var closeToEnd = activePageNumber + 4 >= totalPages;
        if (showAllPages) {
            return buildSequence(1, totalPages);
        }
        if (closeToBeginning) {
            return __spreadArrays(buildSequence(1, 6), [morePages(), createPageLink(totalPages)]);
        }
        if (closeToEnd) {
            return __spreadArrays([createPageLink(1), morePages()], buildSequence(totalPages - 5, totalPages));
        }
        //The active page is in the middle of the series - subtract 2 pages, add 1
        return __spreadArrays([
            createPageLink(1),
            morePages('moreBackward')
        ], buildSequence(activePageNumber - 2, activePageNumber + 1), [
            morePages(),
            createPageLink(totalPages)
        ]);
    };
    function jumpToPage() {
        var _a;
        var newValue = parseInt(((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.value) || '0');
        if (newValue > 0 && newValue <= totalPages && newValue !== activePageNumber) {
            updateActivePageNumber(newValue);
            if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }
    function handleOnKeyDown(event) {
        if (event.key === 'Enter') {
            jumpToPage();
        }
    }
    var renderPageJump = function () {
        return (React.createElement(Input, { id: "jumpToPageInput", labelText: "Go to page", ref: inputRef, type: "number", onBlur: jumpToPage, onKeyDown: handleOnKeyDown }));
    };
    return (React.createElement(PaginationLayout, null,
        renderBackArrow(),
        renderPages(),
        renderForwardArrow(),
        totalPages > 9 && React.createElement(StyledPageJumpContainer, null, renderPageJump())));
};
export default Pagination;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Pagination.js.map