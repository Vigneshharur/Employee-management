import React, { ChangeEvent } from 'react';
export interface CheckboxProps {
    value: boolean;
    indeterminate?: boolean;
    onChange?: (value: boolean, event: ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
}
declare function Checkbox({ value, indeterminate, onChange, id, label, className, disabled, ...rest }: CheckboxProps): React.JSX.Element;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map