import React from 'react';
import styled from '@emotion/styled';
import { sizes } from '../../theme/lib/index';

type SpacerStyledProps = {
  itemHeight?: typeof sizes[keyof typeof sizes];
  itemWidth?: typeof sizes[keyof typeof sizes];
  itemDisplay?: string;
};

const Spacer = styled('span')<SpacerStyledProps>`
  display: ${({ itemDisplay = 'inline-block' }) => itemDisplay};
  height: ${({ itemHeight = 0 }) => itemHeight};
  width: ${({ itemWidth = 0 }) => itemWidth};
`;

export default Spacer;
