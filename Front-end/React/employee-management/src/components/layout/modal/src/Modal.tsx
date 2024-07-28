import React, { MouseEvent, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import Icon from '../../icon/lib/';
import { DisplaySmallTypography } from '../../typography/lib/';
import { colors, sizes, boxShadow, zIndices } from '../../theme/lib/';
import Banner, { BannerTypes } from '../../banner/lib/';
import { StyleType, ButtonStyleProps, sortButtonOrder } from '../../button/lib';

type OverLayContainerProps = {
  isOpen: boolean;
};

const OverLayContainer = styled.div<OverLayContainerProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: ${zIndices.modal};
  label: overlay-container;
`;

const ModalContainer = styled.div`
  label: modal-container;
  display: inline-block;
  margin-top: ${sizes.xLarge};
  padding-top: ${sizes.small};
  padding-bottom: ${sizes.large};
  box-shadow: ${boxShadow};
  border-radius: 0.3rem;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  background-color: ${colors.white};
`;

const ModalContent = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  label: modal-content;
  padding: ${sizes.medium} ${sizes.large} 0 ${sizes.large};
`;
type HeaderContainerProps = {
  empty: boolean;
};

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  border-bottom: ${(props) => (props.empty ? 'none' : `1px solid ${colors.gray2}`)};
  label: header-container;
  padding-bottom: ${sizes.small};
`;

const FooterContainer = styled.div`
  margin: ${sizes.large} ${sizes.large} 0 ${sizes.large};
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  label: footer-container;
`;

const PrimaryButtonContainer = styled('span')`
  button {
    margin-left: ${sizes.small};
  }
`;
const SecondaryButtonContainer = styled('span')`
  button {
    margin-right: ${sizes.small};
  }
`;

const HeaderText = styled(DisplaySmallTypography)`
  padding: 0 ${sizes.large};
  label: header-text;
`;

const CloseButton = styled.button`
  padding: 0 ${sizes.large};
  display: flex;
  justify-content: center;
  align-items: end;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  label: close-button;
`;

type ModalProps = {
  isOpen?: boolean;
  hideModal?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  children?: React.ReactNode;
  headerText?: string | React.ReactNode;
  banner?: { type: BannerTypes; text: string };
  className?: string;
  buttons?: ButtonStyleProps[];
  secondaryButtons?: ButtonStyleProps[];
  id?: string | number;
};

const Modal: React.FC<ModalProps> = ({
  id = '',
  isOpen = true,
  hideModal,
  children,
  headerText,
  className,
  banner,
  buttons,
  secondaryButtons
}) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  if (!isOpen) {
    return null;
  }

  const handleHideModal = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const eventTarget = e.target as Node;
    if (modalContainerRef?.current?.contains(eventTarget) && !modalCloseRef?.current?.contains(eventTarget)) {
      return;
    }
    e.stopPropagation();
    if (hideModal) {
      hideModal(e);
    }
  };

  let elementToRenderTo = document.querySelector('#modal-content');
  if (!elementToRenderTo) {
    elementToRenderTo = document.createElement('div');
    document.body.appendChild(elementToRenderTo);
  }
  const showHeader = headerText || hideModal;

  return ReactDOM.createPortal(
    <OverLayContainer data-testid="modal-overlay" isOpen={isOpen} onClick={handleHideModal}>
      <ModalContainer data-testid="modal-container" className={className} ref={modalContainerRef}>
        {showHeader && (
          <HeaderContainer empty={!headerText}>
            <HeaderText data-testid="modal-title">{headerText}</HeaderText>
            {hideModal && (
              <CloseButton ref={modalCloseRef} onClick={handleHideModal} data-testid="close-modal-button">
                <Icon iconClass="times" color={colors.cta} iconSize="3x" weight="fal" />
              </CloseButton>
            )}
          </HeaderContainer>
        )}
        {banner && <Banner type={banner.type}>{banner.text}</Banner>}
        <ModalContent data-testid="modal-body" id={id ? `modal-body-${id}` : 'modal-body'}>
          {children}
        </ModalContent>
        {(buttons || secondaryButtons) && (
          <FooterContainer data-testid="modal-footer">
            <SecondaryButtonContainer>{sortButtonOrder(secondaryButtons)}</SecondaryButtonContainer>
            <PrimaryButtonContainer>{sortButtonOrder(buttons)}</PrimaryButtonContainer>
          </FooterContainer>
        )}
      </ModalContainer>
    </OverLayContainer>,
    elementToRenderTo
  );
};

export default Modal;
