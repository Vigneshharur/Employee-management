import React from 'react';
import '@emotion/core';
import { Props } from 'react-select';
export interface Value {
    label: string;
    value: string;
}
interface DropdownListProps extends Props {
    className?: string;
    items: Value[] | [];
    value?: Value;
    handleChange: (event: Value | null) => void;
    placeholder?: string;
    label?: string;
    labelMessage?: string;
    id: string;
    disabled?: boolean;
    isSearchable?: boolean;
    isClearable?: boolean;
    restrictedHeight?: undefined;
    required?: boolean;
    isWithinModal?: boolean;
    error?: boolean;
    errorMessage?: string;
}
declare const DropdownList: ({ className, items, value, handleChange, placeholder, label, labelMessage, id, disabled, isSearchable, isClearable, restrictedHeight, required, isWithinModal, error, errorMessage, ...args }: DropdownListProps) => React.JSX.Element;
export default DropdownList;
//# sourceMappingURL=DropdownList.d.ts.map