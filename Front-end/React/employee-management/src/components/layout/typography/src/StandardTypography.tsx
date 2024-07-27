import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors, fontSize } from '../../theme/lib/';

type StandardTypographyProps = {
  color?: string;
};

const StandardTypography = styled.span<StandardTypographyProps>`
  ${defaultFont};
  font-size: ${fontSize.standard};
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  font-weight: normal;
  color: ${({ color }) => (color ? color : `${colors.black}`)};

  &.reverse {
    color: ${colors.white};
  }

  &.disabled {
    color: ${colors.gray4};
  }
`;

export default StandardTypography;
