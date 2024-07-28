import { ReactNode, MouseEvent } from 'react';
import '@emotion/core';
export interface TabProps {
    active?: boolean;
    disabled?: boolean;
    value?: number;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}
declare const _default: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TabProps, object>;
export default _default;
//# sourceMappingURL=Tab.d.ts.map