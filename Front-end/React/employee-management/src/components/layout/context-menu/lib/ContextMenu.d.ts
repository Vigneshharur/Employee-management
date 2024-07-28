import React from 'react';
import 'react-tippy/dist/tippy.css';
declare type ToolTipProps = {
    position?: 'top' | 'top-end' | 'top-start' | 'bottom' | 'bottom-end' | 'bottom-start' | 'right' | 'left';
    children: React.ReactNode;
    menuTestId?: string;
    triggerTestId?: string;
    onShow?: () => void;
    onHide?: () => void;
    menuItems: {
        label: string;
        action: () => void;
    }[];
    useContext?: boolean;
};
declare const ContextMenu: React.FC<ToolTipProps>;
export default ContextMenu;
//# sourceMappingURL=ContextMenu.d.ts.map