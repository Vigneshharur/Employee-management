import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { BannerTypes } from './BannerTypes';
import Icon from '../../icon/lib/';
import { colors, sizes } from '../../theme';
import { SmallTypography } from '../../typography/lib/';

type styledProps = {
  type: BannerTypes;
};

const Wrapper = styled('div')<styledProps>`
  display: flex;
  align-items: center;
  min-height: 5rem;
  padding: ${sizes.xSmall} ${sizes.large};
  background-color: ${(props) => {
    switch (props.type) {
      case BannerTypes.INFORMATIONAL:
        return colors.purple1;
      case BannerTypes.WARNING:
        return colors.yellow1;
      case BannerTypes.PATIENT_SAFETY:
        return colors.red1;
      case BannerTypes.CONFIRMATION:
      default:
        return colors.green1;
    }
  }};
`;
const BannerText = styled(SmallTypography)<styledProps>`
  color: ${(props) => {
    switch (props.type) {
      case BannerTypes.INFORMATIONAL:
        return colors.gray5;
      case BannerTypes.WARNING:
        return colors.yellow3;
      case BannerTypes.PATIENT_SAFETY:
        return colors.red2;
      case BannerTypes.CONFIRMATION:
      default:
        return colors.green3;
    }
  }};
`;

const StyledIcon = styled(Icon)`
  margin-right: ${sizes.small};
`;

type BannerProps = {
  children: React.ReactNode;
  type?: BannerTypes;
  className?: string;
};

const Banner: React.FC<BannerProps> = ({ children, type = BannerTypes.CONFIRMATION, className }) => {
  function renderIcon(): React.ReactNode {
    let iconType;
    let iconColor;
    const iconWeight = type === BannerTypes.PATIENT_SAFETY ? 'fas' : 'fal';
    switch (type) {
      case BannerTypes.INFORMATIONAL:
        iconType = 'info-circle';
        iconColor = colors.purple3;
        break;
      case BannerTypes.WARNING:
        iconType = 'exclamation-triangle';
        iconColor = colors.yellow2;
        break;
      case BannerTypes.PATIENT_SAFETY:
        iconType = 'exclamation-circle';
        iconColor = colors.red2;
        break;
      case BannerTypes.CONFIRMATION:
      default:
        iconType = 'check-circle';
        iconColor = colors.green2;
    }

    return <StyledIcon iconClass={iconType as IconName} color={iconColor} iconSize="2x" weight={iconWeight} />;
  }

  return (
    <Wrapper type={type} data-testid="banner" className={className}>
      <div>{renderIcon()}</div>
      <div>
        <BannerText type={type}>{children}</BannerText>
      </div>
    </Wrapper>
  );
};

export default Banner;
