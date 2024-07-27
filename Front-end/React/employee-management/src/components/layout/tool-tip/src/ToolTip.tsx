import React, { Fragment } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { SmallTypography } from '../../typography/lib/index';
import { colors, sizes, boxShadow } from '../../theme/lib/index';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

type ToolTipProps = {
  html?: React.ReactNode;
  text?: string;
  position?:
    | 'top'
    | 'top-end'
    | 'top-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'right'
    | 'right-end'
    | 'left';
  children: React.ReactNode;
  interactive?: boolean;
  testId?: string;
  onShow?: () => void;
  onHidden?: () => void;
  onHide?: () => void;
  hideOnClick?: boolean;
  useContext?: boolean;
};

const ToolTipWrapper = styled<'div', { forceWordBreak: boolean }>('div')`
  margin: ${sizes.small};
  white-space: ${({ forceWordBreak }) => (forceWordBreak ? 'pre-line' : 'normal')};
  word-wrap: ${({ forceWordBreak }) => (forceWordBreak ? 'break-word' : 'normal')};
  word-break: ${({ forceWordBreak }) => (forceWordBreak ? 'break-all' : 'normal')};
  max-width: 32.5rem;
  text-align: left;
`;

const remedyToolTipStyle = css`
  .tippy-popper[x-placement^='top'] .tippy-tooltip.remedy-theme .arrow-regular {
    border-top-color: ${colors.purple1};
  }
  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.remedy-theme .arrow-regular {
    border-bottom-color: ${colors.purple1};
  }
  .tippy-popper[x-placement^='left'] .tippy-tooltip.remedy-theme .arrow-regular {
    border-left-color: ${colors.purple1};
  }
  .tippy-popper[x-placement^='right'] .tippy-tooltip.remedy-theme .arrow-regular {
    border-right-color: ${colors.purple1};
  }
  .tippy-tooltip.remedy-theme .arrow-regular {
    transform: scale(2.25);
  }
  .tippy-tooltip.remedy-theme {
    border: 1px solid ${colors.gray2};
    border-radius: 0;
    box-shadow: ${boxShadow};
    background-color: ${colors.purple1};
  }
`;

const StyledSmallText = styled(SmallTypography)`
  color: ${colors.black};
`;

const ToolTip: React.FC<ToolTipProps> = ({
  text,
  html,
  position = 'top',
  children,
  interactive,
  testId,
  onShow,
  onHide,
  onHidden,
  hideOnClick = true,
  useContext = false
}) => {
  const forceWordBreak = !(typeof text === 'string' && text.indexOf(' ') > -1);

  const styledHTML = (
    <ToolTipWrapper forceWordBreak={forceWordBreak}>
      <StyledSmallText>{html || text}</StyledSmallText>
    </ToolTipWrapper>
  );

  return (
    <Fragment>
      <Global styles={remedyToolTipStyle} />
      <Tooltip
        useContext={useContext}
        html={styledHTML}
        position={position}
        arrow
        interactive={interactive}
        theme="remedy"
        data-testId={testId}
        onShow={onShow}
        onHidden={onHidden}
        onHide={onHide}
        hideOnClick={hideOnClick}
        popperOptions={{
          modifiers: {
            preventOverflow: {
              boundariesElement: 'window'
            }
          }
        }}>
        {children}
      </Tooltip>
    </Fragment>
  );
};

export default ToolTip;
