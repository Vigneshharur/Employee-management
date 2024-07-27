import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';

const FlagTypography = styled.span`
  ${defaultFont};
  font-size: 1.1rem;
  line-height: 1.36rem;
  letter-spacing: 0.05rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.gray5};

  &.reverse {
    color: ${colors.gray3};
  }
  &.disabled {
    color: ${colors.gray4};
  }
`;

export default FlagTypography;
