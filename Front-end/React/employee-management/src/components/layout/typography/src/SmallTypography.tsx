import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';

type SmallTypographyProps = {
  color?: string;
};

const SmallTypography = styled.span<SmallTypographyProps>`
  ${defaultFont};
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 0.01rem;
  font-weight: 400;
  color: ${({ color }): string => (color ? color : colors.gray5)};

  &.reverse {
    color: ${colors.gray3};
  }
  &.disabled {
    color: ${colors.gray4};
  }
`;

export default SmallTypography;
