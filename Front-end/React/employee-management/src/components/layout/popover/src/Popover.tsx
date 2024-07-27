import React, { Fragment, useCallback, useEffect } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { boxShadow, colors } from '../../theme/lib/index';

type PopoverProps = {
  toggle: (value: boolean) => void;
  isOpen: boolean;
  content: React.ReactElement;
  children: React.ReactNode;
  position?: 'top' | 'top-end' | 'top-start' | 'bottom' | 'bottom-end' | 'bottom-start' | 'right' | 'left';
  triggerTestId?: string;
  onShow?: () => void;
  onHide?: () => void;
  useContext?: boolean;
};

const popoverStyle = css`
  .tippy-tooltip.remedy-popover-theme {
    border: 1px solid ${colors.gray2};
    border-radius: 0.3rem;
    box-shadow: ${boxShadow};
    background-color: ${colors.white};
    padding: 0px;
    color: ${colors.black};
  }
`;

const StyledContainer = styled('span')`
  cursor: pointer;
`;

const Popover: React.FC<PopoverProps> = ({
  content,
  position = 'bottom',
  children,
  triggerTestId,
  onShow,
  onHide,
  isOpen,
  toggle,
  useContext = false
}) => {
  const handleEsc = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      toggle(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keyup', handleEsc);
    }
    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, [isOpen]);

  const handleToggleOpen = () => {
    toggle(!isOpen);
  };

  const handleOnShow = () => {
    onShow && onShow();
  };

  const handleOnHide = () => {
    onHide && onHide();
  };

  const handleClickAway = () => {
    if (isOpen) {
      toggle(false);
    }
  };

  return (
    <Fragment>
      <Global styles={popoverStyle} />
      <Tooltip
        useContext={useContext}
        animateFill={false}
        animation="fade"
        duration={200}
        html={content}
        position={position}
        arrow={false}
        theme="remedy-popover"
        onShown={handleOnShow}
        onHidden={handleOnHide}
        onRequestClose={handleClickAway}
        trigger="manual"
        interactive
        open={isOpen}
        popperOptions={{
          modifiers: {
            preventOverflow: {
              boundariesElement: 'window'
            }
          }
        }}>
        <StyledContainer onClick={handleToggleOpen} data-testid={triggerTestId}>
          {children}
        </StyledContainer>
      </Tooltip>
    </Fragment>
  );
};

export default Popover;
