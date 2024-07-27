import React, { Fragment, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from '@emotion/styled';

import Icon from '../../icon/lib';
import { DisplaySmallTypography } from '../../typography/lib/';
import { boxShadow, colors, sizes } from '../../theme/lib';
import Banner, { BannerTypes } from '../../banner/lib/';
import Badge from '../../badge/lib/';
import { ButtonStyleProps, sortButtonOrder } from '../../button/lib';

type OverLayContainerProps = {
  isOpen: boolean;
};
const OverLayContainer = styled('div')<OverLayContainerProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0.7;
  background-color: white;
  z-index: 150;
  label: overlay-container;
`;

const transitionDuration = 600;
const transitionName = `slide-in-pane-transition`;

type PaneContainerProps = {
  showNav: boolean;
  startingPosition: 'left' | 'right';
  width: string;
};
const PaneContainer = styled('div')<PaneContainerProps>`
  z-index: 161;
  background: ${colors.white};
  border-left: 1px solid ${colors.gray3};
  border-top: 1px solid ${colors.gray3};
  box-shadow: ${boxShadow};
  position: fixed;
  height: ${({ showNav }) => (showNav ? 'calc(100% - 5rem)' : '100%')};
  padding: 0;
  top: ${({ showNav }) => (showNav ? sizes.xLarge : 0)};
  width: ${({ width }) => width};
  margin-top: 0;
  margin-bottom: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  ${({ startingPosition }) => {
    return { [startingPosition]: 0 };
  }};
  &.${transitionName}-enter, &.${transitionName}-appear {
    transform: translateX(${({ startingPosition, width }) => (startingPosition === 'right' ? width : `-${width}`)});
  }

  &.${transitionName}-enter-active, &.${transitionName}-appear-active {
    transform: translateX(0rem);
    transition: all ${transitionDuration}ms ease-in-out;
  }

  &.${transitionName}-exit {
    transform: translateX(0rem);
  }

  &.${transitionName}-exit-active {
    transform: translateX(${({ startingPosition, width }) => (startingPosition === 'right' ? width : `-${width}`)});
    transition: all ${transitionDuration}ms ease-in-out;
  }
  label: pane-container;
`;

const PaneContent = styled.div`
  padding: 0 ${sizes.large} ${sizes.medium} ${sizes.large};
  flex: 1 1 auto;
  overflow-y: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 auto;
  height: 7.6rem;
  cursor: default;
  label: header-container;
`;

const BadgeContainer = styled.div`
  padding: 0 ${sizes.large} ${sizes.small} ${sizes.medium};
  width: fit-content;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: ${sizes.medium} ${sizes.large};
  flex: 0 1 auto;
  button {
    margin-left: ${sizes.small};
  }
  label: footer-container;
`;

const HeaderText = styled(DisplaySmallTypography)`
  padding: ${sizes.small} ${sizes.medium};
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
  margin-left: auto;
  margin-right: ${sizes.small};
`;

type SlideInPaneProps = {
  isOpen?: boolean;
  headerText?: string;
  buttons?: ButtonStyleProps[];
  banner?: { type: BannerTypes; text: string };
  badge?: { text: string; inline: boolean };
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  showNav?: boolean;
  isOverlayOpen?: boolean;
  onOpen?: Function;
  onClose: Function;
  onScroll?: Function;
  startingPosition?: 'right' | 'left';
  width?: string;
  className?: string;
};

const SlideInPane = ({
  isOpen = false,
  headerText,
  buttons,
  banner,
  badge,
  children,
  headerChildren,
  showNav = true,
  isOverlayOpen = false,
  onOpen,
  onClose,
  onScroll,
  startingPosition = 'right',
  width = '50rem',
  className = ''
}: SlideInPaneProps) => {
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    if (isOpenRef.current !== isOpen) {
      if (isOpen === true && onOpen) {
        onOpen();
      } else if (isOpen === false) {
        onClose();
      }
      isOpenRef.current = isOpen;
    }
  }, [isOpen]);

  const handleCloseButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose();
  };

  const elementToRenderTo = document.querySelector('#remedySlideInPane');

  return (
    <div className={className}>
      <>
        {ReactDOM.createPortal(
          <Fragment>
            <OverLayContainer isOpen={isOverlayOpen} />
            <CSSTransition
              mountOnEnter
              unmountOnExit
              in={isOpen}
              appear={isOpen}
              classNames={transitionName}
              onScroll={onScroll}
              timeout={transitionDuration}>
              <PaneContainer
                data-testid="pane-container"
                showNav={showNav}
                width={width}
                startingPosition={startingPosition}>
                <HeaderContainer>
                  <HeaderText data-testid="pane-title">{headerText}</HeaderText>
                  {headerChildren}
                  {badge && badge.inline && (
                    <Badge backgroundColor={colors.red1} textColor={colors.red2}>
                      {badge.text}
                    </Badge>
                  )}
                  <CloseButton onClick={handleCloseButton} data-testid="close-pane-button">
                    <Icon iconClass="times" color={colors.cta} iconSize="4x" weight="fal" />
                  </CloseButton>
                </HeaderContainer>
                {badge && !badge.inline && (
                  <BadgeContainer>
                    <Badge backgroundColor={colors.red1} textColor={colors.red2}>
                      {badge.text}
                    </Badge>
                  </BadgeContainer>
                )}
                {banner && <Banner type={banner.type}>{banner.text}</Banner>}
                <PaneContent data-testid="pane-body" id="pane-body">
                  {children}
                </PaneContent>
                {buttons && <FooterContainer data-testid="pane-footer">{sortButtonOrder(buttons)}</FooterContainer>}
              </PaneContainer>
            </CSSTransition>
          </Fragment>,
          elementToRenderTo || document.body
        )}
        <div id="remedySlideInPane" />
      </>
    </div>
  );
};

export default SlideInPane;
