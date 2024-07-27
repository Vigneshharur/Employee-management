import styled from '@emotion/styled';
import defaultFont from './Typography';
import { colors } from '../../theme/lib/';

const NavigationTypography = styled.span`
  ${defaultFont};
  list-style: none;
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.black};

  &.reverse {
    color: ${colors.white};
  }
  &.disabled {
    color: ${colors.gray4};
  }
  &.active {
    color: ${colors.cta};
  }
`;

export default NavigationTypography;
