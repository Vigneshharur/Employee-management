import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
declare type Props = {
    onChange: (value: Date | null) => Date | null;
    value: Date | null;
    externalError?: boolean;
    externalErrorText?: string;
    disabled?: boolean;
    onBlur?: () => void;
    maxDate?: Date;
    minDate?: Date;
    maxTime?: Date;
    minTime?: Date;
    id?: string;
    labelText?: string | undefined;
    required?: string | null | undefined;
    timePickerOnly?: boolean;
};
declare const RemedyDatePicker: React.FunctionComponent<Props>;
export default RemedyDatePicker;
//# sourceMappingURL=DatePicker.d.ts.map