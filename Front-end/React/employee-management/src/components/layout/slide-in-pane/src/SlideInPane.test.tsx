import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import SlideInPane from './SlideInPane';
import Button from '../../button/lib/';
import "@testing-library/jest-dom";

const hideSlideInPaneSpy = jest.fn();

describe('SlideInPane', () => {
  const headerText = 'Header content';
  const bodyText = 'Body content';

  it('renders slide in pane with correct body content when isOpen is true', () => {
    const { queryByText } = render(
      <SlideInPane headerText={headerText} onClose={hideSlideInPaneSpy} isOpen={true}>
        {bodyText}
      </SlideInPane>
    );
    expect(queryByText(bodyText)).toBeInTheDocument();
  });

  it('hides Pane when isOpen is false', () => {
    const { queryByText } = render(
      <SlideInPane headerText={headerText} onClose={hideSlideInPaneSpy} isOpen={false}>
        {bodyText}
      </SlideInPane>
    );
    expect(queryByText(bodyText)).not.toBeInTheDocument();
  });

  it('renders header text', () => {
    const { queryByText } = render(
      <SlideInPane headerText={headerText} onClose={hideSlideInPaneSpy} isOpen={true}>
        Body content
      </SlideInPane>
    );
    expect(queryByText(headerText)).toBeInTheDocument();
  });

  it('calls hideSlideInPane', () => {
    const { getByTestId } = render(
      <SlideInPane headerText={headerText} onClose={hideSlideInPaneSpy} isOpen={true}>
        Body content
      </SlideInPane>
    );
    fireEvent.click(getByTestId('close-pane-button'));
    expect(hideSlideInPaneSpy).toHaveBeenCalledTimes(1);
  });

  it('renders close icon', () => {
    const { queryByTestId } = render(
      <SlideInPane headerText={headerText} onClose={hideSlideInPaneSpy} isOpen={true}>
        Body content
      </SlideInPane>
    );
    expect(queryByTestId('close-pane-button')).toBeTruthy();
  });

  it('renders buttons if buttons prop is set', () => {
    const buttonOnClick = jest.fn();
    const getButtons = () => {
      return [
        <Button key="my-button" onClick={buttonOnClick}>
          My Button
        </Button>
      ];
    };
    const { findByText } = render(
      <SlideInPane headerText={headerText} onClose={hideSlideInPaneSpy} isOpen={true} buttons={getButtons()}>
        Body content
      </SlideInPane>
    );
    expect(findByText('My Button')).toBeTruthy();
  });
});
