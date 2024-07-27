import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';

const HeadingTypography = styled.span`
  ${defaultFont};
  font-size: 1.7rem;
  line-height: 2.2rem;
  font-weight: 600;
  color: ${colors.black};
  margin-bottom: 0.5rem;

  &.reverse {
    color: ${colors.white};
  }

  &.disabled {
    color: ${colors.gray4};
  }
`;

export default HeadingTypography;
