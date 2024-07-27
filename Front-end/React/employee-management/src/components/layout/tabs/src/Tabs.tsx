import React, { Children, ReactElement } from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { colors, sizes } from '../../theme/lib/index';
import { TabProps } from './Tab';

interface TabsProps {
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
  children: Array<ReactElement<TabProps>>;
  className?: string;
}

const TabsBar = styled('div')`
  display: flex;
  padding: ${sizes.xSmall} 0;
  border-bottom: 1px solid ${colors.gray2};
  & > button {
    margin-right: ${sizes.xSmall};
  }
`;

const Tabs = ({ disabled, value: selectedTab, onChange, children, className }: TabsProps) => {
  const handleControlClick = (value: number) => (): void => {
    onChange(value);
  };
  const tabs = Children.map(children, (child: ReactElement<TabProps>) => child).map((child, index) =>
    React.cloneElement(child, {
      onClick: handleControlClick(child.props.value || index),
      active: child.props.active || index === selectedTab,
      value: child.props.value || index,
      disabled: disabled || child.props.disabled
    })
  );

  return <TabsBar className={className}>{tabs}</TabsBar>;
};

export default Tabs;
