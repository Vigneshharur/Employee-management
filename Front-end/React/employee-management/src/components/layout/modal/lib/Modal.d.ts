import React from 'react';
import { BannerTypes } from '../../banner/lib/';
import { ButtonStyleProps } from '../../button/lib';
declare type ModalProps = {
    isOpen?: boolean;
    hideModal?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    children?: React.ReactNode;
    headerText?: string | React.ReactNode;
    banner?: {
        type: BannerTypes;
        text: string;
    };
    className?: string;
    buttons?: ButtonStyleProps[];
    secondaryButtons?: ButtonStyleProps[];
    id?: string | number;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map