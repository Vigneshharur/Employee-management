import React, { ReactElement } from 'react';
import '@emotion/core';
import { TabProps } from './Tab';
interface TabsProps {
    value: number;
    disabled?: boolean;
    onChange: (value: number) => void;
    children: Array<ReactElement<TabProps>>;
    className?: string;
}
declare const Tabs: ({ disabled, value: selectedTab, onChange, children, className }: TabsProps) => React.JSX.Element;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map