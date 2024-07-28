import React from 'react';
import '@emotion/core';
declare type ButtonBarProps = {
    buttonItems: {
        name: string;
        selected: boolean;
        disabled?: boolean;
    }[];
    onClick: (item: {
        name: string;
        selected: boolean;
    }) => void;
    className?: string;
};
declare const ButtonBar: React.FC<ButtonBarProps>;
export default ButtonBar;
//# sourceMappingURL=ButtonBar.d.ts.map