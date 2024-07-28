import React from 'react';
interface FileInputProps {
    label: string;
    value: Array<File>;
    error?: string;
    disabled?: boolean;
    acceptedFiles: string;
    onChange: Function;
    buttonText: string;
    buttonType: string;
}
declare const FileInput: React.FC<FileInputProps>;
export default FileInput;
//# sourceMappingURL=file-input.d.ts.map