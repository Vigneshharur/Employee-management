import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';

const DisplaySmallTypography = styled.span`
  ${defaultFont};
  font-size: 2.1rem;
  line-height: 2.6rem;
  font-weight: normal;
  color: ${colors.black};

  &.reverse {
    color: ${colors.white};
  }

  &.disabled {
    color: ${colors.gray4};
  }
`;

export default DisplaySmallTypography;
