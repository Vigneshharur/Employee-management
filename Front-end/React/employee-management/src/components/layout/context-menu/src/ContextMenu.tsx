import React, { Fragment, useRef, useState } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { boxShadow, colors, sizes } from '../../theme';
import { StandardTypography } from '../../typography/lib/';

type ToolTipProps = {
  position?: 'top' | 'top-end' | 'top-start' | 'bottom' | 'bottom-end' | 'bottom-start' | 'right' | 'left';
  children: React.ReactNode;
  menuTestId?: string;
  triggerTestId?: string;
  onShow?: () => void;
  onHide?: () => void;
  menuItems: { label: string; action: () => void }[];
  useContext?: boolean;
};

const remedyContextMenuStyle = css`
  .tippy-tooltip.remedy-contextMenu-theme {
    box-shadow: ${boxShadow};
    background-color: ${colors.white};
    padding: 0;
  }
`;

const StyledMenu = styled('div')`
  border: 1px solid ${colors.gray2};
  border-radius: 0.3rem;
  padding: ${sizes.xSmall} 0;
  text-transform: capitalize;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
`;

const StyledMenuButton = styled('button')`
  cursor: pointer;
  text-align: left;
  padding: ${sizes.xSmall} ${sizes.small};
  background-color: ${colors.white};
  border: none;
  transition: all 0.2s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.purple1};
  }
`;

const StyledChildrenContainer = styled('span')`
  cursor: pointer;
`;

const ContextMenu: React.FC<ToolTipProps> = ({
  menuItems = [],
  position = 'bottom',
  children,
  menuTestId,
  triggerTestId,
  onShow,
  onHide,
  useContext = false
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstItemRef = useRef<HTMLButtonElement>(null);

  const handleToggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const handleRequestClose = () => {
    setMenuOpen(false);
  };

  const handleItemClick = (action: () => void) => {
    handleRequestClose();
    action();
  };

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setMenuOpen(false);
    }
  };

  const handleOnShow = () => {
    firstItemRef.current && firstItemRef.current.focus();
    onShow && onShow();
  };

  const renderItems = () =>
    menuItems.map((item, index) => (
      <StyledMenuButton
        key={item.label}
        ref={index === 0 ? firstItemRef : null}
        onClick={() => {
          handleItemClick(item.action);
        }}
        onKeyDown={handleListKeyDown}>
        <StandardTypography>{item.label}</StandardTypography>
      </StyledMenuButton>
    ));

  const styledHTML = <StyledMenu data-testid={menuTestId}>{menuItems.length > 0 && renderItems()}</StyledMenu>;

  return (
    <Fragment>
      <Global styles={remedyContextMenuStyle} />
      <Tooltip
        useContext={useContext}
        animateFill={false}
        animation="fade"
        duration={200}
        html={styledHTML}
        position={position}
        arrow={false}
        interactive={true}
        theme="remedy-contextMenu"
        onShown={handleOnShow}
        onHide={onHide}
        trigger={'click'}
        onRequestClose={handleRequestClose}
        open={menuOpen}
        popperOptions={{
          modifiers: {
            preventOverflow: {
              boundariesElement: 'window'
            }
          }
        }}>
        <StyledChildrenContainer onClick={handleToggleMenu} data-testid={triggerTestId}>
          {children}
        </StyledChildrenContainer>
      </Tooltip>
    </Fragment>
  );
};

export default ContextMenu;
