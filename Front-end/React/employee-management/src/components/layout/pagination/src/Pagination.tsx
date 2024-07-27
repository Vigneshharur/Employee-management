import React, { ReactNode, useRef } from 'react';
import styled from '@emotion/styled';

import Button, { StyleType } from '../../button/lib';
import Icon from '../../icon/lib';
import Input from '../../input/lib';
import { colors, sizes } from '../../theme/lib';
import { StandardSemiBoldTypography } from '../../typography/lib';

const PaginationLayout = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPageJumpContainer = styled.div`
  margin-left: ${sizes.small};
  & input {
    display: inline;
    width: ${sizes.xxLarge};
    height: ${sizes.medium};
    margin: 0;
    margin-left: ${sizes.small};
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & span {
    display: none;
  }
  & label {
    font-weight: 400;
  }
`;

const StyledMorePages = styled.div`
  min-width: ${sizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid invisible;
  margin: 0 0.3rem;
`;

const StyledArrowButton = styled(Button)`
  height: ${sizes.medium};
  width: ${sizes.medium};
  background-color: ${colors.gray1};
  margin: 0 0.3rem;
  &:disabled {
    background-color: ${colors.gray1};
  }
`;

const StyledPageButton = styled(Button)`
  height: ${sizes.medium};
  width: ${sizes.medium};
  border: 1px solid ${colors.gray3};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.3rem;
  color: ${colors.gray4};
  font-weight: 400;
  padding: 0;
`;

const StyledCurrentPageNumber = styled(StandardSemiBoldTypography)`
  color: ${colors.navy};
  border-color: ${colors.navy};
  height: ${sizes.medium};
  width: ${sizes.medium};
  border: 1px solid ${colors.purple4};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.3rem;
`;

const morePages = (key = 'moreForward') => (
  <StyledMorePages key={key}>
    <Icon iconClass="ellipsis-h" color={colors.gray4} />
  </StyledMorePages>
);

type PaginationProps = {
  activePageNumber: number;
  totalPages: number;
  updateActivePageNumber: (pageNumber: number) => void;
  inFlight?: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ activePageNumber, totalPages, updateActivePageNumber, inFlight }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (totalPages <= 1) {
    return null;
  }

  const handleUpdatePage = (pageNumber: number) => {
    if (!inFlight) {
      updateActivePageNumber(pageNumber);
    }
  };

  function renderForwardArrow(): ReactNode {
    const isDisabled = activePageNumber >= totalPages;
    return (
      <StyledArrowButton
        testId="pagination-forward-arrow"
        aria-label="Select next page"
        styleType={StyleType.TERTIARY}
        disabled={isDisabled}
        onClick={(): void => handleUpdatePage(activePageNumber + 1)}>
        <Icon iconClass="angle-right" color={colors.purple4} />
      </StyledArrowButton>
    );
  }

  function renderBackArrow(): ReactNode {
    const isDisabled = activePageNumber <= 1;
    return (
      <StyledArrowButton
        testId="pagination-back-arrow"
        aria-label="Select previous page"
        styleType={StyleType.TERTIARY}
        disabled={isDisabled}
        onClick={(): void => handleUpdatePage(activePageNumber - 1)}>
        <Icon iconClass="angle-left" color={colors.purple4} />
      </StyledArrowButton>
    );
  }

  function createPageLink(pageNum: number): ReactNode {
    return (
      <StyledPageButton
        key={`pageNum${pageNum}`}
        testId={`link-page-${pageNum}`}
        styleType={StyleType.SECONDARY}
        onClick={(): void => handleUpdatePage(pageNum)}>
        {pageNum}
      </StyledPageButton>
    );
  }

  function createCurrentPage(): ReactNode {
    return <StyledCurrentPageNumber key="currentPage">{activePageNumber}</StyledCurrentPageNumber>;
  }

  const buildSequence = (startingValue: number, endingValue: number) => {
    const sequenceOfPages = [];
    for (let pageNum = startingValue; pageNum <= endingValue; pageNum++) {
      const linkType = pageNum === activePageNumber ? createCurrentPage() : createPageLink(pageNum);
      sequenceOfPages.push(linkType);
    }
    return sequenceOfPages;
  };

  const renderPages = () => {
    //the goal is to generally show 8 blocks(numbers or ellipsis)
    // (first page, -2 from  active page, active page, +1 from active page, last page),
    // with buffers up to 8 numbers to avoid show ellipsis when we could just show the number.
    // ie: 1...3 - show 123, 18...20 - show 18 19 20
    const showAllPages = totalPages <= 8;
    const closeToBeginning = activePageNumber <= 5;
    const closeToEnd = activePageNumber + 4 >= totalPages;

    if (showAllPages) {
      return buildSequence(1, totalPages);
    }

    if (closeToBeginning) {
      return [...buildSequence(1, 6), morePages(), createPageLink(totalPages)];
    }

    if (closeToEnd) {
      return [createPageLink(1), morePages(), ...buildSequence(totalPages - 5, totalPages)];
    }
    //The active page is in the middle of the series - subtract 2 pages, add 1
    return [
      createPageLink(1),
      morePages('moreBackward'),
      ...buildSequence(activePageNumber - 2, activePageNumber + 1),
      morePages(),
      createPageLink(totalPages)
    ];
  };

  function jumpToPage(): void {
    const newValue = parseInt(inputRef?.current?.value || '0');
    if (newValue > 0 && newValue <= totalPages && newValue !== activePageNumber) {
      updateActivePageNumber(newValue);
      if (inputRef?.current) {
        inputRef.current.value = '';
      }
    }
  }

  function handleOnKeyDown(event: React.KeyboardEvent): void {
    if (event.key === 'Enter') {
      jumpToPage();
    }
  }

  const renderPageJump = () => {
    return (
      <Input
        id="jumpToPageInput"
        labelText="Go to page"
        ref={inputRef}
        type="number"
        onBlur={jumpToPage}
        onKeyDown={handleOnKeyDown}
      />
    );
  };

  return (
    <PaginationLayout>
      {renderBackArrow()}
      {renderPages()}
      {renderForwardArrow()}
      {totalPages > 9 && <StyledPageJumpContainer>{renderPageJump()}</StyledPageJumpContainer>}
    </PaginationLayout>
  );
};

export default Pagination;
