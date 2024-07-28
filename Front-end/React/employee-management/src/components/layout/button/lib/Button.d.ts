import React, { ReactNode } from 'react';
import '@emotion/core';
import { StyleType } from './StyleType';
import { ICONS } from '../../icon';
interface BaseButtonProps {
    styleType?: StyleType;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    className?: string;
    id?: string;
    testId?: string;
    iconClass?: ICONS;
    children: ReactNode;
}
declare type ButtonTypeDependentProps = {
    type: 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} | {
    type?: 'button';
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
declare type ButtonProps = BaseButtonProps & ButtonTypeDependentProps & React.HTMLAttributes<HTMLButtonElement>;
export interface ButtonStyleProps extends JSX.Element {
    props: ButtonProps;
}
export declare const sortButtonOrder: (buttonArray: ButtonStyleProps[] | undefined) => ButtonStyleProps[];
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map