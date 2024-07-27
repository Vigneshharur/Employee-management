import React from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { IconName } from '@fortawesome/fontawesome-common-types';
import Icon from '../../icon/lib/';
import { boxShadow, colors, sizes } from '../../theme/lib/';
import { SmallTypography } from '../../typography/lib/';

export enum ToastType {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  INFO = 'INFO',
  ERROR = 'ERROR',
  PATIENT_SAFETY = 'PATIENT SAFETY',
  CUSTOM = 'CUSTOM'
}

export interface ToastInterface {
  background?: string;
  className?: string;
  content: React.ReactNode;
  contentColor?: string;
  iconColor?: string;
  iconClass?: IconName;
  type: ToastType;
}

const getIconByType = (type: ToastType, iconClass?: IconName): IconName => {
  switch (type) {
    case ToastType.CUSTOM:
      return iconClass ? iconClass : 'info-circle';
    case ToastType.ERROR:
    case ToastType.PATIENT_SAFETY:
      return 'exclamation-circle';
    case ToastType.SUCCESS:
      return 'check-circle';
    case ToastType.WARNING:
      return 'exclamation-triangle';
    case ToastType.INFO:
    default:
      return 'info-circle';
  }
};

const getContentColorByType = (type: ToastType, customColor?: string): string => {
  switch (type) {
    case ToastType.CUSTOM:
      return customColor ? customColor : colors.gray5;
    case ToastType.ERROR:
    case ToastType.PATIENT_SAFETY:
      return colors.red2;
    case ToastType.SUCCESS:
      return colors.green3;
    case ToastType.WARNING:
      return colors.yellow3;
    case ToastType.INFO:
    default:
      return colors.gray5;
  }
};

const getIconColorByType = (type: ToastType, customIconColor?: string): string => {
  switch (type) {
    case ToastType.CUSTOM:
      return customIconColor ? customIconColor : colors.purple3;
    case ToastType.ERROR:
    case ToastType.PATIENT_SAFETY:
      return colors.red2;
    case ToastType.SUCCESS:
      return colors.green2;
    case ToastType.WARNING:
      return colors.yellow2;
    case ToastType.INFO:
    default:
      return colors.purple3;
  }
};

const ToastWrapper = styled('div')`
  position: fixed;
  top: 10rem;
  z-index: 10000;
  right: 0;
`;

const SlideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
   transform: translateX(0);
  }
`;

const StyledToast = styled('div')<{ type: ToastType; customBackground?: string; customIconColor?: string }>`
  display: flex;
  align-items: center;
  width: 33rem;
  min-height: ${sizes.xLarge};
  box-shadow: ${boxShadow};
  margin-bottom: ${sizes.xSmall};
  padding: ${sizes.xSmall};
  transition: transform 0.6s ease-in-out;
  animation: ${SlideInRight} 0.7s;
  .content {
    min-width: 23rem;
  }
  & > .icon {
    padding: ${sizes.xSmall};
    color: ${({ type, customIconColor }): string => getIconColorByType(type, customIconColor)};
  }
  background: ${({ type, customBackground }): string => {
    switch (type) {
      case ToastType.WARNING:
        return colors.yellow1;
      case ToastType.SUCCESS:
        return colors.green1;
      case ToastType.ERROR:
      case ToastType.PATIENT_SAFETY:
        return colors.red1;
      case ToastType.CUSTOM:
        return customBackground ? customBackground : colors.purple1;
      case ToastType.INFO:
      default:
        return colors.purple1;
    }
  }};
`;

type ToastNotificationProps = {
  toasts: ToastInterface[];
  remove: (index: number) => void;
};

const ToastNotification: React.FC<ToastNotificationProps> = ({ toasts, remove }) =>
  createPortal(
    <ToastWrapper>
      {toasts.map((toast, index) => (
        <StyledToast
          key={index}
          type={toast.type}
          customBackground={toast.background}
          customIconColor={toast.iconColor}
          className={toast.className}>
          <div className="icon">
            <Icon iconClass={getIconByType(toast.type, toast.iconClass)} iconSize="2x" weight="fal" />
          </div>

          <div className="content">
            <SmallTypography color={getContentColorByType(toast.type, toast.contentColor)}>
              {toast.content}
            </SmallTypography>
          </div>

          <div className="icon" onClick={() => remove(index)}>
            <Icon className="icon" iconClass="times" iconSize="2x" weight="fal" />
          </div>
        </StyledToast>
      ))}
    </ToastWrapper>,
    document.querySelector('body') as HTMLElement
  );

export default ToastNotification;
