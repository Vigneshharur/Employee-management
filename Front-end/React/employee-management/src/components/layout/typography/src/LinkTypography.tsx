import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors, fontSize } from '../../theme/lib/index';

const LinkTypography = styled.span`
  ${defaultFont};
  font-size: ${fontSize.standard};
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  font-weight: 600;
  color: ${colors.cta};
  cursor: pointer;

  &.reverse {
    color: ${colors.white};
  }
  &.disabled {
    color: ${colors.gray4};
  }
`;

export default LinkTypography;
