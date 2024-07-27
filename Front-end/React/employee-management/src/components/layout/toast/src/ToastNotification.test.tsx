import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToastNotifications, { ToastType } from './ToastNotification';
import { Toast } from './index';
import { colors } from '../../theme/lib/';
import "@testing-library/jest-dom";

describe('Toast', () => {

  const mockRemove = jest.fn();
  const mockToastList: Toast[] = [
    {
      content: 'Hi, I am a mock toast',
      type: ToastType.INFO
    },
    {
      content: 'Second toast',
      type: ToastType.WARNING
    },
    {
      content: 'Custom toast',
      type: ToastType.CUSTOM,
      iconColor: colors.black,
      contentColor: colors.black,
      background: colors.black
    }
  ];

  test('should display Toast if toast content is passed as props', () => {
    const { getByText } = render(<ToastNotifications toasts={mockToastList} remove={mockRemove} />);
    expect(getByText(mockToastList[0].content as string)).toBeInTheDocument();
  });

  test('should display Toast with appropriate styles based on toast type passed as props', () => {
    const { getByText } = render(<ToastNotifications toasts={mockToastList} remove={mockRemove} />);
    expect(getByText(mockToastList[0].content as string).getAttribute('color')).toBe(colors.gray5);
    expect(getByText(mockToastList[1].content as string).getAttribute('color')).toBe(colors.yellow3);
  });

  test('should call remove with index when close toast icon is clicked', () => {
    render(<ToastNotifications toasts={mockToastList} remove={mockRemove} />);
    const icons = document.querySelectorAll('.icon');
    userEvent.click(icons[1]);
    expect(mockRemove).toBeCalledWith(0);
  });

  test('should display toast with custom properties passed as props', () => {
    const { getByText } = render(<ToastNotifications toasts={[mockToastList[2]]} remove={mockRemove} />);
    expect(getByText(mockToastList[2].content as string).getAttribute('color')).toBe(colors.black);
  });
});
