import React from 'react';
import 'react-tippy/dist/tippy.css';
declare type PopoverProps = {
    toggle: (value: boolean) => void;
    isOpen: boolean;
    content: React.ReactElement;
    children: React.ReactNode;
    position?: 'top' | 'top-end' | 'top-start' | 'bottom' | 'bottom-end' | 'bottom-start' | 'right' | 'left';
    triggerTestId?: string;
    onShow?: () => void;
    onHide?: () => void;
    useContext?: boolean;
};
declare const Popover: React.FC<PopoverProps>;
export default Popover;
//# sourceMappingURL=Popover.d.ts.map