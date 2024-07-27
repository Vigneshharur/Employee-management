import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { SmallTypography, StandardTypography } from '../../typography/lib/';
import { colors } from '../../theme/lib/';
import Icon from '../../icon/lib/';

const lighterGreen = '#d4e1b6';

const ProgressWrapper = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  position: relative;
  .step {
    display: table-cell;
    text-align: center;
    vertical-align: top;
    overflow: visible;
    position: relative;
  }
  .step:not(:last-child):before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: -2.5rem;
    background-color: ${colors.green2};
    height: 0.2rem;
    width: 100%;
  }
  .step:not(.complete):before,
  .step:not(.in-progress):before {
    background-color: ${lighterGreen};
  }
  .step .node {
    display: inline-block;
    border: 0.2rem solid ${lighterGreen};
    background-color: ${colors.white};
    border-radius: 1.8rem;
    height: 2.4rem;
    width: 2.4rem;
    line-height: 2rem;
  }
  .step.complete:before {
    background-color: ${colors.green2};
  }
  .step.complete .node {
    border-color: ${colors.green2};
    background-color: ${colors.white};
  }
  .step.in-progress .node {
    border-color: ${colors.green2};
  }
`;

const NodeWrapper = styled.div<{ clickable?: boolean }>`
  border: 0.2rem solid ${colors.white};
  border-width: 0 0.5rem;
  position: absolute;
  top: -3.7rem;
  left: 50%;
  margin-left: -1.8rem;
  z-index: 3;
  ${({ clickable }) => clickable && `cursor: pointer;`}
`;

const Current = styled.span`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${colors.green2};
  border-radius: 50%;
  position: relative;
  top: 0.2rem;
`;

interface StepProps extends StepOptions {
  current?: number;
  valueAsIcon?: boolean;
  clickable?: boolean;
  handleClick?: (event?: React.MouseEvent<HTMLDivElement>, stepValue?: StepOptions) => void;
}

const Step: React.FC<StepProps> = ({ label, value, handleClick, current = 0, valueAsIcon }) => {
  const clickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    handleClick && handleClick(event, { label, value });
  };

  if (current < value) {
    return (
      <div className="step">
        <SmallTypography>{label}</SmallTypography>
        <NodeWrapper clickable={!!handleClick} onClick={clickEvent}>
          <div className="node">
            {valueAsIcon && <StandardTypography color={colors.gray2}>{value}</StandardTypography>}
          </div>
        </NodeWrapper>
      </div>
    );
  } else if (current == value) {
    return (
      <div className="step in-progress">
        <SmallTypography>{label}</SmallTypography>
        <NodeWrapper clickable={!!handleClick} onClick={clickEvent}>
          <div className="node">
            {valueAsIcon ? <StandardTypography color={colors.green2}>{value}</StandardTypography> : <Current />}
          </div>
        </NodeWrapper>
      </div>
    );
  } else {
    return (
      <div className="step complete">
        <SmallTypography>{label}</SmallTypography>
        <NodeWrapper clickable={!!handleClick} onClick={clickEvent}>
          <div className="node">
            {valueAsIcon ? (
              <StandardTypography color={colors.green2}>{value}</StandardTypography>
            ) : (
              <Icon color={colors.green2} weight="fas" iconClass="check" />
            )}
          </div>
        </NodeWrapper>
      </div>
    );
  }
};

interface StepOptions {
  label: string;
  value: number;
}

export interface IndicatorProps {
  steps: StepOptions[];
  current: number;
  valueAsIcon?: boolean;
  handleClick?: (event?: React.MouseEvent<HTMLDivElement>, stepValue?: StepOptions) => void;
}

function ProgressIndicator({ steps, current, valueAsIcon, handleClick }: IndicatorProps) {
  return (
    <ProgressWrapper>
      {steps.map((step) => {
        return (
          <Step
            label={step.label}
            value={step.value}
            key={step.value}
            current={current}
            valueAsIcon={valueAsIcon}
            handleClick={handleClick}
          />
        );
      })}
    </ProgressWrapper>
  );
}

export default ProgressIndicator;
