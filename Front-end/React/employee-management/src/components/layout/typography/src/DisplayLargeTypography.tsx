import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';

const DisplayLargeTypography = styled.span`
  ${defaultFont};
  font-size: 3.4rem;
  line-height: 4rem;
  font-weight: normal;
  color: ${colors.black};

  &.reverse {
    color: ${colors.white};
  }

  &.disabled {
    color: ${colors.gray4};
  }
`;

export default DisplayLargeTypography;
