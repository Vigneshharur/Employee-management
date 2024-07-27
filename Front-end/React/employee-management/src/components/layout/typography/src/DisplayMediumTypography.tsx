import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/index';

const DisplayMediumTypography = styled.span`
  ${defaultFont};
  font-size: 2.6rem;
  line-height: 3.2rem;
  font-weight: normal;
  color: ${colors.black};

  &.reverse {
    color: ${colors.white};
  }

  &.disabled {
    color: ${colors.gray4};
  }
`;

export default DisplayMediumTypography;
