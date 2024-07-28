import React, { ReactNode } from 'react';
import '@emotion/core';
interface nonGroupedValues {
    id: string;
    label: string;
    value: string;
}
interface groupedValues extends nonGroupedValues {
    group: string;
}
interface groupedOption {
    label: string;
    options: groupedValues[];
}
export interface DropdownMultiGroupSelectProps {
    options: groupedOption[] | nonGroupedValues[];
    value: groupedValues[] | nonGroupedValues[];
    handleChange: (event: groupedValues[] | nonGroupedValues[] | null) => void;
    label: string;
    id: string;
    placeholder?: string;
    secondaryLabel?: string;
    allOptionsLabel?: string;
    noOptionsMessage?: () => ReactNode;
    isDisabled?: boolean;
    isWithinModal?: boolean;
    isRequiredField?: boolean;
    className?: string;
    error?: boolean;
    errorMessage?: string;
}
declare const DropdownMultiGroupSelect: React.FC<DropdownMultiGroupSelectProps>;
export default DropdownMultiGroupSelect;
//# sourceMappingURL=DropdownMultiGroupSelect.d.ts.map