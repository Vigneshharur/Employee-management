import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { SmallTypography, HeadingTypography } from '../../typography/lib/';

const StyledContainer = styled('span')`
  display: inline-grid;
  ${HeadingTypography} {
    margin: 0;
  }
`;

const Label = SmallTypography.withComponent('label');

type LabeledTextProps = {
  id?: string;
  value: string;
  label: string;
  className?: string;
  testId?: string;
};

const LabeledText: React.FC<LabeledTextProps> = ({
  value,
  id = `labeledText-${new Date().getTime()}`,
  label,
  className,
  testId
}) => (
  <StyledContainer className={className} id={id} data-testid={testId}>
    <Label>{label}</Label>
    <HeadingTypography>{value}</HeadingTypography>
  </StyledContainer>
);

export default LabeledText;
