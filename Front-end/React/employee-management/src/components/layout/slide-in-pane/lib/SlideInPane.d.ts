import React from 'react';
import { BannerTypes } from '../../banner/lib/';
import { ButtonStyleProps } from '../../button/lib';
declare type SlideInPaneProps = {
    isOpen?: boolean;
    headerText?: string;
    buttons?: ButtonStyleProps[];
    banner?: {
        type: BannerTypes;
        text: string;
    };
    badge?: {
        text: string;
        inline: boolean;
    };
    children: React.ReactNode;
    headerChildren?: React.ReactNode;
    showNav?: boolean;
    isOverlayOpen?: boolean;
    onOpen?: Function;
    onClose: Function;
    onScroll?: Function;
    startingPosition?: 'right' | 'left';
    width?: string;
    className?: string;
};
declare const SlideInPane: ({ isOpen, headerText, buttons, banner, badge, children, headerChildren, showNav, isOverlayOpen, onOpen, onClose, onScroll, startingPosition, width, className }: SlideInPaneProps) => React.JSX.Element;
export default SlideInPane;
//# sourceMappingURL=SlideInPane.d.ts.map