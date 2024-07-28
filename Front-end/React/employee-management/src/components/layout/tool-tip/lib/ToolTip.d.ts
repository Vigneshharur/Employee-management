import React from 'react';
import 'react-tippy/dist/tippy.css';
declare type ToolTipProps = {
    html?: React.ReactNode;
    text?: string;
    position?: 'top' | 'top-end' | 'top-start' | 'bottom' | 'bottom-end' | 'bottom-start' | 'right' | 'right-end' | 'left';
    children: React.ReactNode;
    interactive?: boolean;
    testId?: string;
    onShow?: () => void;
    onHidden?: () => void;
    onHide?: () => void;
    hideOnClick?: boolean;
    useContext?: boolean;
};
declare const ToolTip: React.FC<ToolTipProps>;
export default ToolTip;
//# sourceMappingURL=ToolTip.d.ts.map