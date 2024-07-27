import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';

const HintTypography = styled.span`
  ${defaultFont};
  font-size: 1.2rem;

  line-height: 1.7rem;
  letter-spacing: 0.025rem;
  color: ${colors.gray5};

  &.reverse {
    color: ${colors.gray3};
  }
  &.disabled {
    color: ${colors.gray4};
  }
`;

export default HintTypography;
