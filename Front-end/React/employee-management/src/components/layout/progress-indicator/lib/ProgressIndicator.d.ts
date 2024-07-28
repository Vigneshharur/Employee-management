import React from 'react';
import '@emotion/core';
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
declare function ProgressIndicator({ steps, current, valueAsIcon, handleClick }: IndicatorProps): React.JSX.Element;
export default ProgressIndicator;
//# sourceMappingURL=ProgressIndicator.d.ts.map